import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">

        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl text-center">

          <h1 className="text-5xl font-bold text-blue-700 mb-6">
            Adaptive STEM Learning AI
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            Learn STEM subjects with AI-generated lessons and quizzes.
            Enter any topic and instantly get an easy-to-understand lesson
            followed by an AI-generated quiz.
          </p>

          <div className="flex justify-center gap-4">

            <Link to="/subjects">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                📚 Start Learning
              </button>
            </Link>

            <Link to="/lesson">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
                🤖 AI Lesson
              </button>
            </Link>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

            <div className="bg-blue-50 rounded-lg p-5">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-bold">AI Lessons</h3>
              <p className="text-sm text-gray-600 mt-2">
                Generate easy-to-understand lessons on any STEM topic.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-5">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="font-bold">AI Quiz</h3>
              <p className="text-sm text-gray-600 mt-2">
                Practice with AI-generated multiple-choice questions.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold">Track Score</h3>
              <p className="text-sm text-gray-600 mt-2">
                Submit your quiz and instantly see your score.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Home;