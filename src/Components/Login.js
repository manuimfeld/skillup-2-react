import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";

YupPassword(Yup);
const schema = Yup.object().shape({
  username: Yup.string().email("Mail invalido").required("Ingrese su email"),
  password: Yup.string()
    .min(6, "mínimo 6 caracteres")
    .minUppercase(1, "Al menos 1 Mayus")
    .minLowercase(1, "Al menos 1 Minus")
    .minNumbers(1, "Al menos 1 Numb")
    .required("ingrese su contraseña"),
});

const Login = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  function handleSubmit(datos) {
    datos.preventDefault();
    try {
      dispatch(
        loginUser({
          userName: datos.target.username.value,
          password: datos.target.password.value,
        })
      );
    } catch (e) {
      alert(e.message);
    }
  }
  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => handleSubmit(values)}
        initialValues={{
          username: "",
          password: "",
        }}
      >
        {({ errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="username">Nombre de usuario</label>
            <Field name="username" />
            {touched.username && errors.username && (
              <div>{errors.username}</div>
            )}
            <label htmlFor="password">Contraseña</label>
            <Field name="password" type="password" />
            {touched.password && errors.password && (
              <div>{errors.password}</div>
            )}
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
      <Link to="/register">
        <button>Registrarme</button>
      </Link>
    </div>
  );
};

export default Login;
