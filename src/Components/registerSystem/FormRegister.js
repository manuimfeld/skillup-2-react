import React from "react";
import { Form, Field } from "formik";

const FormRegister = ({ errors, touched }) => {
  return (
    <Form>
      <h1>Registro</h1>
      <ul>
        <li>
          <label htmlFor="firstName">Nombre de usuario</label>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div className="msg-error-form">{errors.firstName}</div>
          ) : null}
        </li>
        <li>
          <label htmlFor="password">Contraseña</label>
          <Field name="password" />
          {errors.password && touched.password ? (
            <div className="msg-error-form">{errors.password}</div>
          ) : null}
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <Field name="email" />
          {errors.email && touched.email ? (
            <div className="msg-error-form">{errors.email}</div>
          ) : null}
        </li>
        <li>
          <label class="switch">
            <input type="checkbox" id="checkbox" />
            <span class="slider round"></span>
          </label>
          <label htmlFor="checkbox" id="checkbox-p">
            Perteneces a un equipo ya creado
          </label>
        </li>
        <li>
          <label htmlFor="group-id">
            Por favor, introduce el identificador de equipo
          </label>
          <input id="group-id" name="group-id" type="text" />
        </li>
        <li>
          <label htmlFor="select-rol">Rol</label>
          <select name="select-rol" id="select-rol">
            <option value="value1" selected>
              Team Member
            </option>
            <option value="value2">Teach Leader</option>
          </select>
        </li>
        <li>
          <label htmlFor="select-continent">Continente</label>
          <select name="select-continent" id="select-continent">
            <option value="value1" selected>
              America
            </option>
            <option value="value2">Europa</option>
          </select>
        </li>
        <li>
          <label htmlFor="select-region">Región</label>
          <select name="select-region" id="select-region">
            <option value="value1" selected>
              America del Norte
            </option>
            <option value="value2">America del Sur</option>
          </select>
        </li>
        <li>
          <button type="submit">Enviar</button>
        </li>
      </ul>
    </Form>
  );
};

export default FormRegister;
