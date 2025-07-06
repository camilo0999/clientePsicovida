import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          PsicoVida
        </Link>

        {/* Menú para móviles */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? "bar1 change" : "bar1"}></div>
          <div className={isOpen ? "bar2 change" : "bar2"}></div>
          <div className={isOpen ? "bar3 change" : "bar3"}></div>
        </div>

        {/* Items del menú */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quienes" className="nav-links" onClick={toggleMenu}>
              Quiénes Somos
            </Link>
          </li>

          {/* Dropdown de Servicios */}
          <li className="nav-item dropdown">
            <div className="nav-links dropdown-toggle" onClick={toggleServices}>
              Servicios{" "}
              <i
                className={`fas fa-chevron-${servicesOpen ? "up" : "down"}`}
              ></i>
            </div>
            <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
              <li className="dropdown-item">
                <Link
                  to="/servicios/chat"
                  className="dropdown-link"
                  onClick={() => {
                    toggleMenu();
                    setServicesOpen(false);
                  }}
                >
                  <i className="fas fa-comments"></i> Servicio de Chat
                </Link>
              </li>
              <li className="dropdown-item">
                <Link
                  to="/servicios/llamada"
                  className="dropdown-link"
                  onClick={() => {
                    toggleMenu();
                    setServicesOpen(false);
                  }}
                >
                  <i className="fas fa-phone-alt"></i> Servicio de Llamada
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/contacto" className="nav-links" onClick={toggleMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
