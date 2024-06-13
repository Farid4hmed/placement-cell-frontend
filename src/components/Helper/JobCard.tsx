// import { Job } from '@/data'
import Image from 'next/image'
import React from 'react'
// import { BiMoney } from 'react-icons/bi'
// import { FaMapLocation, FaRegBookmark, } from 'react-icons/fa6'
import { Bookmark, MapPin, IndianRupee } from 'lucide-react'
import { Fascinate_Inline } from 'next/font/google'

// interface Props {
//   job: Job
// }
export const JobCard = ({ job }: any) => {
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
            <a className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700" href="job-post.html">
              Apply Now <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </div>


  
    </div>

  )
}