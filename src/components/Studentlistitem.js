import React from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from '../actions/studentActionss';
import { updateStudent } from '../actions/studentActionss';

class StudentListItem extends React.Component {
  state = {
    isEditing: false,
    name: this.props.student.name,
    age: this.props.student.age
  };

  handleDelete = () => {
    this.props.deleteStudent(this.props.student.id);
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    const { name, age } = this.state;
    const updatedStudent = {
      id: this.props.student.id,
      name,
      age
    };

    this.props.updateStudent(updatedStudent);
    this.setState({ isEditing: false });
  };

  handleCancel = () => {
    this.setState({ isEditing: false });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { student } = this.props;
    const { isEditing, name, age } = this.state;

    return (
      <li className="student-list-item">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="age"
              value={age}
              onChange={this.handleChange}
            />
            <div className="student-actions">
              <button className="save-button" onClick={this.handleSave}>
                Save
              </button>
              <button className="cancel-button" onClick={this.handleCancel}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <span className="student-name">{student.name}</span>
            <span className="student-age">{student.age} years</span>
            <div className="student-actions">
              <button className="edit-button" onClick={this.handleEdit}>
                Edit
              </button>
              <button className="delete-button" onClick={this.handleDelete}>
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    );
  }
}

const mapDispatchToProps = {
  deleteStudent,
  updateStudent
};

export default connect(null, mapDispatchToProps)(StudentListItem);
