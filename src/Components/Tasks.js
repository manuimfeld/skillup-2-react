import React from "react";
import Task from "./Task";

import s from "../styles/task.module.css";

const Tasks = ({ tareas }) => {
  return (
    <>
      {tareas &&
        tareas?.map((i) => {
          return (
            <Task
              key={i.title}
              id={i._id}
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
