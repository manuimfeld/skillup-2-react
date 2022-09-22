import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormRegister from "./FormRegister";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";

import s from "../../styles/register.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* FORM VALIDATORS */
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(6, "El nombre de usuario debe contener al menos seis carácteres!")
      .max(18, "El nombre de usuario debe tener como máximo 18 carácteres")
      .matches(
        /^[aA-zZ\s]+$/,
        "El nombre de usuario solo puede contener letras"
      )
      .required("Requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener mínimo 6 caracteres")
      .max(18, "La contraseña debe tener máximo 18 carácteres")
      .minUppercase(1, "La contraseña debe tener al menos 1 mayúscula")
      .minLowercase(1, "La contraseña debe tener al menos 1 minúscula")
      .minNumbers(1, "La contraseña debe tener al menos 1 númer")
      .required("Requerido"),
    email: Yup.string().email("Email inválido").required("Requerido"),
    // belong: Yup.string(),
    // teamID: Yup.string().nullable(),
    teamID: Yup.string().when("belong", {
      is: (belong) => belong !== false,
      then: Yup.string().required("Requerido"),
    }),
    role: Yup.string().required("Requerido").nullable(),
    continent: Yup.string().required("Requerido").nullable(),
    region: Yup.string().required("Requerido").nullable(),
  });

  async function handleSubmit(datos) {
    if (!datos.belong) {
      datos.teamID = uuidv4();
    }
    delete datos.belong;
    const user = { user: datos };
    try {
      const respuesta = await dispatch(registerUser(user));
      console.log(respuesta);
      navigate("/login", { replace: true });
    } catch (error) {}
  }

  return (
    <div className={s.container}>
      <Formik
        initialValues={{
          userName: "",
          password: "",
          email: "",
          belong: false,
          teamID: "",
          role: "",
          continent: "",
          region: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
          <FormRegister errors={errors} touched={touched} values={values} />
        )}
      </Formik>
    </div>
  );
};

export default Register;
