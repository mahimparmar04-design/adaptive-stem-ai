import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Adaptive STEM AI</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/subjects">Subjects</Link>
        <Link to="/lesson">Lesson</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
    </nav>
  );
}

export default Navbar;