import React, { useEffect } from "react";
import Tasks from "./Tasks";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { filtrarTareas, getTasks } from "../redux/actions";

import s from "../styles/login.module.css";

const FiltersTask = () => {
  const dispatch = useDispatch();

  function filtrosHandler(prop, evento) {
    dispatch(filtrarTareas(prop, evento.target.value));
  }

  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <h1 className={`${s.titulo} ${s.centrarTexto}`}>Mis tareas</h1>

        <input
          onChange={filtrosHandler.bind(null, "title")}
          type="text"
          name="title-task"
          id="title-task"
          placeholder="Filtrar por título..."
          className={s.input}
        />

        <select
          onChange={filtrosHandler.bind(null, "estado")}
          name="select-priority"
          id="select-priority"
          className={s.input}
        >
          <option value="ALL">Todos los estados</option>
          <option value="NEW">Nuevo</option>
          <option value="IN PROGRESS">En progreso</option>
          <option value="FINISHED">Finalizado</option>
        </select>

        <select
          onChange={filtrosHandler.bind(null, "prioridad")}
          name="select-priority"
          id="select-priority"
          className={s.input}
        >
          <option value="ALL">Todas las prioridades</option>
          <option value="HIGH">Alta</option>
          <option value="MEDIUM">Media</option>
          <option value="LOW">Baja</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersTask;
