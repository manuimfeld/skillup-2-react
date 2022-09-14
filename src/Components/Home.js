import React from "react";
import CreateTask from "./CreateTask";
import "../styles/home.css";
import FiltersTask from "./FiltersTask";

const Home = () => {
  return (
    <>
      <div className="layout">
        <CreateTask />
        <FiltersTask />
      </div>
    </>
  );
};

export default Home;
