import {
  GET_DATA_REGISTER,
  GET_USER,
  ADD_TASK,
  GET_TASKS,
  GET_TASK,
  PATCH_TASK,
  DELETE_TASK,
} from "../actions";

const initialState = {
  dataRegister: [],
  user: {},
  tasks: [],
  task: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REGISTER:
      return {
        ...state,
        dataRegister: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case GET_TASK:
      return {
        ...state,
        task: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
