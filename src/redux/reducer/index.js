import {
  GET_DATA_REGISTER,
  GET_USER,
  ADD_TASK,
  GET_TASKS,
  GET_TASK,
  PATCH_TASK,
  DELETE_TASK,
  FILTER_TASKS,
} from "../actions";
import filtrosTareas from "./filtrosTareas";

const initialState = {
  dataRegister: [],
  user: {},
  tasks: [],
  filteredTasks: [],
  filters: {
    prioridad: "ALL",
    estado: "ALL",
    title: "",
  },
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
      // console.log([...state.tasks, action.payload]);
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
    case FILTER_TASKS:
      if (action.payload.tipo === "INICIAR") {
        return {
          ...state,
          filteredTasks: state.tasks,
        };
      }
      if (action.payload.tipo === "REINICIAR") {
        return {
          ...state,
          filteredTasks: [],
        };
      } else {
        let filters = {
          ...state.filters,
          [action.payload.tipo]: action.payload.forma,
        };
        const filtrados = filtrosTareas(state.tasks, filters);
        return {
          ...state,
          filters,
          filteredTasks: filtrados,
        };
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
