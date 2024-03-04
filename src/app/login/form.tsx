"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


const formSchema = z.object({
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    })
})

const signUpFormSchema = z.object({
    Email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    password2: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    })
})

export default function LoginForm() {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const signUpForm = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            Email: "",
            password: "",
            password2: ""
        },
    })


    function onSignUpSubmit(values: z.infer<typeof signUpFormSchema>) {
        console.log(values)
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        const response = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        })

        console.log({ response })

        if (response?.ok) {
            router.push("/")
            router.refresh()
        }
    }

    return (
        <main className="flex justify-center items-center h-screen">

            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Sign In</TabsTrigger>
                    <TabsTrigger value="password">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome Back!</CardTitle>
                            <CardDescription>
                                Sign in to your account to access your dashboard.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john doe" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="password" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">Submit</Button>
                                </form>
                            </Form>

                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome!</CardTitle>
                            <CardDescription>
                                Enter the details below to create an account.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...signUpForm}>
                                <form onSubmit={signUpForm.handleSubmit(onSignUpSubmit)} className="space-y-4">
                                    <FormField
                                        control={signUpForm.control}
                                        name="Email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john doe" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={signUpForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>New Password</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="password" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={signUpForm.control}
                                        name="password2"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Re-enter Password</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="password" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">Submit</Button>
                                </form>
                            </Form>

                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

        </main>
    )
}
