import Navigation from "@/components/Navigation";
//import Resources from "@/components/resources";
import { getServerSession } from "next-auth";
import { useRouter } from 'next/router';


export default async function Main() {
  const session = await getServerSession()
  const router = useRouter();
  const { name, text, category } = router.query as Docs;
    return (
      <Navigation session={session}>
        <main className="">
          <div>
            <strong>{name}</strong>
            <br>
            <p>{text}</p>
        </div>
        </main>
      </Navigation>
    );


}
interface Docs {
  name: string;
  text: string;
  category: string;
}