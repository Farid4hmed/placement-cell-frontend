// pages/api/storeResume.js
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";

export async function POST(request: any) {
  try {
    const formData = await request.formData();

    const file = formData.get('file');
    const reg = formData.get('reg');

    if (!file || !reg) {
      return new Response(JSON.stringify({ error: "Missing file or registration number." }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const storageRef = ref(storage, `gs://placementcelldb.appspot.com/resumes/${reg}/resume.pdf`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

    return new Response(JSON.stringify({ message: "File uploaded successfully.", downloadURL }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "File upload failed." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
