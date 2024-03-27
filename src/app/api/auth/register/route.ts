import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!validateEmail(email)) {
      return new Response(JSON.stringify({ error: "Invalid email." }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const registrationNo = email.split(".")[0]


    const hashedPassword = await hash(password, 10);

    const checkUser = await sql`
        SELECT * FROM students WHERE email = ${email}
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
        INSERT INTO students (email, password, registration_number)
        VALUES (${email}, ${hashedPassword}, ${registrationNo});
        `;

        console.log(response)
  } catch (error) {
    console.log(error);
  }

  return new Response(JSON.stringify({ error: "" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}




function validateEmail(email: string) {
  // Regular expression to match the email format
  const regex = /^\d+\.\w+@gmail\.com$/;
  return regex.test(email);
}