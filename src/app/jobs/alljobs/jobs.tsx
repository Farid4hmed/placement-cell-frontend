"use client"
import React, { useEffect, useState } from 'react'
// import JobData from '@/data'
import Link from 'next/link'
import { JobCard } from '@/paths'

const Jobs = () => {
  //get jobs from /api/getJobData
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

  console.log('JobData', JobData)

  return (
    <div className='mt-12 w-[80vw] mx-auto mb-12'>
      <div className="space-y-10 flex justify-center w-full">
        <div className="flex flex-col w-4/5">
          {JobData?.map((job: any) => <Link key={job.id} href={`/jobs/jobsDetails/${job.id}`}>
            <JobCard job={job} />
          </Link>)}
        </div>
      </div>
    </div>
  )
}

export default Jobs