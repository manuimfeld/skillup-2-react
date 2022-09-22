import React, { useEffect, useLayoutEffect } from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { filtrarTareas } from "../redux/actions";
import filtrosTareas from "../redux/reducer/filtrosTareas";

const Tasks = ({ tareas }) => {
  return (
    <>
      {tareas &&
        tareas?.map((i) => {
          return (
            <Task
              key={i.title}
              title={i.title}
              fecha={i.createdAt}
              usuario={i.user.userName}
              status={i.status}
              prioridad={i.importance}
              description={i.description.slice(0, 50)}
            />
          );
        })}
    </>
  );
};

export default Tasks;
