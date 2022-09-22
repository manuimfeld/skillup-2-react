import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import "../styles/home.css";
import FiltersTask from "./FiltersTask";
import { useDispatch, useSelector } from "react-redux";
import { filtrarTareas, getTasks, postTask } from "../redux/actions";
import Loading from "./Loading";

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
      try {
        const token = await localStorage.getItem("token");
        await dispatch(getTasks(token));
        dispatch(filtrarTareas("INICIAR", "INICIAR"));
      } catch (e) {
        console.log("error: ", e);
      }
    }
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="layout">
          <CreateTask handleSubmit={createTaskHandler} />
          <FiltersTask tareas={tareas} />
        </div>
      )}
    </>
  );
};

export default Home;
