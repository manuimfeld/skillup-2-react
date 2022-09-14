import React from "react";
import { Form, Field, Formik } from "formik";

const CreateTask = ({ errors, touched }) => {
  return (
    <section className="createTask-section">
      <Formik>
        <Form className="createTask">
          <h1>Crear tarea</h1>
          <ul>
            <li>
              <label htmlFor="">
                <input
                  type="text"
                  name="title-task"
                  id="title-task"
                  placeholder="Título"
                />
              </label>
            </li>
            <li>
              <select name="select-rol" id="select-rol">
                <option disabled selected>
                  Selecciona un estado
                </option>
                <option value="value1">Completa</option>
                <option value="value2">Incompleta</option>
              </select>
            </li>
            <li>
              <select name="select-rol" id="select-rol">
                <option disabled selected>
                  Selecciona una prioridad
                </option>
                <option value="value1">Baja</option>
                <option value="value2">Alta</option>
              </select>
            </li>
            <li>
              <label htmlFor="text-task">
                <textarea
                  name="text-task"
                  id="text-task"
                  placeholder="Descripción"
                ></textarea>
              </label>
            </li>
            <li>
              <button type="submit">Crear</button>
            </li>
          </ul>
        </Form>
      </Formik>
    </section>
  );
};

export default CreateTask;
