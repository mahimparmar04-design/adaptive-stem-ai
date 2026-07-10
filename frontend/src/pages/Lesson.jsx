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
        {
          topic,
        }
      );

      setLesson(response.data.lesson);
    } catch (error) {
      console.error(error);
      alert("Failed to generate lesson");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">

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
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            {loading ? "Generating..." : "Generate Lesson"}
          </button>

          {lesson && (
            <div className="mt-8 bg-gray-100 p-5 rounded-lg">
              <h2 className="text-2xl font-bold mb-3">Generated Lesson</h2>

              <p className="whitespace-pre-wrap">{lesson}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Lesson;