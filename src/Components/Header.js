import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/Logo.svg";
// import "../styles/header.css";
import s from "../styles/header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const logeado = localStorage.getItem("token");

  function logoutHandle(e) {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className={s.container}>
      <img src={Logo} alt="" className={s.imagen} />
      {logeado && (
        <button onClick={logoutHandle} className={s.boton}>
          {" "}
          X{" "}
        </button>
      )}
    </div>
  );
};

export default Header;
