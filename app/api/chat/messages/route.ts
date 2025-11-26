import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "../../../lib/prisma";

async function getAuthenticatedUserId() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return { error: NextResponse.json({ error: "Authentication required" }, { status: 401 }) };
  }

  const user = await prisma.user.findFirst({
    where: { email: session.user.email },
    select: { id: true },
  });

  if (!user) {
    return { error: NextResponse.json({ error: "User not found" }, { status: 404 }) };
  }

  return { userId: user.id };
}

export async function GET() {
  try {
    const authResult = await getAuthenticatedUserId();
    if ("error" in authResult) return authResult.error;

    const messages = await prisma.chatMessage.findMany({
      where: { userId: authResult.userId },
      orderBy: { createdAt: "asc" },
      include: {
        user: { select: { username: true } },
        document: { select: { url: true } },
      },
    });

    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    console.error("Failed to fetch chat messages:", error);
    return NextResponse.json(
      { error: "Unable to fetch chat history" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const authResult = await getAuthenticatedUserId();
    if ("error" in authResult) return authResult.error;

    const { text } = await req.json();
    const sanitizedText = typeof text === "string" ? text.trim() : "";

    if (!sanitizedText) {
      return NextResponse.json(
        { error: "Message text is required" },
        { status: 400 }
      );
    }

    const chatMessage = await prisma.chatMessage.create({
      data: {
        userId: authResult.userId,
        content: sanitizedText,
        messageType: "TEXT",
      },
    });

    return NextResponse.json({ success: true, data: chatMessage });
  } catch (error) {
    console.error("Failed to create chat message:", error);
    return NextResponse.json(
      { error: "Unable to create chat message" },
      { status: 500 }
    );
  }
}

