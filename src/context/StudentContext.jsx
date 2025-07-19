import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5028/api/Std");
      const formatted = res.data.map((student) => ({
        id: student.id,
        name: student.name,
        roll: student.rollNumber,
        branch: student.branch,
        course: student.courses,
        email: student.emailID,
      }));
      setStudents(formatted);
    } catch (err) {
      console.error("❌ Error fetching students:", err);
    }
  };

  const addStudent = async (studentData) => {
    try {
      await axios.post("http://localhost:5028/api/Std", studentData);
      fetchStudents();
    } catch (err) {
      console.error("❌ Error adding student:", err);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      await axios.delete(`http://localhost:5028/api/Std?studentId=${studentId}`);
      fetchStudents();
    } catch (err) {
      console.error("❌ Error deleting student:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentContext);
