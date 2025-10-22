// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";

// Updated Zod schema to match your database schema
const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z
  .string()
  .regex(/^\d{10}$/, "Phone number must be 10 digits"),

  age: z.number().min(13, "Age must be at least 13").max(120, "Age must be less than 120").nullable().optional(),
  sex: z.enum(["Male", "Female", "Other", "Prefer not to say"]).nullable().optional(),
  location: z.string().nullable().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = signupSchema.parse(body);
    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: parsed.username },
          { email: parsed.email },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists with this username or email" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(parsed.password, 12);

    // Create new user with all fields
    const newUser = await prisma.user.create({
      data: {
        username: parsed.username,
        email: parsed.email,
        password: hashedPassword,
        phone: parsed.phone,
        age: parsed.age,
        sex: parsed.sex,
        location: parsed.location,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Return success response (don't include password)
    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
          phone: newUser.phone,
          age: newUser.age,
          sex: newUser.sex,
          location: newUser.location,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle Zod validation errors
    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: error.issues.map((i:any) => i.message).join("\n"), 
           details: "Validation failde",
         },
        { status: 400 }
      );
    }

    // Handle Prisma unique constraint errors
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Username or email already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}