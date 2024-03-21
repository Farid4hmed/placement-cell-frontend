"use client"

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';


export default async function Video() {
    var items = [
        {
            "name": "Todd Kim",
            "text": "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit",
            "url": "http://youtube.com/embed/djajdhakjhdhasdhk"
        },
        {
            "name": "Hyatt Vincent",
            "text": "dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque",
            "url": "http://youtube.com/embed/djajdhakjhdhasdhk"
        },
        {
            "name": "Hammett Petty",
            "text": "elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare,",
            "url": "https://youtube.com/embed/djajdhakjhdhasdhk"
        },
        {
            "name": "Simone Marks",
            "text": "ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque",
            "url": "https://youtube.com/embed/djajdhakjhdhasdhk"
        },
        {
            "name": "Baker Barlow",
            "text": "tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus",
            "url": "http://youtube.com/embed/djajdhakjhdhasdhk"
        }
    ];

    // Create an empty array to store JSX elements
    const renderedItems = [];

    // Use a for loop to iterate over the array and create JSX elements
    for (let i = 0; i < items.length; i++) {
        // Push JSX elements into the renderedItems array
        renderedItems.push(
        <div>
            <Dialog.Root key={i}>
                <Dialog.Trigger asChild>
                    <a href="#" className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 transition-transform transform-gpu hover:scale-105 hover:shadow-lg">
                      <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            {items[i].name}
                          </h3>
                    
                          <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>
                      </div>
                    
                      <div className="mt-4">
                        <p className="text-pretty text-sm text-gray-500">
                          {items[i].text.length > 100 ? items[i].text.slice(0, 100) + '...' : items[i].text}
                        </p>
                      </div>
                    </a>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                          {items[i].name}
                        </Dialog.Title>
                        <iframe width="402" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                            {items[i].text}
                        </Dialog.Description>
                        <Dialog.Close asChild>
                            <button className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none" aria-label="Close">
                                <Cross2Icon />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
        );
    }
    return (
        <main className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8" style={{ width: '75vw'}}>
                {renderedItems}
            </div>
        </main>
    )
}         
