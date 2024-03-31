"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Jobs() {
  const { data: session, status } = useSession()
  const router = useRouter()


  if (status === "authenticated") {
    return (
      <main className="">

      </main>
    );
  } else if (status !== "loading") {
    router.push("/login")
  }
}
