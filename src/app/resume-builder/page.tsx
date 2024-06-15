import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";
import Create from "./builder";

export default async function Main() {
  const session = await getServerSession()

  return (
    <Navigation session={session}>
      <main className="">
        <Create />
      </main>
    </Navigation>
  );


}
