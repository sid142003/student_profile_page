import React from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from '../actions/studentActionss';
import StudentListItem from './Studentlistitem';

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="student-list-container">
      <h3>Student List</h3>
      {students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <StudentListItem
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
            />
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = {
  deleteStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
