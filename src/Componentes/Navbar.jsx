import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [citasDropdownOpen, setCitasDropdownOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleCitasDropdown = () => {
    setCitasDropdownOpen(!citasDropdownOpen);
  };

  const closeAllDropdowns = () => {
    setDropdownOpen(false);
    setCitasDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo y nombre */}
        <Link to="/" className="navbar-brand" onClick={closeAllDropdowns}>
          <div className="logo-container">
            <i className="fas fa-brain logo-icon"></i>
            <span className="logo-text">PsicoVida</span>
            <span className="logo-tagline">Salud Mental Integral</span>
          </div>
        </Link>

        {/* Menú para móviles */}
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menú principal */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeAllDropdowns}>
              <i className="fas fa-home nav-icon"></i>
              Inicio
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/quienes"
              className="nav-link"
              onClick={closeAllDropdowns}
            >
              <i className="fas fa-users nav-icon"></i>
              Quiénes Somos
            </Link>
          </li>

          <li className="nav-item dropdown">
            <div
              className="dropdown-toggle"
              onClick={toggleCitasDropdown}
              onMouseEnter={() => setCitasDropdownOpen(true)}
            >
              <i className="fas fa-calendar-check nav-icon"></i>
              Citas
              <i
                className={`fas ${
                  citasDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>
            <ul className={`dropdown-menu ${citasDropdownOpen ? "show" : ""}`}>
              <li>
                <Link
                  to="/citas"
                  className="dropdown-link"
                  onClick={closeAllDropdowns}
                >
                  <i className="fas fa-plus-circle"></i> Nueva Cita
                </Link>
              </li>
              <li>
                <Link
                  to="/consultar-cita"
                  className="dropdown-link"
                  onClick={closeAllDropdowns}
                >
                  <i className="fas fa-search"></i> Consultar Cita
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link
              to="/contacto"
              className="nav-link"
              onClick={closeAllDropdowns}
            >
              <i className="fas fa-envelope nav-icon"></i>
              Contacto
            </Link>
          </li>
        </ul>

        {/* Acceso de usuario */}
        <div className="user-section">
          <div
            className="user-dropdown"
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="user-toggle"
              onClick={() =>
                window.open("https://adminpsicovida.netlify.app/", "_blank")
              }
              onMouseEnter={() => setDropdownOpen(true)}
              aria-label="Menú de usuario"
            >
              <i className="fas fa-user-circle user-icon"></i>
              <span>Inicio de sesión</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
