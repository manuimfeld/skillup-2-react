// import "../styles/login.css";
import s from "../styles/login.module.css";

import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";

YupPassword(Yup);
const schema = Yup.object().shape({
  username: Yup.string().required("*Campo obligatorio"),
  password: Yup.string().required("*Ingrese su contraseña"),
});

const Login = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(datos) {
    datos.preventDefault()
    try {
      const user = await dispatch(
        loginUser({
          userName: datos.target.username.value,
          password: datos.target.password.value,
        })
      );
      localStorage.setItem("token", user.payload.token);
      navigate("/");
    } catch (e) {
      alert("Problemas al iniciar sesión... intenta nuevamente");
    }
  }

  function registrarseHandler() {
    navigate("/register");
  }

  return (
    <div id="loginWrapper" className={s.container}>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => handleSubmit(values)}
        initialValues={{
          username: "",
          password: "",
        }}
      >
        {({ errors, touched }) => (
          <Form onSubmit={handleSubmit} className={s.formContainer}>
            <div id="loginTitle" className={s.titulo}>
              Iniciar sesión
            </div>
            <label
              htmlFor="username"
              className={`${s.label} ${
                touched.username && errors.username && s.error
              }`}
            >
              Nombre de usuario
            </label>
            <Field
              id="username"
              name="username"
              className={`${s.input} ${
                touched.username && errors.username && s.error
              }`}
            />
            {touched.username && errors.username && (
              <div
                className={`${s.msjError} ${
                  touched.username && errors.username && s.error
                }`}
              >
                {errors.username}
              </div>
            )}
            <label
              htmlFor="password"
              className={`${s.label} ${
                touched.password && errors.password && s.error
              }`}
            >
              Contraseña
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              className={`${s.input} ${
                touched.password && errors.password && s.error
              }`}
            />
            {touched.password && errors.password && (
              <div
                className={`${s.msjError} ${
                  touched.password && errors.password && s.error
                }`}
              >
                {errors.password}
              </div>
            )}
            <button type="submit" className={`${s.boton} ${s.botonEnviar}`}>
              Entrar
            </button>
            <button
              onClick={registrarseHandler}
              className={`${s.boton} ${s.botonRegistrarse}`}
            >
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
