import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  try {
    const result = await sql`SELECT * FROM application`;
    const data = result.rows;
    console.log('data', data)
    return new Response(JSON.stringify({ data: data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (error: any) {
    console.log(error);
    
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}