"use client"
import React, { useState } from 'react';

interface Company {
    id: number;
    name: string;
    website: string;
    logo: string;
    created_at: string;
}

const AddCompanyForm: React.FC = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [form, setForm] = useState({ name: '', website: '', logo: '' });
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (form.name && form.website && form.logo) {
            try {
                const response = await fetch('/api/postCompany', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                });

                if (response.ok) {
                    const newCompany: Company = {
                        id: companies.length + 1,
                        name: form.name,
                        website: form.website,
                        logo: form.logo,
                        created_at: new Date().toString(),
                    };
                    setCompanies([...companies, newCompany]);
                    setForm({ name: '', website: '', logo: '' });
                    setError(null);
                } else {
                    setError('Failed to add company. Please try again.');
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
            <a className="text-blue-600 hover:underline mb-20" href="/jobs/alljobs">&larr; Go Back</a>
                {/* <button className="flex bg-blue-500 hover:bg-blue-700 text-white w-1/8 font-bold py-2 px-4 rounded mb-10" onClick={() => window.location.href = '/jobs/alljobs'}>Go Back</button> */}
            </div>
            <h1 className="text-2xl font-bold mb-4">Add Company</h1>
            <form onSubmit={handleSubmit} className="mb-4 w-1/3">
                <div className="mb-2">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700">Website:</label>
                    <input
                        type="url"
                        name="website"
                        value={form.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700">Logo URL:</label>
                    <input
                        type="url"
                        name="logo"
                        value={form.logo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>
                {error && <div className="mb-2 text-red-500">{error}</div>}
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Add Company
                </button>
            </form>
        </div>
    );
};

export default AddCompanyForm;
