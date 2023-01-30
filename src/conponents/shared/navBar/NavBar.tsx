import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.scss";
import logo from "../../../media/logo/logo.png";
import US from "country-flag-icons/react/3x2/US";
import IT from "country-flag-icons/react/3x2/IT";
import { LinguaContext1 } from "../../../App";
function NavBar() {
  const { lingua, setLingua } = useContext(LinguaContext1);
  const [isTrue, setisTrue] = useState(false);
  useEffect(() => {
    if (lingua === "it") setisTrue(true);
    else setisTrue(false);
  }, [lingua]);
  const changeLngIng = () => {
    setLingua("en");
  };
  const changeLngIt = () => {
    setLingua("it");
  };
  return (
    <nav className="container-navbar">
      <div className="navbar">
        <div className="nav-left animate__animated animate__bounceInLeft">
          <NavLink to={"/portfolio-cisco-model"}>
            <img
              src={logo}
              className="logo animate__animated animate__bounceInDown"
              alt="logo cisco"
            ></img>
          </NavLink>
          <NavLink  className='logo-text '
            to={"/portfolio-cisco-model"}>Cisco
            
          </NavLink>
        </div>
        <div className="nav-right animate__animated animate__bounceInRight  ">
          <NavLink style={isActive => ({ color: isActive ? '#fff' : '#b1ebe5' })}
            to={"/skills"}>{isTrue ? "Abilità" : "Skills"}
          </NavLink>
          <NavLink style={isActive => ({ color: isActive ? '#fff' : '#b1ebe5' })}
            to={"/projects"}>{isTrue ? "Progetti" : "Projects"}
          </NavLink>
          <NavLink style={isActive => ({ color: isActive ? '#fff' : '#b1ebe5' })}
            to={"/about"}>{isTrue ? "Chi Sono" : "About"}
          </NavLink>
          <NavLink style={isActive => ({ color: isActive ? '#fff' : '#b1ebe5' })}
            to={"/contact"}>{isTrue ? "Contatti" : "Contact"}
          </NavLink>
        </div>
      </div>
      <div className="container-button-lng">
        <US onClick={changeLngIng} title="English" className="flag" />
        <IT onClick={changeLngIt} title="Italiano" className="flag" />
      </div>
    </nav>
  );
}

export default NavBar;
