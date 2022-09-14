import React from "react";
import Task from "./Task";
import { Form, Field, Formik } from "formik";

const FiltersTask = () => {
  return (
    <section className="filters-section">
      <Formik>
        <Form className="filtersTask">
          <h1>Mis tareas</h1>
          <ul>
            <li>
              <label htmlFor="">
                <input
                  type="text"
                  name="title-task"
                  id="title-task"
                  placeholder="Seleccionar por título..."
                />
              </label>
            </li>
            <li>
              <select name="select-priority" id="select-priority">
                <option disabled selected>
                  Seleccionar una prioridad
                </option>
                <option value="value1">Alta</option>
                <option value="value2">Baja</option>
              </select>
            </li>
          </ul>
        </Form>
      </Formik>
      <Task />
    </section>
  );
};

export default FiltersTask;
