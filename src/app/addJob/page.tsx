import Navigation from "@/components/Navigation";
import Resources from "@/components/resources";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AddJobForm from "./addJob";

export default async function Main() {
    const session: any = await getServerSession(authOptions)

    return (
        <Navigation session={session}>
            <main className="">
                {session.user.isAdmin && <AddJobForm />}
            </main>
        </Navigation>
    );


}
