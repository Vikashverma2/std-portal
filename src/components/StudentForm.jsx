import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    branch: "",
    course: "",
    email: "",
  });

  const [students, setStudents] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({
      name: "",
      roll: "",
      branch: "",
      course: "",
      email: "",
    });
  };

  // 🗑️ Delete Function
  const handleDelete = (indexToDelete) => {
    const updated = students.filter((_, i) => i !== indexToDelete);
    setStudents(updated);
  };

  return (
    <div className={`page-wrapper ${isDark ? "dark" : ""}`}>
      <div className="form-container">
        <div className="form-container-main">
          <div className="student-form">
            <div className="form-header">
              <h2>🎓 Student Form</h2>
              <button
                className="dark-toggle"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? "☀️" : "🌙"}
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-fields">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Roll Number</label>
                  <input
                    type="text"
                    name="roll"
                    value={formData.roll}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Branch</label>
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Course</label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="submit-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="submitted-details-header">
  <h3>📋 Submitted Students</h3>
  <div className="submitted-details">
    {students.map((student, index) => (
      <div key={index} className="student-entry">
        <div className="student-details">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Roll:</strong> {student.roll}</p>
          <p><strong>Branch:</strong> {student.branch}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Email:</strong> {student.email}</p>
        </div>

        <button className="delete-btn" onClick={() => handleDelete(index)}>
          Delete
        </button>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default StudentForm;
