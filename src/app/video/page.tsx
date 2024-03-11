"use client"
import { getServerSession } from 'next-auth'
import LoginForm from './form'
import { redirect } from 'next/navigation'
import { Button } from "@/components/ui/button"
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
//import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default async function Video() {
    const items = ['Java', 'Python', 'Rust'];

    // Create an empty array to store JSX elements
    const renderedItems = [];

    // Use a for loop to iterate over the array and create JSX elements
    for (let i = 0; i < items.length; i++) {
        // Push JSX elements into the renderedItems array
        renderedItems.push(
            <Dialog.Root key={i}>
                <Dialog.Trigger asChild>
                  <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                    {items[i]}
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal style={{ width: '75vw', important: true }}>
                  <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                  <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                      Edit profile
                    </Dialog.Title>
                    <iframe width="402" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                      Make changes to your profile here. Click save when you're done.
                    </Dialog.Description>
                    <Dialog.Close asChild>
                      <button
                        className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                      >
                        <Cross2Icon />
                      </button>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
        );
    }
    return (
        <main className="flex justify-center items-center h-screen space-between">
            {renderedItems}
        </main>
    )
}         
