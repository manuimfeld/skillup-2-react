import axios from "axios";

export const LOGIN_USER = "LOGIN_USER",
  GET_DATA_REGISTER = "GET_DATA_REGISTER",
  GET_USER = "GET_USER",
  ADD_TASK = "ADD_TASK",
  GET_TASKS = "GET_TASKS",
  GET_TASK = "GET_TASK",
  PATCH_TASK = "PATCH_TASK",
  DELETE_TASK = "DELETE_TASK",
  FILTER_TASKS = "FILTER_TASKS";

export const getDataRegister = () => {
  try {
    return async function (dispatch) {
      let res = await axios.get("https://goscrum-api.alkemy.org/auth/data");
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
      return dispatch({ type: GET_USER, payload: res.data.result });
    };
  } catch (e) {
    console.log("error: ", e);
  }
};

export const registerUser = (dataUser) => {
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: "https://goscrum-api.alkemy.org/auth/register",
        data: JSON.stringify(dataUser),
      });
      return res.data;
    };
  } catch (e) {
    throw new Error("Hubo un problema al registar el usuario");
  }
};

export const postTask = (task, token) => {
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: "https://goscrum-api.alkemy.org/task",
        data: JSON.stringify({ task: task }),
      });
      // console.log(res.data.result.task);
      return dispatch({ type: ADD_TASK, payload: res.data.result.task });
    };
  } catch (e) {
    console.log("error: ", e);
  }
};

export const getTasks = (token) => {
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: "https://goscrum-api.alkemy.org/task",
      });
      return dispatch({ type: GET_TASKS, payload: res.data.result });
    };
  } catch (e) {
    console.log("error: ", e);
  }
};

export const getPersonalTasks = (token) => {
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: "https://goscrum-api.alkemy.org/task/me",
      });
      console.log(res.data);
      // return dispatch({ type: GET_TASKS, payload: res.data.result });
    };
  } catch (e) {
    console.log("error: ", e);
  }
};

export const getTask = (id, token) => {
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: "https://goscrum-api.alkemy.org/task/" + id,
      });
      console.log(res.data);
      // return dispatch({ type: GET_TASK, payload: res.data.result });
    };
  } catch (e) {
    console.log("error: ", e);
  }
};

export const patchTask = (task, id, token) => {
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: "https://goscrum-api.alkemy.org/task/" + id,
        data: JSON.stringify({ task: task }),
      });
      console.log(res.data);
      // return dispatch({ type: PATCH_TASK, payload: res.data.result });
    };
  } catch (e) {
    console.log("error: ", e);
  }
};

export const deleteTask = (id, token) => {
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: "https://goscrum-api.alkemy.org/task/" + id,
      });
      return dispatch({ type: DELETE_TASK, payload: id });
    };
  } catch (e) {
    console.log("error: ", e);
  }
};

export const filtrarTareas = (tipo, forma) => {
  return function (dispatch) {
    return dispatch({ type: FILTER_TASKS, payload: { tipo, forma } });
  };
};
