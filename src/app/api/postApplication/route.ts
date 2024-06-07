import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { jobId, resume, reg } = await request.json();

    if (!validateJobId(jobId)) {
      return new Response(JSON.stringify({ error: "Invalid jobId." }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const response = await sql`
      INSERT INTO applications (registration, jobId, resume)
      VALUES (${reg}, ${jobId}, ${resume});
    `;

    console.log(response);
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify({ message: "Application uploaded successfully" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function validateJobId(jobId: number) {
  // Validate that jobId is a positive integer
  return Number.isInteger(jobId) && jobId > 0;
}
