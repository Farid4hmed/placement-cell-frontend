import Navigation from "@/components/Navigation";
import Resources from "@/components/resources";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AddCompanyForm from "./addCompany";

export default async function Main() {
    const session: any = await getServerSession(authOptions)
    return (
        <Navigation session={session}>
            <main className="">
                {session.user.isAdmin && <AddCompanyForm />}
            </main>
        </Navigation>
    );


}
