import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Lesson from "./pages/Lesson";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;