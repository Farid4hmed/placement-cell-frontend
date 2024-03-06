"use client"
import { getServerSession } from 'next-auth'
import LoginForm from './form'
import { redirect } from 'next/navigation'

export default async function Login() {
    return (
        <main className="flex justify-center items-center h-screen">

            <LoginForm />

        </main>
    )
}
