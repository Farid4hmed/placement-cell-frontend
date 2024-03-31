"use client"

import LoginForm from './form'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"

export default async function Login() {
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === "unauthenticated") {
        return (
            <main className="flex justify-center items-center h-screen">

                <LoginForm />

            </main>
        )
    }
    else if (status !== 'loading'){
        router.push('/')
    }

}
