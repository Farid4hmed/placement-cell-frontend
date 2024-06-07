import { NextResponse } from "next/server";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const reg = searchParams.get('reg');

    if (!reg) {
      return new Response(JSON.stringify({ error: 'Invalid filename.' }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    const storageRef = ref(storage, `gs://placementcelldb.appspot.com/resumes/${reg}/resume.pdf`);
    const downloadURL = await getDownloadURL(storageRef);

    return new Response(JSON.stringify({ url: downloadURL }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to get file URL' }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
