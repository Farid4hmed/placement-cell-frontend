import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const JobCard = ({ job, session }: any) => {
  // const [isApplied, setIsApplied] = useState(false)
  // const [applications, setApplications] = useState([])
  // const handleGetResume = async () => {
  //   const res = await fetch(`/api/getResume?reg=${session?.registration}`);
  //   const data = await res.json();
  //   if (res.ok) {
  //     console.log('resumeLink', data.url)
  //     return data.url
  //   } else {
  //     console.log('something went wrong')
  //   }
  // };

  // async function uploadApplication(resumeLink: any) {
  //   try {
  //     const response = await fetch('/api/postApplication', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ jobId: parseInt(job.id), resume: resumeLink, reg: parseInt(session.registration) }),
  //     });

  //     if (response.status === 200) {
  //       console.log('Application uploaded succesfully')
  //     }


  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const applyHandler = async () => {
  //   if(isApplied)return
  //   const resumeLink = await handleGetResume()
  //   await uploadApplication(resumeLink)

  //   if (!isApplied) {
  //     toast.success("Submitted Successfully")
  //     setIsApplied(true)
  //   }

  // }

  // async function getApplicationDetails() {
  //   try {
  //     const res = await fetch('/api/getApplicationDetails')
  //     const data = await res.json()
  //     setApplications(data.data)
  //   } catch (error: any) {
  //     console.error(error)
  //   }
  // }

  // async function checkIfApplied() {
  //   const applied = applications.find((application: any) => application.jobid === job.id && application.registration === session?.registration)
  //   if (applied) {
  //     setIsApplied(true)
  //   }
  // }

  // useEffect(() => {
  //   getApplicationDetails()
  //   checkIfApplied()
  // }, [])

  return (

    <div className="flex flex-col p-4 items-center justify-center">
      <div className="flex items-center justify-center w-full space-x-5 py-10 px-10 bg-white border border-gray-200 rounded-lg shadow-md">
        <div>
          <img src={job.logo} width="56" height="56" alt="Company 03" />
        </div>
        <div className="flex justify-between flex-grow space-y-5">
          <div className="space-y-2">
            <div className="text-gray-800 font-normal mb-1">{job?.company_name}</div>
            <a className="text-lg font-semibold hover:underline" href="job-post.html">{job.title}</a>
            <div className="flex space-x-2">
              <a className="text-sm text-gray-600 hover:underline" href="#0">🌎 {job.job_type}</a>
              <a className="text-sm text-gray-600 hover:underline" href="#0">📅 {job.created_at.split("T")[0]}</a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className={`px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md`}>
              View Details

              <span className="ml-2">&rarr;</span>
            </div>
          </div>
        </div>
      </div>



    </div>

  )
}