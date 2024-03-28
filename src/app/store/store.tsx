import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


const userDetailsStore = (set: any) => ({
    email: "",
    setDetails: (email: string) => set({ email })
})

export const useUserDetailsStore = create(
    devtools(persist(userDetailsStore, { name: "userDetails" }))
)