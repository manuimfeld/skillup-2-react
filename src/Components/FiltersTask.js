import React, { useEffect } from "react";
import Tasks from "./Tasks";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { filtrarTareas, getTasks } from "../redux/actions";

const FiltersTask = ({ tareas }) => {
  const dispatch = useDispatch();

  function filtrosHandler(prop, evento) {
    dispatch(filtrarTareas(prop, evento.target.value));
  }

  return (
    <section className="filters-section">
      <Formik>
        <Form className="filtersTask">
          <h1>Mis tareas</h1>
          <ul>
            <li>
              <label htmlFor="">
                <input
                  onChange={filtrosHandler.bind(null, "title")}
                  type="text"
                  name="title-task"
                  id="title-task"
                  placeholder="Seleccionar por título..."
                />
              </label>
            </li>
            <li>
              <select
                onChange={filtrosHandler.bind(null, "estado")}
                name="select-priority"
                id="select-priority"
              >
                <option value="ALL">Todos los estados</option>
                <option value="NEW">Nuevo</option>
                <option value="IN PROGRESS">En progreso</option>
                <option value="FINISHED">Finalizado</option>
              </select>
            </li>
            <li>
              <select
                onChange={filtrosHandler.bind(null, "prioridad")}
                name="select-priority"
                id="select-priority"
              >
                <option value="ALL">Todas las prioridades</option>
                <option value="HIGH">Alta</option>
                <option value="MEDIUM">Media</option>
                <option value="LOW">Baja</option>
              </select>
            </li>
          </ul>
        </Form>
      </Formik>
      <Tasks tareas={tareas} />
    </section>
  );
};

export default FiltersTask;
