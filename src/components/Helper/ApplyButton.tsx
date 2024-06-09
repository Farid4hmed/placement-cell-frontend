"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ApplyButton = (props: any) => {
    const [isApplied, setIsApplied] = useState(false)
    const [resumeLink, setResumeLink] = useState('')


    const handleGetResume = async () => {
        const res = await fetch(`/api/getResume?reg=${props.reg}`);
        const data = await res.json();
        if (res.ok) {
            console.log('resumeLink', data.url)
            return data.url
        } else {
            console.log('something went wrong')
        }
    };

    async function uploadApplication(resumeLink: any) {
        try {
            const response = await fetch('/api/postApplication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ jobId: parseInt(props.id), resume: resumeLink, reg: parseInt(props.reg) }),
            });

            if (response.status === 200) {
                console.log('Application uploaded succesfully')
            }


        } catch (error) {
            console.log(error)
        }
    }

    const applyHandler = async () => {
        const resumeLink = await handleGetResume()
        await uploadApplication(resumeLink)

        if (!isApplied) {
            toast.success("Submitted Successfully")
            setIsApplied(true)
        }

    }
    return (
        <div>
            {/* <button onClick={applyHandler} type='submit' className={`${isApplied && 'opacity-20'} px-10 py-3 bg-blue-600 text-white font-semibold transition-all duration-300 hover:bg-blue-800 hover:scale-105`} disabled={isApplied}>{isApplied ? "Applied" : "Apply Now"}</button>
             */}
            <div className="flex flex-col bg-white rounded-lg p-4 shadow-md">
                <div className="flex flex-col items-center mb-4">
                    <img className="w-18 h-18" src={props.job.image} alt="Company 08" />
                        <h2 className="ml-4 text-2xl font-bold">{props.job.name}</h2>
                </div>

                <div className="mb-4">
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <svg className="w-3.5 h-3.5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                <path d="M9.707 4.293a1 1 0 0 0-1.414 1.414L10.586 8H2V2h3a1 1 0 1 0 0-2H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4Z"></path>
                            </svg>
                            <span className="text-gray-700">24 August, 2024</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-3.5 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16">
                                <circle cx="7" cy="7" r="2"></circle>
                                <path d="M6.3 15.7c-.1-.1-4.2-3.7-4.2-3.8C.7 10.7 0 8.9 0 7c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-.7 3.7-2.1 5-.1.1-4.1 3.7-4.2 3.8-.4.3-1 .3-1.4-.1Zm-2.7-5 3.4 3 3.4-3c1-1 1.6-2.2 1.6-3.6 0-2.8-2.2-5-5-5S2 4.2 2 7c0 1.4.6 2.7 1.6 3.7 0-.1 0-.1 0 0Z"></path>
                            </svg>
                            <span className="text-gray-700">London, UK / Remote friendly</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-3 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
                                <path d="M15 0H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm-1 10H2V2h12v8Z"></path>
                                <circle cx="8" cy="6" r="2"></circle>
                            </svg>
                            <span className="text-gray-700">$75K - $100K</span>
                        </li>
                    </ul>
                </div>

                <div className="mb-4">
                    <a className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" href="#0">
                        Apply Now <span className="ml-1 text-blue-300">-&gt;</span>
                    </a>
                </div>

                <div>
                    <a className="text-blue-500 hover:underline" href="#0">Visit Website</a>
                </div>
            </div>

            <ToastContainer position='top-center' />
        </div>
    )
}