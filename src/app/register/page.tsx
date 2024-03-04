"use client"
import RegisterForm from './form'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Login() {
    const session = await getServerSession()
    if (session) {
        redirect('/')
    }
    return (
        <main className="flex justify-center items-center h-screen">
            <RegisterForm />
        </main>
    )
}
