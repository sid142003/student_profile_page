import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from '../actions/studentActionss';

const initialState = {
  students: [],
  selectedStudent: null
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload]
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
        selectedStudent: null
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
        selectedStudent: null
      };
    default:
      return state;
  }
};

export default studentReducer;
