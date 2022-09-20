import "../styles/login.css"
import React from "react";
import { Formik, Field, Form } from 'formik';
import YupPassword from "yup-password";
import * as Yup from "yup"
import { Link } from "react-router-dom";
YupPassword(Yup);
const schema = Yup.object().shape({
  username: Yup.string().email("Ingrese un email válido").required("*Campo obligatorio"),
  password: Yup.string().min(6,"mínimo 6 caracteres").minUppercase(1,"Al menos 1 Mayus")
  .minLowercase(1,"Al menos 1 Minus")
  .minNumbers(1,"Al menos 1 Numb").required("*Campo obligatorio")
})

const Login = () => {
  async function handleSubmit(data){
    console.log(data)
    localStorage.setItem("logged",true);
  }
  return( 
    <div id="loginWrapper">
    <div id="loginCont">
      <title id="loginTitle">Iniciar sesión</title>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={e=>handleSubmit(e)}
        initialTouched={e=>console.log("works")}
        initialErrors={e=>console.log(e)}
      >
       {({ errors, touched }) => (
         <Form id="loginForm">
            <label htmlFor="username">Nombre de usuario</label>
           <Field id="userIn" name="username" />
           {(touched.username && errors.username) && <span className="loginErr">{errors.username}</span>}
           <label htmlFor="password">Contraseña</label>
           <Field id="passIn" name="password" type="password" />
           {(touched.password && errors.password) && <span className="loginErr">{errors.password}</span>}
           <button id="loginBtn" type="submit">Enviar</button>
         </Form>
       )}
      </Formik>
      <Link id="rregBtn" to="/register">
        <span>Registrarme</span>
      </Link> 
    </div>
    </div>
  );
};

export default Login;
