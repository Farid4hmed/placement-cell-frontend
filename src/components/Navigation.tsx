'use client';
import React, { useEffect, useContext } from "react";
import { Building2, LibraryBig, ReceiptText, Folder, Home } from 'lucide-react';
import { initFlowbite } from 'flowbite';
import Logout from "./logout";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { AppContext } from "./context";

const Navigation = ({ children, ...props }: any) => {
    const router = useRouter();
    const { session } = props;
    const { isAdmin, toggleIsAdmin } = useContext(AppContext);

    useEffect(() => {
        console.log('Initializing Flowbite');
        initFlowbite();
    }, []);

    useEffect(() => {
        console.log('Session changed:', session);
        toggleIsAdmin(session?.user.email === '2041001037.faridahmed@gmail.com');
    }, [session, toggleIsAdmin]);

    useEffect(() => {
        console.log('Checking scrolling issue');
        // document.body.style.overflowY = 'auto';
    }, []);

    if (!!session)
        return (
            <>
                <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                    <span className="sr-only">Open sidebar</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                    </svg>
                                </button>
                                <a href="https://soa.ac.in" className="flex ms-2 md:me-24">
                                    <img src="/images/soa.png" className="h-8 me-3" alt="Soa Logo" />
                                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Placement Cell</span>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center ms-3">
                                    <div>
                                        <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                            <span className="sr-only">Open user menu</span>
                                            <img className="w-8 h-8 rounded-full" src="/images/user.webp" alt="user photo" />
                                        </button>
                                    </div>
                                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                                {session.user.email}
                                            </p>
                                        </div>
                                        <ul className="py-1" role="none">
                                            <li>
                                                <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" href={'/profile'}>Profile</Link>
                                            </li>
                                            <li>
                                                <Logout />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link href={`/`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => window.location.href = '/'}>
                                    <Home strokeWidth={1.25} />
                                    <span className="ms-3">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/jobs/alljobs`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => window.location.href = '/jobs/alljobs'}>
                                    <Building2 strokeWidth={1.25} />
                                    <span className="ms-3">Visiting Companies</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/resources`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => window.location.href = '/resources'}>
                                    <LibraryBig strokeWidth={1.25} />
                                    <span className="ms-3">Resources</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/resume`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => window.location.href = '/resume'}>
                                    <ReceiptText strokeWidth={1.25} />
                                    <span className="ms-3">Resume Generator</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`https://cerulean-muffin-74f94a.netlify.app?email=${session.user.email}`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => window.location.href = `https://cerulean-muffin-74f94a.netlify.app?email=${session.user.email}`}>
                                    <Folder strokeWidth={1.25} />
                                    <span className="ms-3">Your Files</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </aside>

                <div className="p-4 mt-20"> {/* Adjusted here */}
                    <div className="p-4 rounded-lg dark:border-gray-700">
                        {children}
                    </div>
                </div>

            </>
        );
    else {
        router.push('/login');
        return null; // Ensure nothing is rendered if redirected
    }
}

export default Navigation;
