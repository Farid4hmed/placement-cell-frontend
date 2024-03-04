'use client'

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default async function Logout() {
    const router = useRouter()
    async function handleLogout() {
        await signOut()
    }

    return (
        <span onClick={handleLogout}>
            Logout
        </span>
    )
}