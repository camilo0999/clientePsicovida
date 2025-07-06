import React from "react";
import "./Footer.css"; // Archivo CSS que crearemos después

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección 1: Logo y descripción */}
        <div className="footer-section">
          <h3 className="footer-logo">NODO</h3>
          <p className="footer-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Sección 2: Enlaces rápidos */}
        <div className="footer-section">
          <h4 className="footer-title">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/quienes">Quiénes Somos</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/contactos">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Sección 3: Contacto */}
        <div className="footer-section">
          <h4 className="footer-title">Contacto</h4>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i> Dirección: Calle Falsa
              123, Ciudad
            </li>
            <li>
              <i className="fas fa-phone"></i> Teléfono: +123 456 789
            </li>
            <li>
              <i className="fas fa-envelope"></i> Email: info@empresa.com
            </li>
          </ul>
        </div>

        {/* Sección 4: Redes sociales */}
        <div className="footer-section">
          <h4 className="footer-title">Síguenos</h4>
          <div className="footer-social">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Empresa. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
