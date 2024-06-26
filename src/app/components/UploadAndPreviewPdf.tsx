
"use client"
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

// Set the worker path
pdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';

export default function Home(props: { reg: string }) {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [message, setMessage] = useState<string>('');
    const [resumeUrl, setResumeUrl] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
        if (selectedFile) {
            setPreviewUrl(URL.createObjectURL(selectedFile));
        } else {
            setPreviewUrl(null);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('reg', props.reg);

        try {
            const res = await fetch(`/api/storeResume?reg=${props.reg}`, {
                method: 'POST',
                body: formData,
            });

            if (res.status === 200) {
                setMessage('Resume Uploaded Successfully!');
            } else {
                setMessage('Something Went Wrong, Please try again later.');
            }
        } catch (error: any) {
            setMessage(`Error: ${error.message}`);
        }
    }

    const handleGetResume = async () => {
        try {
            const res = await fetch(`/api/getResume?reg=${props.reg}`);
            const data = await res.json();
            if (res.ok) {
                setResumeUrl(data.url);
                setPreviewUrl(data.url); // Set the resume URL to preview
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error: any) {
            setMessage(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        handleGetResume();

        // Cleanup function to abort fetch requests
        return () => {
            // Example cleanup for fetch requests if any
        };
    }, []);

    return (
        <div className="flex w-full flex-col items-center justify-center min-h-screen py-2 bg-gray-100 mt-20">
            {!!previewUrl && (
                <div className="mt-8 w-full max-w-4xl">
                    <h2 className="text-2xl font-semibold mb-4">Resume</h2>
                    <div className="border border-gray-300 rounded-md">
                        {/* <Worker workerUrl='/pdfjs/pdf.worker.min.mjs'>
                          {previewUrl &&  <Viewer fileUrl={previewUrl} />}
                        </Worker> */}
                        <iframe src={previewUrl} width={"100%"} height={"900px"} />
                    </div>
                </div>
            )}

            <h1 className="text-xl mt-20 mb-5 underline">Upload a new Resume</h1>

            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mb-10">
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="p-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                    Upload
                </button>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
    );
}
