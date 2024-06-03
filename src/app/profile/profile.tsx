import React from 'react';

interface StudentProfileProps {
  name: string;
  registrationNumber: string;
  branch: string;
  batch: string;
  section: string;
  cgpa: number;
  email: string;
  phone: string;
  profilePicture: string;
}

const StudentProfile: React.FC<StudentProfileProps> = ({
  name,
  registrationNumber,
  branch,
  batch,
  section,
  cgpa,
  email,
  phone,
  profilePicture,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-40">
      <div className="flex flex-col md:flex-row items-start">
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className="w-24 h-24 md:w-48 md:h-24 rounded-full object-cover mb-10 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          <div className="text-sm text-gray-700 space-y-1">
            <div><span className="font-semibold">Registration Number:</span> {registrationNumber}</div>
            <div><span className="font-semibold">Branch:</span> {branch}</div>
            <div><span className="font-semibold">Batch:</span> {batch}</div>
            <div><span className="font-semibold">Section:</span> {section}</div>
            <div><span className="font-semibold">CGPA:</span> {cgpa}</div>
            <div><span className="font-semibold">Email:</span> {email}</div>
            <div><span className="font-semibold">Phone:</span> {phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
