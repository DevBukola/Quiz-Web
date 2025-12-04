import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Categories from "./pages/CategoriesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/QuizPage";
import QuizResult from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/result" element={<QuizResult />} />
      </Routes>
    </Router>
  );
}

export default App;
