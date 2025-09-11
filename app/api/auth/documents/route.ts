// app/api/auth/documents/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust path as needed
import { prisma } from "@/app/lib/prisma";

// GET documents for authenticated user
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    // Find user by email or id from session
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          //@ts-ignore
          { email: session.user.email },
           //@ts-ignore
          { id: session.user.id },
        ],
      },
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
        user: {
          select: { id: true, username: true, email: true },
        },
      },
    });

    // Get category counts
    const categoryCounts = await prisma.document.groupBy({
      by: ["category"],
      where: { userId: user.id },
      _count: { category: true },
    });

    const formattedCategoryCounts = categoryCounts.reduce((acc: any, item: any) => {
      acc[item.category] = item._count.category;
      return acc;
    }, {} as Record<string, number>);

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

