import Navigation from "@/components/Navigation";
import ImportResume from "@/components/ImportResume";
import { getServerSession } from "next-auth";

export default async function Main() {
  const session = await getServerSession()

    return (
      <Navigation session={session}>
        <main className="">
          <ImportResume />
        </main>
      </Navigation>
    );


}
