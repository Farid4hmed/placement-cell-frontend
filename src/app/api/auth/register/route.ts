import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

function getRandomNumberOfRandomDigits() {
  const numberOfDigits = Math.floor(Math.random() * 10) + 1;

  const min = Math.pow(10, numberOfDigits - 1);
  const max = Math.pow(10, numberOfDigits) - 1;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // if (!validateEmail(email)) {
    //   return new Response(JSON.stringify({ error: "Invalid email." }), {
    //     status: 400,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    // }

    const registrationNo = getRandomNumberOfRandomDigits()


    const hashedPassword = await hash(password, 10);

    console.log('hashedPassword', hashedPassword)

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

        console.log('after pushing new users data', response)
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