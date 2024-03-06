import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const hashedPassword = await hash(password, 10);

    const checkUser = await sql`
        SELECT * FROM users WHERE email = ${email}
        `;

    if (checkUser.rows.length > 0) {
      return new Response(JSON.stringify({ error: "Email already exists." }), {
        status: 409,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const response = await sql`
        INSERT INTO users (email, password)
        VALUES (${email}, ${hashedPassword});
        `;
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "success" });
}
