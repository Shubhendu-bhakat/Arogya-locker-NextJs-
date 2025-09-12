import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route"; // ✅ import correct auth config
import { prisma } from "@/app/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    console.log("This is session",session);
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Build where clause
    const whereClause: any = { userId: user.id };
    if (category && category !== "ALL") {
      whereClause.category = category;
    }

    // Fetch documents
    const documents = await prisma.document.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { id: true, username: true, email: true } },
      },
    });

    // Get category counts
    const categoryCounts = await prisma.document.groupBy({
      by: ["category"],
      where: { userId: user.id },
      _count: { category: true },
    });

    const formattedCategoryCounts = categoryCounts.reduce(
      (acc: Record<string, number>, item) => {
        acc[item.category] = item._count.category;
        return acc;
      },
      {}
    );

    return NextResponse.json({
      success: true,
      data: {
        documents,
        totalDocuments: documents.length,
        categoryCounts: formattedCategoryCounts,
      },
    });
  } catch (error) {
    console.error("Get documents error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch documents",
        details:
          process.env.NODE_ENV === "development"
            ? error instanceof Error
              ? error.message
              : "Unknown error"
            : "Internal server error",
      },
      { status: 500 }
    );
  }
}
