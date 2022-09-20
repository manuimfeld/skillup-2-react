import { GET_DATA_REGISTER, GET_USER } from "../actions";

const initialState = {
  dataRegister: [],
  user: {},
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
    default:
      return { ...state };
  }
};

export default rootReducer;
