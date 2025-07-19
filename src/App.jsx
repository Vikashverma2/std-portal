import './App.css';
import { useState } from "react";
import StudentForm from "./components/StudentForm";
import SubmittedStudents from "./components/SubmittedStudents";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`page-wrapper ${isDark ? "dark" : ""}`}>
      <StudentForm isDark={isDark} setIsDark={setIsDark} />
      <SubmittedStudents />
    </div>
  );
}

export default App;
