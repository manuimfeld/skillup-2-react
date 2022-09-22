import React from "react";
import { Form, Field } from "formik";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataRegister } from "../../redux/actions";

import s from "../../styles/register.module.css";
import { useNavigate } from "react-router-dom";

const FormRegister = ({ errors, touched, values }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [datosRegistro, setDatosRegistro] = useState({});
  const datosRegistro = useSelector((e) => e.dataRegister);

  useEffect(() => {
    async function fetch() {
      try {
        const datos = await dispatch(getDataRegister());
        // setDatosRegistro(datos);
      } catch (e) {
        alert(e.message);
      }
    }
    fetch();
  }, []);

  function iniciarSesionHandler() {
    navigate("/login");
  }

  return (
    <Form className={s.formContainer}>
      <h1 className={s.titulo}>Registro</h1>
      <div className={s.formContainer}>
        <label
          htmlFor="userName"
          className={`${s.label} ${
            errors.userName && touched.userName && s.error
          }`}
        >
          Nombre de usuario
        </label>
        <Field
          name="userName"
          type="text"
          id="userName"
          className={`${s.input} ${
            errors.userName && touched.userName && s.error
          }`}
        />
        {errors.userName && touched.userName ? (
          <div
            className={`${s.msjError} ${
              errors.userName && touched.userName && s.error
            }`}
          >
            {errors.userName}
          </div>
        ) : null}

        <label
          htmlFor="password"
          className={`${s.label} ${
            errors.password && touched.password && s.error
          }`}
        >
          Contraseña
        </label>
        <Field
          name="password"
          type="password"
          id="password"
          className={`${s.input} ${
            errors.password && touched.password && s.error
          }`}
        />
        {errors.password && touched.password ? (
          <div
            className={`${s.msjError} ${
              errors.password && touched.password && s.error
            }`}
          >
            {errors.password}
          </div>
        ) : null}

        <label
          htmlFor="email"
          className={`${s.label} ${errors.email && touched.email && s.error}`}
        >
          Email
        </label>
        <Field
          name="email"
          id="email"
          className={`${s.input} ${errors.email && touched.email && s.error}`}
        />
        {errors.email && touched.email ? (
          <div
            className={`${s.msjError} ${
              errors.email && touched.email && s.error
            }`}
          >
            {errors.email}
          </div>
        ) : null}

        <div>
          <Field type="checkbox" name="belong" id="belong" />
          <label htmlFor="belong" className={s.label}>
            ¿Perteneces a un equipo ya creado?
          </label>
        </div>
        {values.belong && (
          <>
            <label
              htmlFor="group-id"
              className={`${s.label} ${
                errors.teamID && touched.teamID && s.error
              }`}
            >
              Identificador de equipo
            </label>
            <Field
              name="teamID"
              id="group-id"
              className={`${s.input} ${
                errors.teamID && touched.teamID && s.error
              }`}
            />
            {errors.teamID && touched.teamID ? (
              <div
                className={`${s.msjError} ${
                  errors.teamID && touched.teamID && s.error
                }`}
              >
                {errors.teamID}
              </div>
            ) : null}
          </>
        )}

        <label
          htmlFor="select-rol"
          className={`${s.label} ${errors.teamID && touched.role && s.error}`}
        >
          Rol:{" "}
        </label>
        <Field
          name="role"
          as="select"
          id="select-rol"
          className={`${s.input} ${errors.teamID && touched.role && s.error}`}
        >
          <option value="" disabled>
            Selecciona un rol
          </option>
          {datosRegistro?.Rol?.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </Field>
        {errors.role && touched.role ? (
          <div
            className={`${s.msjError} ${
              errors.teamID && touched.role && s.error
            }`}
          >
            {errors.role}
          </div>
        ) : null}

        <label
          htmlFor="continente"
          className={`${s.label} ${
            errors.continent && touched.continent && s.error
          }`}
        >
          Continente
        </label>
        <Field
          name="continent"
          as="select"
          id="continente"
          className={`${s.input} ${
            errors.continent && touched.continent && s.error
          }`}
        >
          <option value="" disabled>
            Selecciona un continente
          </option>
          {datosRegistro?.continente?.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </Field>
        {errors.continent && touched.continent ? (
          <div
            className={`${s.msjError} ${
              errors.continent && touched.continent && s.error
            }`}
          >
            {errors.continent}
          </div>
        ) : null}

        <label
          htmlFor="region"
          className={`${s.label} ${errors.region && touched.region && s.error}`}
        >
          Región:{" "}
        </label>
        <Field
          name="region"
          as="select"
          id="region"
          className={`${s.input} ${errors.region && touched.region && s.error}`}
        >
          <option value="" disabled>
            Selecciona una region
          </option>
          {datosRegistro?.region?.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </Field>
        {errors.region && touched.region ? (
          <div
            className={`${s.msjError} ${
              errors.region && touched.region && s.error
            }`}
          >
            {errors.region}
          </div>
        ) : null}

        <button type="submit" className={`${s.boton} ${s.botonRegistrar}`}>
          Registrarse
        </button>
        <button
          className={`${s.boton} ${s.botonLogear}`}
          onClick={iniciarSesionHandler}
        >
          Iniciar Sesión
        </button>
      </div>
    </Form>
  );
};

export default FormRegister;
