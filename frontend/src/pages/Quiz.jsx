import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Quiz() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const generateQuiz = async () => {
    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    try {
      setLoading(true);
      setQuiz([]);
      setAnswers({});
      setScore(null);
      setSubmitted(false);

      const response = await axios.post(
        "http://localhost:5000/api/quiz",
        { topic }
      );

      setQuiz(response.data.quiz);
    } catch (error) {
      console.error(error);
      alert("Failed to generate quiz");
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (questionIndex, option) => {
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  };

  const submitQuiz = () => {
    let marks = 0;

    quiz.forEach((q, index) => {
      if (answers[index] === q.answer) {
        marks++;
      }
    });

    setScore(marks);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">

          <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
            AI Quiz Generator
          </h1>

          <input
            type="text"
            placeholder="Enter Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full border rounded-lg p-3 mb-5"
          />

          <button
            onClick={generateQuiz}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            {loading ? "Generating..." : "Generate Quiz"}
          </button>

          {quiz.length > 0 && (
            <div className="mt-8">

              {quiz.map((q, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-5 rounded-lg mb-6"
                >
                  <h2 className="font-bold text-lg mb-4">
                    {index + 1}. {q.question}
                  </h2>

                  {q.options.map((option, i) => (
                    <label
                      key={i}
                      className="block mb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={answers[index] === option}
                        onChange={() =>
                          handleOptionChange(index, option)
                        }
                        disabled={submitted}
                        className="mr-2"
                      />

                      {option}
                    </label>
                  ))}

                  {submitted && (
                    <div className="mt-4">

                      {answers[index] === q.answer ? (
                        <p className="text-green-600 font-semibold">
                          ✅ Correct
                        </p>
                      ) : (
                        <>
                          <p className="text-red-600 font-semibold">
                            ❌ Wrong
                          </p>

                          <p className="text-blue-700 mt-2">
                            <strong>Your Answer:</strong>{" "}
                            {answers[index] || "Not Answered"}
                          </p>

                          <p className="text-green-700">
                            <strong>Correct Answer:</strong>{" "}
                            {q.answer}
                          </p>
                        </>
                      )}

                    </div>
                  )}

                </div>
              ))}

              {!submitted && (
                <button
                  onClick={submitQuiz}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                  Submit Quiz
                </button>
              )}

            </div>
          )}

          {score !== null && (
            <div className="mt-8 bg-blue-100 p-6 rounded-lg text-center">

              <h2 className="text-2xl font-bold text-blue-700">
                Final Score
              </h2>

              <p className="text-4xl font-bold mt-3">
                {score} / {quiz.length}
              </p>

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Quiz;