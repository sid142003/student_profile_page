import React from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './components/styles/studentProfile.css';

const App = () => {
  return (
    <div className="student-profile-container">
      <h2>Student Management ERP</h2>
      <StudentForm />
      <StudentList />
    </div>
  );
};

export default App;
