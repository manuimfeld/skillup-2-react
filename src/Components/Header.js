import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/Logo.svg";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
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
    <header>
      <nav>
        <ul>
          <li>
            <img src={Logo} alt="" />
          </li>
          <li>
            <button onClick={logoutHandle}> X </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
