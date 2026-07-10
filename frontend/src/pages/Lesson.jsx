import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Lesson() {
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/lesson",
        { topic }
      );

      setLesson(response.data.lesson);
    } catch (error) {
      console.error(error);
      alert("Failed to generate lesson");
    } finally {
      setLoading(false);
    }
  };

  const copyLesson = () => {
    navigator.clipboard.writeText(lesson);
    alert("Lesson copied successfully!");
  };

  const clearLesson = () => {
    setTopic("");
    setLesson("");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">

          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            AI Lesson Generator
          </h1>

          <input
            type="text"
            placeholder="Enter Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full border p-3 rounded-lg mb-5"
          />

          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Generating..." : "Generate Lesson"}
          </button>

          {lesson && (
            <div className="mt-8">

              <div className="flex gap-3 mb-4">

                <button
                  onClick={copyLesson}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  📋 Copy Lesson
                </button>

                <button
                  onClick={clearLesson}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  🗑 Clear
                </button>

              </div>

              <div className="bg-gray-100 p-6 rounded-lg whitespace-pre-wrap leading-8">
                {lesson}
              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Lesson;