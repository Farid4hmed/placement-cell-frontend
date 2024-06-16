import Navigation from "@/components/Navigation";
import Resources from "@/components/resources";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
export default async function Main() {
  const session: any = await getServerSession(authOptions)
  console.log('session', session)
  const isAdmin = session?.user.isAdmin
  return (
    <Navigation session={session}>
      <main className="">
        <Resources isAdmin={isAdmin} />
      </main>
    </Navigation>
  );


}
