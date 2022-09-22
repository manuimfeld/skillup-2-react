import React, { useState } from "react";
import CreateTask from "./CreateTask";
import "../styles/home.css";
import FiltersTask from "./FiltersTask";

const Home = () => {
  const [creado, setCreado] = useState();
  return (
    <>
      <div className="layout">
        <CreateTask setCreado={setCreado} creado={creado} />
        <FiltersTask creado={creado} />
      </div>
    </>
  );
};

export default Home;
