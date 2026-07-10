import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const subjects = [
  {
    id: 1,
    title: "Mathematics",
    icon: "📐",
  },
  {
    id: 2,
    title: "Physics",
    icon: "⚛️",
  },
  {
    id: 3,
    title: "Chemistry",
    icon: "🧪",
  },
  {
    id: 4,
    title: "Electrical",
    icon: "⚡",
  },
];

function Subjects() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Select a Subject
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-6xl mb-4">{subject.icon}</div>

              <h2 className="text-2xl font-semibold mb-5">
                {subject.title}
              </h2>

              <Link
                to="/lesson"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Learn
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Subjects;