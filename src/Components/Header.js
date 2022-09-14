import React from "react";
import Logo from "../img/Logo.svg";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={Logo} alt="" />
          </li>
          <li>
            <button>Donar</button>
          </li>
          <li>
            <p>Tareas creadas: 3</p>
          </li>
          <li>
            <p>User2</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
