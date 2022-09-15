import { GET_DATA_REGISTER } from "../actions";

const initialState = {
  dataRegister: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REGISTER:
      return {
        ...state,
        dataRegister: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
