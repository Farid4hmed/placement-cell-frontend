import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";
import Create from "./builder";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
export default async function Main() {
  const session = await getServerSession(authOptions)

  return (
    <Navigation session={session}>
      <main className="">
        <Create session={session} />
      </main>
    </Navigation>
  );


}
