export interface Job {
  id: number;
  title: string;
  image: string;
  salary: string;
  location: string;
  jobtype: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const JobData: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    image: "/images/c1.png",
    salary: "35k - 40k",
    location: "Bangalore, India",
    jobtype: "Full Time",
    description: "Develop and maintain high-quality software applications for various clients, ensuring robust performance and scalability.",
    responsibilities: [
      "Design, develop, and maintain software applications in alignment with client requirements.",
      "Collaborate with cross-functional teams to define, design, and ship new features.",
      "Write clean, scalable, and well-documented code.",
      "Troubleshoot, debug, and upgrade existing software applications.",
      "Participate in code reviews and provide constructive feedback to peers.",
      "Stay updated with emerging technologies and apply them to improve the software development process.",
    ],
    skills: [
      "Proficiency in programming languages such as Java, C++, or Python.",
      "Strong problem-solving and analytical skills.",
      "Experience with software development frameworks and libraries.",
      "Knowledge of database management systems such as MySQL or PostgreSQL.",
      "Familiarity with version control systems like Git.",
      "Excellent communication and teamwork skills.",
    ],
  },
  {
    id: 2,
    title: "DevOps Engineer",
    image: "/images/c2.png",
    salary: "40k - 50k",
    location: "Hyderabad, India",
    jobtype: "Full Time",
    description: "Manage and automate the software development lifecycle, ensuring efficient deployment and operation of applications in various environments.",
    responsibilities: [
      "Implement and manage continuous integration and continuous deployment (CI/CD) pipelines.",
      "Automate infrastructure provisioning, configuration, and deployment processes.",
      "Monitor and manage system performance, ensuring high availability and scalability.",
      "Collaborate with development and operations teams to streamline workflows.",
      "Ensure security and compliance standards are met throughout the development process.",
      "Troubleshoot and resolve system and network issues.",
    ],
    skills: [
      "Experience with CI/CD tools such as Jenkins, GitLab CI, or CircleCI.",
      "Knowledge of cloud platforms like AWS, Azure, or Google Cloud.",
      "Proficiency in scripting languages such as Bash, Python, or PowerShell.",
      "Strong understanding of DevOps principles and best practices.",
      "Familiarity with containerization technologies like Docker and Kubernetes.",
      "Excellent problem-solving and communication skills.",
    ],
  },
  {
    id: 3,
    title: "Frontend Engineer",
    image: "/images/c3.png",
    salary: "45k - 50k",
    location: "Kolkata, India",
    jobtype: "Full Time",
    description: `As a Frontend Engineer, you will be responsible for building and optimizing user-facing web applications. You will work closely with designers, product managers, and backend developers to create a seamless and visually appealing user experience. This role involves translating UI/UX design wireframes into actual code that produces visual elements of the application. You will also be responsible for ensuring the technical feasibility of UI/UX designs, optimizing applications for maximum speed and scalability, and implementing new features and improvements.`,
    responsibilities: [
      "Develop new user-facing features using HTML, CSS, and JavaScript.",
      "Ensure the technical feasibility of UI/UX designs and implement them effectively.",
      "Optimize applications for maximum speed and scalability.",
      "Collaborate with backend developers and web designers to improve usability.",
      "Perform code reviews and ensure best practices are followed.",
      "Stay updated with the latest frontend technologies and trends.",
    ],
    skills: [
      "Proficiency in HTML, CSS, and JavaScript.",
      "Experience with frontend frameworks and libraries such as React, Angular, or Vue.js.",
      "Strong understanding of responsive and adaptive design principles.",
      "Knowledge of web performance optimization techniques.",
      "Familiarity with version control systems like Git.",
      "Excellent attention to detail and problem-solving skills.",
    ],
  },
  {
    id: 4,
    title: "Backend Developer",
    image: "/images/c4.png",
    salary: "35k - 40k",
    location: "Mumbai, India",
    jobtype: "Part Time",
    description: "Develop and maintain server-side logic, ensuring high performance and responsiveness to requests from the frontend.",
    responsibilities: [
      "Design and implement robust backend services and APIs.",
      "Collaborate with frontend developers to integrate user-facing elements with server-side logic.",
      "Ensure high performance and responsiveness of applications.",
      "Manage database schema and migrations, ensuring data integrity and security.",
      "Write reusable, testable, and efficient code.",
      "Participate in code reviews and improve development processes.",
    ],
    skills: [
      "Proficiency in server-side languages such as Node.js, Python, or Java.",
      "Experience with databases like MySQL, MongoDB, or PostgreSQL.",
      "Strong understanding of RESTful APIs and web services.",
      "Knowledge of server-side frameworks such as Express.js or Django.",
      "Familiarity with version control systems like Git.",
      "Excellent problem-solving and communication skills.",
    ],
  },
  {
    id: 5,
    title: "Fullstack Developer",
    image: "/images/c5.png",
    salary: "55k - 60k",
    location: "Pune, India",
    jobtype: "Full Time",
    description: "Handle both front-end and back-end development tasks, ensuring the seamless integration and functionality of web applications.",
    responsibilities: [
      "Design the overall architecture of web applications, ensuring scalability and maintainability.",
      "Develop and maintain both frontend and backend components of web applications.",
      "Collaborate with UI/UX designers to implement user-friendly interfaces.",
      "Ensure the responsiveness and performance of applications.",
      "Implement security and data protection measures.",
      "Troubleshoot, debug, and upgrade existing applications.",
    ],
    skills: [
      "Proficiency in both frontend and backend languages such as JavaScript, HTML, CSS, Node.js, and Python.",
      "Experience with full-stack frameworks such as MERN or MEAN.",
      "Strong problem-solving and analytical skills.",
      "Knowledge of database management systems.",
      "Familiarity with version control systems like Git.",
      "Excellent communication and teamwork skills.",
    ],
  },
  {
    id: 6,
    title: "Web Designer",
    image: "/images/c6.png",
    salary: "30k - 35k",
    location: "Chennai, India",
    jobtype: "Freelance",
    description: "Design visually appealing and user-friendly websites, ensuring a great user experience across all devices.",
    responsibilities: [
      "Create wireframes, mockups, and prototypes based on client requirements.",
      "Design and implement website layouts and user interfaces using HTML, CSS, and JavaScript.",
      "Ensure cross-browser compatibility and responsiveness of websites.",
      "Collaborate with developers to integrate designs seamlessly.",
      "Stay updated with the latest design trends and technologies.",
      "Conduct usability testing and gather feedback to improve designs.",
    ],
    skills: [
      "Proficiency in design tools such as Adobe XD, Figma, or Sketch.",
      "Strong understanding of HTML, CSS, and JavaScript.",
      "Knowledge of UX principles and best practices.",
      "Experience with responsive design and cross-browser compatibility.",
      "Excellent attention to detail and creativity.",
      "Good communication and collaboration skills.",
    ],
  },
];

export default JobData;
