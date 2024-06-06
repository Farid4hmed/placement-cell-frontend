"use client";

import { useState } from 'react';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

export default function Gpt() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    objective: '',
    education: [{ degree: '', institution: '', city: '', state: '', graduationDate: '', coursework: '', honors: '' }],
    experience: [{ jobTitle: '', company: '', location: '', dates: '', responsibilities: '' }],
    skills: '',
    projects: [{ title: '', description: '', technologies: '', role: '' }],
    certifications: '',
    awards: '',
    languages: [{ language: '', proficiency: '' }],
    interests: '',
    jobRole: '',
  });

  const [resume, setResume] = useState('');

  async function runChat(prompt: string) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    console.log(prompt);
    setResume(response.text());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const promptMessage = `
      in form of HTML component along with tailwind CSS to format it in form of an Resume
      Name: ${formData.name}
      Address: ${formData.address}
      Phone: ${formData.phone}
      Email: ${formData.email}
      LinkedIn: ${formData.linkedin}
      GitHub: ${formData.github}
      Objective: ${formData.objective}
      Education: ${formData.education.map(edu => `Degree: ${edu.degree}, Institution: ${edu.institution}, City: ${edu.city}, State: ${edu.state}, Graduation Date: ${edu.graduationDate}, Coursework: ${edu.coursework}, Honors: ${edu.honors}`).join('; ')}
      Experience: ${formData.experience.map(exp => `Job Title: ${exp.jobTitle}, Company: ${exp.company}, Location: ${exp.location}, Dates: ${exp.dates}, Responsibilities: ${exp.responsibilities}`).join('; ')}
      Skills: ${formData.skills}
      Projects: ${formData.projects.map(proj => `Title: ${proj.title}, Description: ${proj.description}, Technologies: ${proj.technologies}, Role: ${proj.role}`).join('; ')}
      Certifications: ${formData.certifications}
      Awards: ${formData.awards}
      Languages: ${formData.languages.map(lang => `Language: ${lang.language}, Proficiency: ${lang.proficiency}`).join('; ')}
      Interests: ${formData.interests}
      
      Now for this information build a resume for me so that it can be applied to a company for 
      Job Role: ${formData.jobRole}

      format : 
      '<body class="bg-gray-100 text-gray-900">
    <div class="max-w-4xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
        <header class="mb-8">
            <h1 class="text-3xl font-bold mb-2">Sam</h1>
            <p>Los Angeles, Carolina, USA</p>
            <p>Email: <a href="mailto:sambohra@gmail.com" class="text-blue-500">sambohra@gmail.com</a></p>
            <p>Phone: <a href="tel:4283642368" class="text-blue-500">4283642368</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/" class="text-blue-500">Sam Bohra</a></p>
        </header>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Education</h2>
            <div>
                <p class="font-bold">B. Tech (Computer Science & Information Technology)</p>
                <p>Carolina University, Carolina | 9.43 CGPA (till 7th semester) | 2016-2020</p>
            </div>
            <div>
                <p class="font-bold">High School</p>
                <p>St Stephens’ Public School, Carolina, USA | 94.2% | 2014</p>
            </div>
            <div>
                <p class="font-bold">Primary School</p>
                <p>St Stephens’ Public School, Carolina, USA  | 94% | 2016</p>
            </div>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Projects</h2>
            <div class="mb-4">
                <p class="font-bold">Spotify Clone | May 2022</p>
                <p>VueJS | Firebase | <a href="https://github.com/Jyo561/Spotify-Vue" class="text-blue-500">GitHub</a></p>
                <ul class="list-disc list-inside ml-4">
                    <li>Standalone Project, created a clone of the Spotify website by studying a React codebase and then implementing it using VueJS.</li>
                    <li>Implemented API fetching and rendering to form a playlist.</li>
                    <li>Implemented Component based design structure.</li>
                </ul>
            </div>
            <div class="mb-4">
                <p class="font-bold">Password-Vault-Rust | Sept 2023</p>
                <p>Rust | <a href="https://github.com/Jyo561/Password-Vault-Rust.git" class="text-blue-500">GitHub</a></p>
                <ul class="list-disc list-inside ml-4">
                    <li>Created a TUI application for password storage for multiple clients.</li>
                    <li>Password storage is done in the form of JSON.</li>
                </ul>
            </div>
            <div class="mb-4">
                <p class="font-bold">UI-Component-Library | Oct 2022</p>
                <p>Brython | <a href="https://github.com/Web3-Bharat-ITER/UI-Component-Library" class="text-blue-500">GitHub</a></p>
                <ul class="list-disc list-inside ml-4">
                    <li>A Hacktoberfest contribution, implemented a Neomorphic based design to a page containing a list of components using Browser Python (Brython).</li>
                </ul>
            </div>
            <div class="mb-4">
                <p class="font-bold">ArtGenerator | Oct 2023</p>
                <p>Rust</p>
                <ul class="list-disc list-inside ml-4">
                    <li>A TUI application designed to take an image and return its art in the form of ASCII characters on the terminal.</li>
                </ul>
            </div>
            <div class="mb-4">
                <p class="font-bold">Math-OCR | Oct 2021</p>
                <p>Python</p>
                <ul class="list-disc list-inside ml-4">
                    <li>A TUI application designed to take an image of a mathematical problem and return its solution on the terminal.</li>
                </ul>
            </div>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Achievements</h2>
            <ul class="list-disc list-inside ml-4">
                <li>Secured a 3rd Place at Code O Soccer event of Kshitij Festival IITKGP 2021 with a 3 member team.</li>
                <li>Attained a 3rd Place in College Hackathon by building a Portfolio site completely on Mobile Phone.</li>
                <li>Sponsor Prize at ETHForAll-2023 Event.</li>
                <li>Qualified First Round in Smart India Hackathon.</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Technical Skills</h2>
            <div class="grid grid-cols-2 gap-4">
                <ul class="list-disc list-inside ml-4">
                    <li>Rust</li>
                    <li>JavaScript</li>
                    <li>VueJS</li>
                    <li>ReactJS</li>
                    <li>Linux</li>
                </ul>
                <ul class="list-disc list-inside ml-4">
                    <li>HTML</li>
                    <li>Tailwind CSS</li>
                    <li>SQLite</li>
                    <li>Vim</li>
                    <li>Frontend</li>
                </ul>
            </div>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Areas of Interest</h2>
            <ul class="list-disc list-inside ml-4">
                <li>Cyber Security</li>
                <li>Operating Systems</li>
                <li>Compiler Design</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Coding Profile Links</h2>
            <ul class="list-disc list-inside ml-4">
                <li><a href="https://leetcode.com/u/sam/" class="text-blue-500">Leetcode</a></li>
                <li><a href="https://github.com/sam_bohra" class="text-blue-500">GitHub</a></li>
            </ul>
        </section>
    </div>
</body>'
     just give the body component not the enitre HTML page

    `;
    setParam(1);
    runChat(promptMessage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, index, field) => {
    const { name, value } = e.target;
    const updatedArray = [...formData[field]];
    updatedArray[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: updatedArray,
    }));
  };

  const addNestedField = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: [
        ...prevData[field],
        field === 'education'
          ? { degree: '', institution: '', city: '', state: '', graduationDate: '', coursework: '', honors: '' }
          : field === 'experience'
          ? { jobTitle: '', company: '', location: '', dates: '', responsibilities: '' }
          : field === 'projects'
          ? { title: '', description: '', technologies: '', role: '' }
          : { language: '', proficiency: '' },
      ],
    }));
  };

  const [param, setParam] = useState(0);

  return (
    <div>
      {param === 0 &&(
      <div className="bg-slate-200">
      <h1 className="" style={{ textAlign: "center" }}>Resume Generator</h1>
      <div className="max-w-3xl mx-auto my-8 p-8 shadow-lg rounded-lg bg-white " >
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Name:</label>
            <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Address:</label>
            <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Phone:</label>
            <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email:</label>
            <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">LinkedIn:</label>
            <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">GitHub:</label>
            <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="url" name="github" value={formData.github} onChange={handleChange} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Objective:</label>
            <textarea style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="objective" value={formData.objective} onChange={handleChange} required />
          </div>
        </div>
        

        {formData.education.map((edu, index) => (
          <div key={index} >
            <h3 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Education {index + 1}</h3>
            <br />
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" >
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Degree:</label>
              <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="degree" value={edu.degree} onChange={(e) => handleNestedChange(e, index, 'education')} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Institution:</label>
              <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="institution" value={edu.institution} onChange={(e) => handleNestedChange(e, index, 'education')} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">City:</label>
              <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="city" value={edu.city} onChange={(e) => handleNestedChange(e, index, 'education')} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">State:</label>
              <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="state" value={edu.state} onChange={(e) => handleNestedChange(e, index, 'education')} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Graduation Date:</label>
              <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="graduationDate" value={edu.graduationDate} onChange={(e) => handleNestedChange(e, index, 'education')} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Coursework:</label>
              <textarea style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="coursework" value={edu.coursework} onChange={(e) => handleNestedChange(e, index, 'education')} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Honors:</label>
              <textarea style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="honors" value={edu.honors} onChange={(e) => handleNestedChange(e, index, 'education')} />
            </div>
          </div>
        ))}
        <button type="button" onClick={() => addNestedField('education')}>Add Education</button>

        {formData.experience.map((exp, index) => (
          <div key={index}>
            <h3 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Experience {index + 1}</h3>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Job Title:</label>
              <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="jobTitle" value={exp.jobTitle} onChange={(e) => handleNestedChange(e, index, 'experience')} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Company:</label>
              <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="company" value={exp.company} onChange={(e) => handleNestedChange(e, index, 'experience')} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Location:</label>
              <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="location" value={exp.location} onChange={(e) => handleNestedChange(e, index, 'experience')} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Dates:</label>
              <input style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="dates" value={exp.dates} onChange={(e) => handleNestedChange(e, index, 'experience')} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Responsibilities:</label>
              <textarea style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="responsibilities" value={exp.responsibilities} onChange={(e) => handleNestedChange(e, index, 'experience')} />
            </div>
          </div>
        ))}
        <button type="button" onClick={() => addNestedField('experience')}>Add Experience</button>

        {/* Repeat for other fields like projects, languages, etc. */}
        
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Skills:</label>
          <textarea style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="skills" value={formData.skills} onChange={handleChange} />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Certifications:</label>
          <textarea style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="certifications" value={formData.certifications} onChange={handleChange} />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Awards:</label>
          <textarea style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="awards" value={formData.awards} onChange={handleChange} />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Interests:</label>
          <textarea style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="interests" value={formData.interests} onChange={handleChange} />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Job Role:</label>
          <textarea style={{borderColor: '#7c3aede6'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="jobRole" value={formData.jobRole} onChange={handleChange} />
        </div>

        <button type="submit">Generate Resume</button>
      </form>
      </div>
      </div>
      )}
      {resume && param === 1 &&
        (<div>
          <h2>Generated Resume</h2>
          <div dangerouslySetInnerHTML={{ __html: resume }} />
        </div>
      )}
    </div>
  );
}
