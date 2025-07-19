import React from "react";
import { useStudentContext } from "../context/StudentContext";

const SubmittedStudents = () => {
  const { students, deleteStudent } = useStudentContext();

  return (
    <div className="submitted-details-header">
      <h3>📋 Submitted Students</h3>
      <div className="submitted-details">
        {[...students].reverse().map((student, index) => (
          <div key={index} className="student-entry">
            <div className="student-details">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Roll:</strong> {student.roll}</p>
              <p><strong>Branch:</strong> {student.branch}</p>
              <p><strong>Course:</strong> {student.course}</p>
              <p><strong>Email:</strong> {student.email}</p>
            </div>
            <button className="delete-btn" onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmittedStudents;
