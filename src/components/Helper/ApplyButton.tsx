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
            <button onClick={applyHandler} type='submit' className={`${isApplied && 'opacity-20'} px-10 py-3 bg-blue-600 text-white font-semibold transition-all duration-300 hover:bg-blue-800 hover:scale-105`} disabled={isApplied}>{isApplied ? "Applied" : "Apply Now"}</button>
            <ToastContainer position='top-center' />
        </div>
    )
}