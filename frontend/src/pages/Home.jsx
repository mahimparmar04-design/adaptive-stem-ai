import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-blue-50 text-center px-6">
        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Adaptive STEM Learning AI
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mb-8">
          Learn STEM subjects with AI-generated lessons and quizzes.
        </p>

        <Link
          to="/subjects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}

export default Home;