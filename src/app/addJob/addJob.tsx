"use client"
import React, { useEffect, useState } from 'react';

interface Job {
    id: number;
    title: string;
    role: string;
    about_you: string;
    things_you_might_do: string;
    skills: string[];
    company_name: string;
    salary: string;
    location: string;
    job_type: string;
}

interface Company {
    id: number;
    name: string;
}

const AddJobForm: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [companies, setCompanies] = useState<Company[]>([]);
    const [form, setForm] = useState({
        title: '',
        role: '',
        about_you: '',
        things_you_might_do: '',
        skills: '',
        company_name: '',
        salary: '',
        location: '',
        job_type: ''
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch('/api/getCompanies');
                const data = await response.json();
                setCompanies(data);
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };
        fetchCompanies();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formWithSkillsArray = { ...form, skills: form.skills.split(',').map(skill => skill.trim()) };
        if (Object.values(formWithSkillsArray).every(value => value)) {
            try {
                const response = await fetch('/api/postJob', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formWithSkillsArray),
                });

                if (response.ok) {
                    const newJob: Job = {
                        id: jobs.length + 1,
                        ...formWithSkillsArray
                    };
                    setJobs([...jobs, newJob]);
                    setForm({
                        title: '',
                        role: '',
                        about_you: '',
                        things_you_might_do: '',
                        skills: '',
                        company_name: '',
                        salary: '',
                        location: '',
                        job_type: ''
                    });
                    setError(null);
                } else {
                    setError('Failed to add job. Please try again.');
                }
            } catch (error) {
                console.error(error);
                setError('An error occurred. Please try again.');
            }
        } else {
            setError('All fields are required.');
        }
    }

    return (
        <div className="p-6 flex flex-col items-center justify-center">
            <div className="w-1/3 flex justify-between items-center">
                <button className="flex bg-blue-500 hover:bg-blue-700 text-white w-1/8 font-bold py-2 px-4 rounded mb-10" onClick={() => window.location.href = '/jobs/alljobs'}>Go Back</button>
            </div>
            <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
            <form onSubmit={handleSubmit} className="mb-4 w-1/3">
                {[
                    { label: 'Title', name: 'title', type: 'text' },
                    { label: 'Role', name: 'role', type: 'text' },
                    { label: 'About You', name: 'about_you', type: 'textarea' },
                    { label: 'Things You Might Do', name: 'things_you_might_do', type: 'textarea' },
                    { label: 'Skills (comma separated)', name: 'skills', type: 'text' },
                    { label: 'Salary', name: 'salary', type: 'text' },
                    { label: 'Location', name: 'location', type: 'text' },
                    { label: 'Job Type', name: 'job_type', type: 'text' }
                ].map(({ label, name, type }) => (
                    <div key={name} className="mb-2">
                        <label className="block text-gray-700">{label}:</label>
                        {type === 'textarea' ? (
                            <textarea
                                name={name}
                                value={form[name as keyof typeof form]}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        ) : (
                            <input
                                type={type}
                                name={name}
                                value={form[name as keyof typeof form]}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        )}
                    </div>
                ))}
                <div className="mb-2">
                    <label className="block text-gray-700">Company Name:</label>
                    <select
                        name="company_name"
                        value={form.company_name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    >
                        <option value="" disabled>Select a company</option>
                        {companies.map(company => (
                            <option key={company.id} value={company.name}>
                                {company.name}
                            </option>
                        ))}
                    </select>
                </div>
                {error && <div className="mb-2 text-red-500">{error}</div>}
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Post Job
                </button>
            </form>
        </div>
    );
};

export default AddJobForm;
