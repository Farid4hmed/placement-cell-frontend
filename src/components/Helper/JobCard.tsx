import { Job } from '@/data'
import Image from 'next/image'
import React from 'react'
// import { BiMoney } from 'react-icons/bi'
// import { FaMapLocation, FaRegBookmark, } from 'react-icons/fa6'
import { Bookmark, MapPin, IndianRupee } from 'lucide-react'
import { Fascinate_Inline } from 'next/font/google'

interface Props {
  job: Job
}
export const JobCard = ({ job }: Props) => {
  return (
    // <div className="relative transition-transform duration-300 hover:scale-105 border-gray-600 rounded-lg  border-2 border-opacity-20 p-1 md:p-2 my-10">
    //   <div className="flex items-center space-x-6">
    //     {/* Image */}
    //     <div>
    //       <Image src={job.image} alt={job.title} width={50} height={50} className="object-cover" />
    //     </div>
    //     {/* content */}
    //     <div>
    //       <h1 className="text-base font-semibold mb-2">
    //         {job.title}
    //       </h1>
    //       <div className="flex items-center md:space-x-10 space-x-4">
    //         {/* location */}
    //         <div className="flex items-center space-x-2">
    //           <MapPin className='w-4 h-4 text-pink-600' />
    //           <p className='text-sm text-black font-semibold opacity-60'>{job?.location}</p>
    //         </div>
    //         {/* salary */}
    //         <div className="flex items-center space-x-2">
    //           <IndianRupee className='w-4 h-4 text-pink-600' />
    //           <p className='text-sm text-black font-semibold text-opacity-60'>{job?.salary}</p>
    //         </div>
    //         {/* tags */}

    //       </div>
    //       <div className='flex item-center space-x-2 sm:space-x-4 mt-[1rem]'>
    //         <div className='text-[10px] sm:text-sm text-opacity-80 px-2 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-600'>
    //           {job?.jobtype}
    //         </div>
    //         <div className='text-[10px] sm:text-sm text-opacity-80 px-2 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-red-600'>
    //           Private
    //         </div>
    //         <div className='text-[10px] sm:text-sm text-opacity-80 px-2 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-blue-600'>
    //           Urgent
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </div>




    <div className="flex flex-col p-4 items-center justify-center">
      <div className="flex items-center justify-center w-full space-x-5 py-10 px-10 bg-white border border-gray-200 rounded-lg shadow-md">
        <div>
          <img src={job.image} width="56" height="56" alt="Company 03" />
        </div>
        <div className="flex justify-between flex-grow space-y-5">
          <div className="space-y-2">
            <div className="text-gray-800 font-normal mb-1">Robinhood</div>
            <a className="text-lg font-semibold hover:underline" href="job-post.html">{job.title}</a>
            <div className="flex space-x-2">
              <a className="text-sm text-gray-600 hover:underline" href="#0">Full Time</a>
              <a className="text-sm text-gray-600 hover:underline" href="#0">🌎 Remote</a>
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