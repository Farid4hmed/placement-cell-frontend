import React from "react"
import Link from "next/link";
import { BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button"


const Navbar = () => {
    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:px-4">
                    <Link href="/">
                        <img src={'/images/soa.png'} className="mb-1" width={140} height={5} alt="Soa Logo" />
                    </Link>
                    <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
                        {/* <button type="button" className="hidden sm:inline-flex bg-black text-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-white rounded-sm text-sm px-4 py-2 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white mx-3 font-bold">
                            <Link href="https://app.solarad.ai/register">
                                TRY FREE DATA
                            </Link>
                        </button> */}
                        <Link href="https://app.solarad.ai/register">
                            <Button className="hidden sm:inline-flex bg-black hover:bg-black text-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-white rounded-sm text-sm px-5 py-5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white mx-3 font-extrabold">
                                TRY FREE DATA
                            </Button>
                        </Link>
                        {/* <button type="button" className="hidden sm:inline-flex text-orange-400 hover:bg-orange-400 hover:text-white bg-black border-orange-400 border hover: focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm text-sm px-3 py-2 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white font-bold">
                            <Link href="https://calendly.com/haider-solarad/solarad-demo" className="flex items-center">
                                <svg className="mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                <span>GET DEMO</span>
                            </Link>
                        </button> */}
                        <Link href="https://calendly.com/haider-solarad/solarad-demo">
                            <Button className="hidden sm:inline-flex text-orange-400 hover:bg-orange-400 hover:text-white bg-black border-orange-400 border hover: focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-sm px-5 py-5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white font-extrabold">
                                <BarChart3 className="mr-2 h-4 w-4" /> GET DEMO
                            </Button>
                        </Link>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-white text-sm" id="navbar-sticky">
                        <ul className="flex flex-col md:space-x-12 p-4 md:p-0 font-medium border rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-white dark:border-gray-700">
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-black md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-gray-300 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Products <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-47 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm sm:text-white lg:text-black dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link href="/forecast" className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forecast</Link>
                                        </li>

                                        <li>
                                            <Link href="/coming-soon" className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Weather Intelligence Platform</Link >
                                        </li>

                                        <li>
                                            <Link href="/coming-soon" className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Weather APIs for Solar</Link>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href="/company" className="block py-2 px-3 text-black hover:cursor-pointer md:text-white rounded hover:bg-gray-100 hover:text-gray-300 md:hover:bg-transparent md:p-0 md:dark:hover:text-gray-300 dark:text-black dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Company</Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="block py-2 px-3 text-black hover:cursor-pointer md:text-white rounded hover:bg-gray-100 hover:text-gray-300 md:hover:bg-transparent md:p-0 md:dark:hover:text-gray-300 dark:text-black dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="resourceDropdown" className="flex items-center justify-between w-full py-2 px-3 text-black md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-gray-300 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Resources <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                <div id="resourceDropdown" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm sm:text-white lg:text-black dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link href="https://blog.solarad.ai" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</Link>
                                        </li>

                                        <li>
                                            <Link href="https://blog.solarad.ai/series/the-renewable-leader" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Newsletter</Link>
                                        </li>

                                        <li>
                                            <Link href="/resource-map" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Resource Map</Link>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Navbar;
