import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormRegister from "./FormRegister";

import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions";

const Register = () => {
  const dispatch = useDispatch();

  /* FORM VALIDATORS */
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(6, "El nombre de usuario debe contener al menos seis carácteres!")
      .max(18, "El nombre de usuario debe tener como máximo 18 carácteres")
      .matches(
        /^[aA-zZ\s]+$/,
        "El nombre de usuario solo puede contener letras"
      )
      .required("Este campo es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener mínimo 6 caracteres")
      .max(18, "La contraseña debe tener máximo 18 carácteres")
      .minUppercase(1, "La contraseña debe tener al menos 1 mayúscula")
      .minLowercase(1, "La contraseña debe tener al menos 1 minúscula")
      .minNumbers(1, "La contraseña debe tener al menos 1 númer")
      .required("Este campo es obligatorio"),
    email: Yup.string()
      .email("Email inválido")
      .required("Este campo es obligatorio"),
    belong: Yup.string(),
    teamID: Yup.string(),
    role: Yup.string().required("Este campo es obligatorio").nullable(),
    continent: Yup.string().required("Este campo es obligatorio").nullable(),
    region: Yup.string().required("Este campo es obligatorio").nullable(),
  });

  function handleSubmit(datos) {
    const user = { user: datos };
    // if (user.belong !== true) {
    //   delete user.teamID;
    // }
    // console.log(user);
    // delete user.belong;
    dispatch(registerUser(user));
  }

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          userName: "",
          password: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormRegister errors={errors} touched={touched} />
        )}
      </Formik>
    </div>
  );
};

export default Register;
