import React from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import studentImage from '../images/photo-1575936123452-b67c3203c357.jpg';

const StudentProfile = () => {
  return (
    <div className="student-profile-container container">
      <div className="profile-header">
        <img src={studentImage} alt="Student" className="profile-image" />
        <div className="profile-details">
          <h2 className="profile-title">Student Profile</h2>
          <p className="profile-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ligula
            mauris. Integer et lorem sed nunc condimentum aliquet. Sed ut urna
            ullamcorper, fringilla eros nec, posuere ligula. Fusce eu nisl eget nibh
            ullamcorper vestibulum. Fusce non gravida turpis.
          </p>
        </div>
      </div>
      <StudentForm />
      <div className="table-container">
        <StudentList />
      </div>
    </div>
  );
};

export default StudentProfile;
