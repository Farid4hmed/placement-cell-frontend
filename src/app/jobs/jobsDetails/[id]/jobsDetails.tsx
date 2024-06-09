import JobData, { Job } from '@/data'
// import { authOptions } from '@/Auth'
import { ApplyButton, JobCard } from '@/paths'
import { getServerSession } from 'next-auth'
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import Link from 'next/link'
import React from 'react'

const JobDetails = async ({ id }: any) => {

    const getJobDetail: any = JobData?.find((job) => job.id.toString() === id)
    console.log('sktill', getJobDetail.skills)
    const session: any = await getServerSession(authOptions)
    const relatedJobs = JobData?.slice(0, 4)
    console.log('sessissss', session)

    return (
        // <div className='mt-20 mb-12'>
        //     <div className='block sm:flex items-center justify-between w-[80%] mx-auto'>
        //         <div className='flex-[0.7]'>
        //             {getJobDetail && <JobCard job={getJobDetail} />}
        //         </div>
        //         {session && <ApplyButton reg={session?.registration} id={id} job={getJobDetail}/>}
        //         {!session && <Link href={'/signup'}>
        //             <button type='button' className='px-8 py-3 bg-emerald-600 rounded-lg text-white'>Signup</button>
        //         </Link>}
        //     </div>
        //     <div className='mt-16 w-[80%] mx-auto'>
        //         <h1 className='text-xl font-semibold'>Job Description</h1>
        //         <p className='mt-4 text-black text-opacity-70'>{getJobDetail.description}</p>
        //         <div className='mt-10 '>
        //             <h1 className='text-xl font-semibold'>Key responsibilities</h1>
        //             {getJobDetail.responsibilities.map((resp: string) =>
        //                 <p className='mt-4 text-black text-opacity-70'>{resp}</p>
        //             )}
        //         </div>
        //         <div className='mt-10 '>
        //             <h1 className='text-xl font-semibold'>Skills</h1>
        //             <ul className='mt-4'>
        //                 {getJobDetail.skills.map((skill: string, id: number) =>
        //                     <li key={id} className='mt-3 text-black text-opacity-70'>{skill}</li>
        //                 )}
        //             </ul>
        //         </div>

        //         <div className='mt-10'>
        //             <h1 className='text-xl font-semibold'>Related Jobs</h1>
        //             {relatedJobs?.map((job) => <Link key={job.id} href={`/jobs/jobsDetails/${job.id}`} className='space-y-6 mb-4 mt-4'>
                        // <JobCard job={job} />
        //             </Link>

        //             )}
        //         </div>
        //     </div>

        // </div>



        <div className="flex">

            {/* <!-- Main content --> */}
            <div className="w-3/4 p-6 space-y-8">
                {/* <!-- Job description --> */}
                <div className="space-y-20">
                    <a className="text-blue-600 hover:underline" href="/jobs/alljobs">&larr; All Jobs</a>
                    <h1 className="text-4xl font-bold">{getJobDetail.title}</h1>
                    {/* <!-- Job description --> */}
                    <div className="space-y-20">
                        <div className='space-y-3'>
                            <h3 className="text-xl font-semibold">The Role</h3>
                            <div className="text-gray-700 text-opacity-70 leading-7">
                                <p>In the world of AI, behavioural predictions are leading the charge to better machine learning.</p>
                                <p>There is so much happening in the AI space. Advances in the economic sectors have seen automated business practices rapidly increasing economic value. While the realm of the human sciences has used the power afforded by computational capabilities to solve many human based dilemmas. Even the art scene has adopted carefully selected ML applications to usher in the technological movement.</p>
                                <p>As a Senior Client Engineer, you'll work alongside other engineers, designers, and product managers to tackle everything from huge company initiatives to modest but important bug fixes, from start to finish. You'll also collaborate with your product team on discovery, helping to assess the direction and feasibility of product changes. And, perhaps most importantly, you'll actively contribute to the evolution of the culture and processes of a growing engineering team.</p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <h3 className="text-xl font-semibold">About You</h3>
                            <div className="text-gray-700 text-opacity-70 leading-7">
                                <p>You love building great software. Your work could be supporting new feature development, migrating existing features, and creating other mobile and web solutions for customers. You'll have a primary focus on frontend development using Javascript. Our client's tech stack is JavaScript, primarily using React. A strong understanding of JS core (ES2019+) is required, with some exposure in Java as back-end technology. We use modern tools, which means you'll have the opportunity to work with Webpack, Redux, Apollo, Styled Components, and much more.</p>
                                <p>You love learning. Engineering is an ever-evolving world. You enjoy playing with new tech and exploring areas that you might not have experience with yet. You are self-driven, self-learner willing to share knowledge and participate actively in your community.</p>
                                <p>Having overlap with your team is critical when working in a global remote team. Modus requires all team members to overlap with EST morning hours daily. In addition, reliable high speed internet is a must.</p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <h3 className="text-xl font-semibold">Things You Might Do</h3>
                            <div className="text-gray-700 text-opacity-70 leading-7">
                                <p>We are a fast-growing, and remote-first company, so you'll likely get experience on many different projects across the organization. That said, here are some things you'll probably do:</p>
                                <ul className="list-disc list-inside">
                                    <li>Give back to the community via open source and blog posts</li>
                                    <li>Travel and meet great people- as part of our remote-first lifestyle, it's important that we come together as needed to work together, meet each other in person and have fun together. Please keep that in mind when you apply</li>
                                    <li>Teach and be taught: Modus creates active teams that work in internal and external projects together, giving opportunities to stay relevant with the latest technologies and learning from experts worldwide</li>
                                    <li>Interact directly with internal and external clients to represent Modus and its values</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Your Skills May Include</h3>
                            <div className="text-gray-700">
                                <ul className="list-disc list-inside">
                                    {getJobDetail.skills.map((skill: string, id: number) =>
                                        <li key={id} className='mt-3 text-black text-opacity-70'>{skill}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


            <aside className="w-1/4 p-6 rounded-lg sticky relative top-20">
                <div className="flex flex-col bg-[#F9FAFB] border-2 font-inter border border-[rgb(229, 231, 235)] items-center space-y-5 py-7 rounded-md sticky top-20">
                    <div className="flex flex-col items-center">
                        <img className="w-18 h-18 mb-3" src={getJobDetail.image} alt="Company 08" />
                        <h2 className="text-xl font-semibold">Medium Inc.</h2>
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path d="M9.707 4.293a1 1 0 0 0-1.414 1.414L10.586 8H2V2h3a1 1 0 1 0 0-2H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4Z"></path>
                                </svg>
                                <span className="text-sm text-gray-600">24 August, 2024</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16">
                                    <circle cx="7" cy="7" r="2"></circle>
                                    <path d="M6.3 15.7c-.1-.1-4.2-3.7-4.2-3.8C.7 10.7 0 8.9 0 7c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-.7 3.7-2.1 5-.1.1-4.1 3.7-4.2 3.8-.4.3-1 .3-1.4-.1Zm-2.7-5 3.4 3 3.4-3c1-1 1.6-2.2 1.6-3.6 0-2.8-2.2-5-5-5S2 4.2 2 7c0 1.4.6 2.7 1.6 3.7 0-.1 0-.1 0 0Z"></path>
                                </svg>
                                <span className="text-sm text-gray-600">{getJobDetail.location}</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
                                    <path d="M15 0H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm-1 10H2V2h12v8Z"></path>
                                    <circle cx="8" cy="6" r="2"></circle>
                                </svg>
                                <span className="text-sm text-gray-600">{getJobDetail.salary}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <a className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700" href="#0">
                            Apply Now <span className="ml-2">&rarr;</span>
                        </a>
                        <a className="text-blue-600 hover:underline" href="#0">Visit Website</a>
                    </div>
                </div>

            </aside>
        </div>

    )
}

export default JobDetails