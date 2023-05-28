import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addStudent, updateStudent } from '../actions/studentActionss';

const StudentForm = ({ addStudent, updateStudent, selectedStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedStudent) {
      // Update existing student
      updateStudent({ ...selectedStudent, name, age });
    } else {
      // Add new student
      addStudent({ name, age });
    }

    // Reset form fields
    setName('');
    setAge('');
  };

  return (
    <div className="student-form-container">
      <h3>{selectedStudent ? 'Edit Student' : 'Add Student'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">{selectedStudent ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.selectedStudent
  };
};

const mapDispatchToProps = {
  addStudent,
  updateStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);

