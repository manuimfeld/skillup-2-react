import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const GET_DATA_REGISTER = "GET_DATA_REGISTER";

export const getDataRegister = () => {
  try {
    return async function (dispatch) {
      let res = await axios.get("https://goscrum-api.alkemy.org/auth/data");
      console.log(res.data.result);
      return dispatch({ type: GET_DATA_REGISTER, payload: res.data.result });
    };
  } catch (e) {
    throw new Error("Hubo un problema al obtener datos para registro");
  }
};

export const loginUser = (dataUser) => {
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "post",
        header: [],
        url: "https://goscrum-api.alkemy.org/auth/login",
        data: dataUser,
      });
      console.log(res.data);
      // return dispatch({ type: GET_USER, payload: res.data });
    };
  } catch (e) {
    console.log("super error");
    console.log("error: ", e);
  }
};

export const registerUser = (dataUser) => {
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "post",
        header: [],
        url: "https://goscrum-api.alkemy.org/auth/register",
        data: dataUser,
      });
      console.log(res.data);
      // return dispatch({ type: GET_USER, payload: res.data });
    };
  } catch (e) {
    console.log("super error");
    console.log("error: ", e);
  }
};
