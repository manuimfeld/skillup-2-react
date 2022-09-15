import React from "react";
import { Form, Field } from "formik";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataRegister } from "../../redux/actions";

const FormRegister = ({ errors, touched }) => {
  const dispatch = useDispatch();
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

  return (
    <Form>
      <h1>Registro</h1>
      <ul>
        <li>
          <label htmlFor="userName">Nombre de usuario</label>
          <Field name="userName" id="userName" />
          {errors.userName && touched.userName ? (
            <div className="msg-error-form">{errors.userName}</div>
          ) : null}
        </li>
        <li>
          <label htmlFor="password">Contraseña</label>
          <Field name="password" type="password" id="password" />
          {errors.password && touched.password ? (
            <div className="msg-error-form">{errors.password}</div>
          ) : null}
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <Field name="email" id="email" />
          {errors.email && touched.email ? (
            <div className="msg-error-form">{errors.email}</div>
          ) : null}
        </li>
        <li>
          <Field type="checkbox" name="belong" id="belong" />
          <label htmlFor="belong">¿Perteneces a un equipo ya creado?</label>
          {errors.belong && touched.belong ? (
            <div className="msg-error-form">{errors.belong}</div>
          ) : null}
        </li>
        <li>
          <label htmlFor="group-id">
            Por favor, introduce el identificador de equipo
          </label>
          <Field name="teamID" id="group-id" />
          {errors.teamID && touched.teamID ? (
            <div className="msg-error-form">{errors.teamID}</div>
          ) : null}
        </li>
        <li>
          <label htmlFor="select-rol">Rol: </label>
          <Field name="role" as="select" id="select-rol">
            <option value="null" selected disabled>
              Selecciona un rol
            </option>
            {datosRegistro?.Rol?.map((i) => (
              <option key={i} defaultValue={i}>
                {i}
              </option>
            ))}
          </Field>
          {errors.role && touched.role ? (
            <div className="msg-error-form">{errors.role}</div>
          ) : null}
        </li>
        <li>
          <label htmlFor="continente">Continente</label>
          <Field name="continent" as="select" id="continente">
            <option value="null" selected disabled>
              Selecciona un continente
            </option>
            {datosRegistro?.continente?.map((i) => (
              <option key={i} defaultValue={i}>
                {i}
              </option>
            ))}
          </Field>
          {errors.continent && touched.continent ? (
            <div className="msg-error-form">{errors.continent}</div>
          ) : null}
        </li>
        <li>
          <label htmlFor="region">Región: </label>
          <Field name="region" as="select" id="region">
            <option value="null" selected disabled>
              Selecciona una region
            </option>
            {datosRegistro?.region?.map((i) => (
              <option key={i} defaultValue={i}>
                {i}
              </option>
            ))}
          </Field>
          {errors.region && touched.region ? (
            <div className="msg-error-form">{errors.region}</div>
          ) : null}
        </li>
        <li>
          <button type="submit">Enviar</button>
        </li>
      </ul>
    </Form>
  );
};

export default FormRegister;
