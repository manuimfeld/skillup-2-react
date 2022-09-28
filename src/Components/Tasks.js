import React from "react";
import Task from "./Task";

import s from "../styles/task.module.css";

const Tasks = ({ tareas }) => {
  return (
    <>
      {tareas.length ? (
        tareas?.map((i, idx) => {
          return (
            <Task
              key={i.title + idx}
              id={i._id}
              title={i.title}
              fecha={i.createdAt}
              usuario={i.user.userName}
              status={i.status}
              prioridad={i.importance}
              description={i.description.slice(0, 50)}
            />
          );
        })
      ) : (
        <div>No hay tareas</div>
      )}
    </>
  );
};

export default Tasks;
