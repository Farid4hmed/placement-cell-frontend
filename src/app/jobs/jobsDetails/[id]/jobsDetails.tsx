import JobData, { Job } from '@/data'
// import { authOptions } from '@/Auth'
import { ApplyButton, JobCard } from '@/paths'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const JobDetails = async ({ id }: any) => {
    const getJobDetail: any = JobData?.find((job) => job.id.toString() === id)
    console.log('sktill', getJobDetail.skills)
    const session = await getServerSession()
    const relatedJobs = JobData?.slice(0, 4)

    return (
        <div className='mt-20 mb-12'>
            <div className='block sm:flex items-center justify-between w-[80%] mx-auto'>
                <div className='flex-[0.7]'>
                    {getJobDetail && <JobCard job={getJobDetail} />}
                </div>
                {session && <ApplyButton />}
                {!session && <Link href={'/signup'}>
                    <button type='button' className='px-8 py-3 bg-emerald-600 rounded-lg text-white'>Signup</button>
                </Link>}
            </div>
            <div className='mt-16 w-[80%] mx-auto'>
                <h1 className='text-xl font-semibold'>Job Description</h1>
                <p className='mt-4 text-black text-opacity-70'>{getJobDetail.description}</p>
                <div className='mt-10 '>
                    <h1 className='text-xl font-semibold'>Key responsibilities</h1>
                    {getJobDetail.responsibilities.map((resp: string) =>
                        <p className='mt-4 text-black text-opacity-70'>{resp}</p>
                    )}
                </div>
                <div className='mt-10 '>
                    <h1 className='text-xl font-semibold'>Skills</h1>
                    <ul className='mt-4'>
                        {getJobDetail.skills.map((skill: string, id: number) =>
                            <li key={id} className='mt-3 text-black text-opacity-70'>{skill}</li>
                        )}
                    </ul>
                </div>

                <div className='mt-10'>
                    <h1 className='text-xl font-semibold'>Related Jobs</h1>
                    {relatedJobs?.map((job) => <Link key={job.id} href={`/jobs/jobsDetails/${job.id}`} className='space-y-6 mb-4 mt-4'>
                        <JobCard job={job} />
                    </Link>

                    )}
                </div>
            </div>

        </div>
    )
}

export default JobDetails