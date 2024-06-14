"use client"
import React, { useState, useEffect } from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function Applications() {
    const [applications, setApplications] = useState([])

    async function getApplicationDetails() {
        try {
            const res = await fetch('/api/getJobApplicationUserDetails')
            const data = await res.json()

            setApplications(data.data)
            console.log('data', data)

        } catch (error: any) {
            console.error(error)
        }
    }

    console.log('hereistheapplications', applications)

    useEffect(() => {
        getApplicationDetails()
    }, [])

    return (
        <section className="flex flex-col justify-center items-center">
            {/* back button */}
            <div className="w-full flex justify-between items-center">
                {/* <button className="flex bg-blue-500 hover:bg-blue-700 text-white w-1/8 font-bold py-2 px-4 rounded mb-10" onClick={() => window.location.href = '/jobs/alljobs'}>Go Back</button>
                 */}
                <a className="text-blue-600 hover:underline mb-20" href="/jobs/alljobs">&larr; Go Back</a>
            </div>
            <Table className={"max-h-[20vh] overflow-y-scroll"}>
                <TableHeader>
                    <TableRow>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Student's Registration</TableHead>
                        <TableHead>Student's Name</TableHead>
                        <TableHead>CGPA</TableHead>
                        <TableHead>Resume Link</TableHead>
                        <TableHead>Student's Phone No.</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {applications.map((job: any, idx) => (
                        <TableRow key={idx} onClick={() => { /* handle row click if needed */ }}>
                            <TableCell className="font-medium">{job.title}</TableCell>
                            <TableCell>{job.registration}</TableCell>
                            <TableCell>{job.name}</TableCell>
                            <TableCell>{job.cgpa}</TableCell>
                            <TableCell>
                                <a href={job.resume} target="_blank" rel="noopener  noreferrer">
                                    <p className="text-blue-600 underline">View Resume</p>
                                </a>
                            </TableCell>
                            <TableCell>{job.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


        </section>
    );


}
