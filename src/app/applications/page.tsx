import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Applications from "./applications";

export default async function Main() {
    const session = await getServerSession(authOptions)

    return (
        <Navigation session={session}>
            <main className="">
                <Applications />
            </main>
        </Navigation>
    );


}
