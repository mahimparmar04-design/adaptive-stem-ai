import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const subjects = [
  {
    id: 1,
    title: "Mathematics",
    icon: "📐",
    color: "bg-blue-100",
  },
  {
    id: 2,
    title: "Physics",
    icon: "⚛️",
    color: "bg-green-100",
  },
  {
    id: 3,
    title: "Chemistry",
    icon: "🧪",
    color: "bg-yellow-100",
  },
  {
    id: 4,
    title: "Biology",
    icon: "🧬",
    color: "bg-pink-100",
  },
  {
    id: 5,
    title: "Computer Science",
    icon: "💻",
    color: "bg-purple-100",
  },
  {
    id: 6,
    title: "Engineering",
    icon: "⚙️",
    color: "bg-orange-100",
  },
];

function Subjects() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Choose a Subject
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`${subject.color} rounded-xl shadow-lg p-6 text-center hover:scale-105 transition duration-300`}
            >
              <div className="text-6xl mb-4">
                {subject.icon}
              </div>

              <h2 className="text-2xl font-bold mb-6">
                {subject.title}
              </h2>

              <Link to="/lesson">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Start Learning
                </button>
              </Link>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Subjects;