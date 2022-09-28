// import "../styles/home.css";
import s from "../styles/home.module.css";
import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import FiltersTask from "./FiltersTask";
import { useDispatch, useSelector } from "react-redux";
import { filtrarTareas, getTasks, postTask } from "../redux/actions";
import ClipLoader from "react-spinners/ClipLoader";
import Tasks from "./Tasks";

const Home = () => {
  const dispatch = useDispatch();
  const tareas = useSelector((e) => e.filteredTasks);
  const [loading, setLoading] = useState(false);

  async function createTaskHandler(datos, props) {
    setLoading(true);
    try {
      await dispatch(postTask(datos, localStorage.getItem("token")));
      await dispatch(filtrarTareas("INICIAR", "INICIAR"));
      props.resetForm();
    } catch (e) {
      alert(e.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      try {
        const token = await localStorage.getItem("token");
        await dispatch(getTasks(token));
        await dispatch(filtrarTareas("INICIAR", "INICIAR"));
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } catch (e) {
        console.log("error: ", e);
      }
    }
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <ClipLoader size="100" />
        </div>
      ) : (
        <div className={s.container}>
          <div className={s.containerColumna}>
            <CreateTask handleSubmit={createTaskHandler} />
            <FiltersTask />
          </div>
          <div className={s.tareas}>
            <Tasks tareas={tareas} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
