import React from "react";
import "../styles/register.css";
import { Formik } from "formik";
import * as Yup from "yup";
import FormRegister from "./FormRegister";

const Register = () => {
  /* FORM VALIDATORS */
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(6, "El nombre de usuario debe contener al menos seis carácteres!")
      .max(18, "El nombre de usuario debe tener como máximo 18 carácteres")
      .matches(
        /^[aA-zZ\s]+$/,
        "El nombre de usuario solo puede contener letras"
      )
      .required("Este campo es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe contener al menos seis carácteres!")
      .max(18, "La contreaseña debe tener como máximo 18 carácteres")
      .required("Este campo es obligatorio")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
        "La contraseña debe contener al menos una mayúscula y un número"
      ),
    email: Yup.string()
      .email("Email inválido")
      .required("Este campo es obligatorio"),
  });

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          firstName: "Manuel",
          email: "pruebaemail@hotmail.com",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <FormRegister errors={errors} touched={touched} />
        )}
      </Formik>
    </div>
  );
};

export default Register;
