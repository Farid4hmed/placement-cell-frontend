import React from 'react'
import JobData from '@/data'
import Link from 'next/link'
import { JobCard } from '@/paths'

const Jobs = () => {
  return (
    <div className='mt-12 w-[80vw] mx-auto mb-12'>
      <div className='mb-12'>
        <h1 className='semi-bold'>Show Result ({JobData.length})</h1>
      </div>
      <div className="space-y-10 flex w-full">
        <div className="flex flex-col w-full">
          {JobData?.map((job) => <Link key={job.id} href={`/jobs/jobsDetails/${job.id}`}>
            <JobCard job={job} />
          </Link>)}
        </div>

        <div className="space-y-4 p-8 bg-white px-10 shadow-lg rounded-lg sticky top-20 h-[80vh] ml-7">
          <div className="flex justify-end">
            <button className="bg-red-500 text-white px-4 py-2 rounded">Clear</button>
          </div>

          <div className="space-y-6">
            {/* Group 1 */}
            <div>
              <div className="text-sm font-semibold mb-2">Job Type</div>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">Full-time</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">Part-time</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">Internship</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">Contract / Freelance</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">Co-founder</span>
                  </label>
                </li>
              </ul>
            </div>

            {/* Group 2 */}
            <div>
              <div className="text-sm font-semibold mb-2">Job Roles</div>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" defaultChecked />
                    <span className="text-gray-700">Programming</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">Design</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">Management / Finance</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">Customer Support</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">Sales / Marketing</span>
                  </label>
                </li>
              </ul>
            </div>

            {/* Group 3 */}
            <div>
              <div className="text-sm font-semibold mb-2">Remote Only</div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remote-toggle"
                  className="form-checkbox"
                  checked={false}
                />
                <label htmlFor="remote-toggle" className="text-gray-700">Remote Only</label>
              </div>
              <div className="text-gray-600 mt-2">{false ? 'On' : 'Off'}</div>
            </div>

            {/* Group 4 */}
            <div>
              <div className="text-sm font-semibold mb-2">Salary Range</div>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">$20K - $50K</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">$50K - $100K</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-700">&gt; $100K</span>
                  </label>
                </li>
              </ul>
            </div>

            {/* Group 5 */}
            <div>
              <div className="text-sm font-semibold mb-2">Location</div>
              <label className="block text-gray-700">Location</label>
              <select className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Anywhere</option>
                <option>London</option>
                <option>San Francisco</option>
                <option>New York</option>
                <option>Berlin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs