import { v4 as uuidv4 } from 'uuid';

// Action Types
export const ADD_STUDENT = 'ADD_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

// Action Creators
export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: {
      id: uuidv4(),
      ...student
    }
  };
};

export const updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    payload: student
  };
};

export const deleteStudent = (studentId) => {
  return {
    type: DELETE_STUDENT,
    payload: studentId
  };
};
