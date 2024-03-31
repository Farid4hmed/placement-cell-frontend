import { signOut } from "next-auth/react"

export default async function Logout() {
    async function handleLogout() {
        await signOut()
    }

    return (
        <span onClick={handleLogout}>
            Sign Out
        </span>
    )
}