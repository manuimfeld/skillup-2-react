import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, getTask, getTasks } from "../redux/actions";
import s from "../styles/task.module.css";
import PacmanLoader from "react-spinners/PacmanLoader";

const Task = ({
  title,
  fecha,
  usuario,
  status,
  prioridad,
  description,
  id,
}) => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await dispatch(deleteTask(id, token));
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  async function irAlDetalleHandler(id) {
    try {
      const token = localStorage.getItem("token");
      await dispatch(getTask(id, token));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={s.container}>
      {loading ? (
        <PacmanLoader />
      ) : (
        <>
          <button
            className={s.botonEliminar}
            onClick={() => borrarTareaHandler(id)}
          >
            X
          </button>
          <h3 className={s.titulo}>{title}</h3>
          <h6 className={s.fecha}>{yyyymmdd(fecha)}</h6>
          <h5 className={s.usuario}>{usuario}</h5>
          <div className={s.contBotones}>
            <button className={`${s.boton} ${s[status.toLowerCase()]}`}>
              {status.toLowerCase()}
            </button>
            <button className={`${s.boton} ${s[prioridad.toLowerCase()]}`}>
              {prioridad.toLowerCase()}
            </button>
          </div>
          <p className={s.description}>{description}</p>
        </>
      )}
    </div>
  );
};

export default Task;
