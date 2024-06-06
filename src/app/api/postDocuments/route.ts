import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { id, topic, pretext, text, category } = await request.json();
    const rel = await sql`SELECT * FROM doc_topics;`
    console.log(rel);
    const response = await sql`
        INSERT INTO doc_topics (id, name, pretext, text, category)
        VALUES (${id}, ${topic}, ${pretext}, ${text}, ${category});
        `;

    console.log(response);
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