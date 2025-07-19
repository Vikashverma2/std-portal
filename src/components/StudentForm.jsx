// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StudentForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     roll: "",
//     branch: "",
//     course: "",
//     email: "",
//   });

//   const [students, setStudents] = useState([]);
//   const [isDark, setIsDark] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const GetAllStudetData = async () => {
//     try {
//       const response = await axios.get("http://localhost:5028/api/Std");
//       const updated = response.data.map((student) => ({
//         id: student.id, // ✅ Include ID for deletion
//         name: student.name,
//         roll: student.rollNumber,
//         branch: student.branch,
//         course: student.courses,
//         email: student.emailID,
//       }));
//       setStudents(updated);
//     } catch (error) {
//       console.error("❌ Error fetching students:", error);
//     }
//   };

//   useEffect(() => {
//     GetAllStudetData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const studentsData = {
//       name: formData.name,
//       rollNumber: formData.roll,
//       branch: formData.branch,
//       courses: formData.course,
//       emailID: formData.email,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:5028/api/Std",
//         studentsData
//       );
//       console.log("✅ Data sent:", response.data);

//       GetAllStudetData(); // Refresh list

//       setFormData({
//         name: "",
//         roll: "",
//         branch: "",
//         course: "",
//         email: "",
//       });
//     } catch (error) {
//       console.error("❌ API Error:", error);
//     }
//   };

//   const DeleteStudent = async (studentId) => {
//     try {
//       await axios.delete(`http://localhost:5028/api/Std?studentId=${studentId}`);
//       GetAllStudetData(); // Refresh list after delete
//     } catch (error) {
//       console.error("❌ Delete failed:", error);
//     }
//   };


  
//   return (
//     <div className={`page-wrapper ${isDark ? "dark" : ""}`}>
//       <div className="form-container">
//         <div className="form-container-main">
//           <div className="student-form">
//             <div className="form-header">
//               <h2>🎓 Student Form</h2>
//               <button className="dark-toggle" onClick={() => setIsDark(!isDark)}>
//                 {isDark ? "☀️" : "🌙"}
//               </button>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className="form-fields">
//                 <div>
//                   <label>Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label>Roll Number</label>
//                   <input
//                     type="text"
//                     name="roll"
//                     value={formData.roll}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label>Branch</label>
//                   <select
//                     name="branch"
//                     value={formData.branch}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select Branch</option>
//                     <option value="CSE">CSE</option>
//                     <option value="ECE">ECE</option>
//                     <option value="EEE">EEE</option>
//                     <option value="Mechanical">Mechanical</option>
//                     <option value="Civil">Civil</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label>Course</label>
//                   <select
//                     name="course"
//                     value={formData.course}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select Course</option>
//                     <option value="B.Tech">B.Tech</option>
//                     <option value="M.Tech">M.Tech</option>
//                     <option value="Diploma">Diploma</option>
//                     <option value="PhD">PhD</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label>Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="submit-btn">
//                 <button type="submit">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="submitted-details-header">
//         <h3>📋 Submitted Students</h3>
//         <div className="submitted-details">
//           {[...students].reverse().map((student, index) => (
//             <div key={index} className="student-entry">
//               <div className="student-details">
//                 <p><strong>Name:</strong> {student.name}</p>
//                 <p><strong>Roll:</strong> {student.roll}</p>
//                 <p><strong>Branch:</strong> {student.branch}</p>
//                 <p><strong>Course:</strong> {student.course}</p>
//                 <p><strong>Email:</strong> {student.email}</p>
//               </div>
//               <button
//                 className="delete-btn"
//                 onClick={() => DeleteStudent(student.id)} // ✅ Corrected this
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentForm;



import React, { useState } from "react";
import { useStudentContext } from "../context/StudentContext";

const StudentForm = () => {
  const { addStudent } = useStudentContext();
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    branch: "",
    courses: "",
    emailID: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(formData);
    setFormData({
      name: "",
      rollNumber: "",
      branch: "",
      courses: "",
      emailID: "",
    });
  };

  return (
    <div className="form-container">
      <div className="form-container-main">
        <div className="student-form">
          <div className="form-header">
            <h2>🎓 Student Form</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-fields">
              <div>
                <label>Name</label>
                <input name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div>
                <label>Roll Number</label>
                <input name="rollNumber" value={formData.rollNumber} onChange={handleChange} required />
              </div>

              <div>
                <label>Branch</label>
                <select name="branch" value={formData.branch} onChange={handleChange} required>
                  <option value="">Select Branch</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                </select>
              </div>

              <div>
                <label>Course</label>
                <select name="courses" value={formData.courses} onChange={handleChange} required>
                  <option value="">Select Course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="Diploma">Diploma</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div>
                <label>Email</label>
                <input type="email" name="emailID" value={formData.emailID} onChange={handleChange} required />
              </div>
            </div>

            <div className="submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
