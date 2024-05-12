import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession()

  const items = [
    {
      "title": "Recruitment Drive: Tech Company ABC",
      "description": "Tech Company ABC is conducting a recruitment drive on campus for final-year students specializing in software development and IT. Interested students can register through the placement cell.",
      "date": "2024-05-25"
    },
    {
      "title": "Resume Writing Workshop",
      "description": "A specialized workshop on crafting effective resumes and cover letters will be held this Friday. Learn how to tailor your resume for different job roles and make your application stand out.",
      "date": "2024-05-20"
    },
    {
      "title": "Company Information Session: XYZ Corporation",
      "description": "XYZ Corporation is hosting an information session to discuss available internship opportunities and their recruitment process. This is a great opportunity to network and learn more about their corporate culture.",
      "date": "2024-05-30"
    },
    {
      "title": "Mock Interview Sessions",
      "description": "Mock interview sessions with industry professionals will be conducted next week. Students can practice their interviewing skills and receive valuable feedback. Slots are limited, so register early!",
      "date": "2024-05-22"
    },
    {
      "title": "Application Deadline Reminder: Internship Program",
      "description": "The deadline to apply for the summer internship program with major consulting firms is approaching. Ensure your resume is updated and submit your application before the end of the month.",
      "date": "2024-05-31"
    }
  ]
  
  return (
    <Navigation session={session}>
      <main className="">
        <div className="relative bg-white shadow-md rounded-lg p-4 w-full">
          <div className="relative overflow-hidden">
            <img
              src="/images/placement_cell.jpg"
              alt=""
              className="w-full h-screen object-cover object-center"
            />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}> {/* Semi-transparent overlay */}
              <h2 className="text-white text-2xl font-bold mb-6">ITER | SOA</h2>
              <h1 className="text-white text-5xl font-bold">Institute of Technical Education and Research</h1>
            </div>
          </div>
        </div>


        <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-full my-20">
          <h2 className="text-3xl text-center font-semibold text-gray-900 border-b pb-2 mb-10">Notices & Announcements</h2>

          {/* Grid Layout */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {items.map((item, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow text-gray-700 w-full">
                <strong>{item.title}: </strong> {item.description}
                <div className="text-gray-600 text-sm mt-1">{item.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Navigation>
  )
}
