import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, getTasks } from "../redux/actions";
import s from "../styles/task.module.css";

const Task = ({
  title,
  fecha,
  usuario,
  status,
  prioridad,
  description,
  id,
}) => {
  const dispatch = useDispatch();
  function yyyymmdd(fecha) {
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    let h = addZero(new Date(fecha).getHours());
    let m = addZero(new Date(fecha).getMinutes());
    let s = addZero(new Date(fecha).getSeconds());
    let hora = h + ":" + m + ":" + s;
    let dd = addZero(new Date(fecha).getDate());
    let mm = addZero(new Date(fecha).getMonth() + 1);
    let yy = addZero(new Date(fecha).getFullYear());
    let dia = dd + "/" + mm + "/" + yy;
    return dia + " - " + hora;
  }

  async function borrarTareaHandler(id) {
    try {
      const token = localStorage.getItem("token");
      await dispatch(deleteTask(id, token));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={s.container}>
      <button
        className={s.botonEliminar}
        onClick={() => borrarTareaHandler(id)}
      >
        X
      </button>
      <h3>{title}</h3>
      <h6>{yyyymmdd(fecha)}</h6>
      <h5>{usuario}</h5>
      <button className={s.boton}>{status}</button>
      <button className={s.boton}>{prioridad}</button>
      <p>{description}</p>
    </div>
  );
};

export default Task;
