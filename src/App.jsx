
import './App.css'

import StudentForm from "./components/StudentForm";
import SubmittedStudents from "./components/SubmittedStudents";





function App() {
  return (
    <div className="page-wrapper">
      <StudentForm/>
      <SubmittedStudents/>

    </div>
  );
}

export default App;
