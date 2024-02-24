import React from "react";
import HomeComponent from "./components/Homecomponent";
import QuizComponent from "./components/Quizcomponent";
import ResultComponent from "./components/Resultcomponent";
import { Routes, Route } from "react-router-dom";
import "./App.css";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/result" element={<ResultComponent />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;