import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link
          to="/"
          className="text-2xl font-bold hover:text-yellow-300 transition"
        >
          Adaptive STEM AI
        </Link>

        <div className="flex gap-6 text-lg">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <Link
            to="/subjects"
            className="hover:text-yellow-300 transition"
          >
            Subjects
          </Link>

          <Link
            to="/lesson"
            className="hover:text-yellow-300 transition"
          >
            Lesson
          </Link>

          <Link
            to="/quiz"
            className="hover:text-yellow-300 transition"
          >
            Quiz
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;