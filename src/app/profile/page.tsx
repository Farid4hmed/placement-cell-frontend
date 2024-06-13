import Navigation from "@/components/Navigation";
import Resources from "@/components/resources";
import { getServerSession } from "next-auth";
import StudentProfile from "./profile";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UploadAndPreviewPdf from "../components/UploadAndPreviewPdf";

export default async function Main() {
    const session: any = await getServerSession(authOptions)

    console.log('session', session)


    const studentData = {
        name: session?.name,
        registrationNumber: session?.registration,
        branch: session?.branch,
        batch: session?.batch,
        section: session?.section,
        cgpa: session?.cgpa,
        email: session?.user.email,
        phone: session?.phone,
        profilePicture: "/images/user.webp",
    };

    return (
        <Navigation session={session}>
            <main className="flex flex-col items-center">
                <StudentProfile  {...studentData} />
                {!session.user.isAdmin && <UploadAndPreviewPdf reg={session?.registration} />}
            </main>
        </Navigation>
    );
}
