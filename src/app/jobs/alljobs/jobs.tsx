"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { JobCard } from '@/paths'
import { Button } from "@/components/ui/button"
import { Building2, List, FilePlus2, ArrowBigLeft } from 'lucide-react'


const Jobs = ({ session }: any) => {

  const [JobData, setJobData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

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

  const changeSearchTerm = (e: any) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  const filteredJobs = JobData && JobData.filter((job: any) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });


  useEffect(() => {
    getJobData()
  }, [])



  return (
    <div className='w-[80vw] mx-auto mb-12 flex flex-col items-center'>
      {session.user.isAdmin &&
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full md:w-1/2 mb-10 space-y-4 md:space-y-0 md:space-x-4">
          <Button
            // className="bg-blue-500 hover:bg-blue-700 text-white w-full md:w-1/5 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            onClick={() => window.location.href = '/addCompany'}>
            <Building2 className='mr-2' />
            Add a Company

          </Button>
          <Button
            onClick={() => window.location.href = '/applications'}>
            <List className='mr-2' />
            View Applications
          </Button>
          <Button
            // className="bg-blue-500 hover:bg-blue-700 text-white w-full md:w-1/5 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            onClick={() => window.location.href = '/addJob'}>
            <FilePlus2 className='mr-2' />
            Add a Job

          </Button>
        </div>

      }

      <div className="flex justify-center z-10 w-full mt-5 mb-20">
        <input
          className="block searchBox p-4 ps-8 w-2/3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500"
          type="text"
          placeholder="Search for jobs..."
          defaultValue={searchTerm}
          onChange={changeSearchTerm}
        />
      </div>

      <div className="space-y-10 flex justify-center w-full">
        <div className="flex flex-col w-4/5 space-y-8">
          {filteredJobs?.map((job: any) => <Link key={job.id} href={`/jobs/jobsDetails/${job.id}`}>
            <JobCard job={job} session={session} />
          </Link>)}
        </div>
      </div>
    </div>
  )
}

export default Jobs