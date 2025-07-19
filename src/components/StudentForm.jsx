import React, { useState } from "react";
import { useStudentContext } from "../context/StudentContext";

const StudentForm = ({ isDark, setIsDark }) => {
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
            <button
              className="dark-toggle"
              onClick={() => setIsDark(!isDark)}
              title="Toggle Theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-fields">
              <div>
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Roll Number</label>
                <input
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Branch</label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                >
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
                <select
                  name="courses"
                  value={formData.courses}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="Diploma">Diploma</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="emailID"
                  value={formData.emailID}
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
  );
};

export default StudentForm;
