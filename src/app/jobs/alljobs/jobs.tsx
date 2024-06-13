"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { JobCard } from '@/paths'

const Jobs = ({ session }: any) => {
  const [JobData, setJobData] = useState([])

  async function getJobData() {
    try {
      const res = await fetch('/api/getJobData')
      const data = await res.json()
      console.log('data', data)
      setJobData(data.rows)
    } catch (error: any) {
      console.error(error)
    }
  }

  useEffect(() => {
    getJobData()
  }, [])



  return (
    <div className='w-[80vw] mx-auto mb-12 flex flex-col'>
      {session.user.isAdmin &&
        <div className='flex justify-center w-full mb-10'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-1/5 font-bold py-2 px-4 rounded' onClick={() => window.location.href = '/applications'}>View Applications</button>
        </div>
      }
      <div className="space-y-10 flex justify-center w-full">
        <div className="flex flex-col w-4/5">
          {JobData?.map((job: any) => <Link key={job.id} href={`/jobs/jobsDetails/${job.id}`}>
            <JobCard job={job} session={session} />
          </Link>)}
        </div>
      </div>
    </div>
  )
}

export default Jobs