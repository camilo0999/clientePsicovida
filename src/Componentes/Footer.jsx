import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", path: "/" },
    { name: "Quiénes Somos", path: "/quienes" },
    { name: "Servicios", path: "/servicios" },
    { name: "Blog", path: "/blog" },
    { name: "Contacto", path: "/contacto" },
    { name: "Preguntas Frecuentes", path: "/faq" },
  ];

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      text: "Av. Reforma 123, Col. Juárez, CDMX",
    },
    { icon: "fas fa-phone", text: "+52 55 1234 5678" },
    { icon: "fas fa-envelope", text: "hola@psicovida.com" },
    { icon: "fas fa-clock", text: "Lunes a Viernes: 9:00 - 18:00 hrs" },
  ];

  const socialMedia = [
    { icon: "fab fa-facebook-f", url: "#" },
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-instagram", url: "#" },
    { icon: "fab fa-linkedin-in", url: "#" },
    { icon: "fab fa-youtube", url: "#" },
  ];

  const professionalLinks = [
    { name: "Área de profesionales", path: "/profesionales" },
    { name: "Oportunidades laborales", path: "/trabajo" },
    { name: "Supervisión clínica", path: "/supervision" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección 1: Logo y descripción */}
        <div className="footer-section">
          <div className="footer-brand">
            <i className="fas fa-brain footer-logo-icon"></i>
            <span className="footer-logo">PsicoVida</span>
          </div>
          <p className="footer-about">
            Centro especializado en salud mental y bienestar emocional.
            Ofrecemos terapias psicológicas personalizadas con un enfoque humano
            y profesional.
          </p>
          <div className="footer-newsletter">
            <h5>Suscríbete a nuestro boletín</h5>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                required
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Sección 2: Enlaces rápidos */}
        <div className="footer-section">
          <h4 className="footer-title">Enlaces Rápidos</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path}>
                  <i className="fas fa-chevron-right"></i> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección 3: Para profesionales */}
        <div className="footer-section">
          <h4 className="footer-title">Para Profesionales</h4>
          <ul className="footer-links">
            {professionalLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path}>
                  <i className="fas fa-chevron-right"></i> {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer-certifications">
            <h5>Certificaciones</h5>
            <div className="certification-badges">
              <img
                src="https://via.placeholder.com/80x50?text=Cert1"
                alt="Certificación 1"
              />
              <img
                src="https://via.placeholder.com/80x50?text=Cert2"
                alt="Certificación 2"
              />
            </div>
          </div>
        </div>

        {/* Sección 4: Contacto */}
        <div className="footer-section">
          <h4 className="footer-title">Contacto</h4>
          <ul className="footer-contact">
            {contactInfo.map((item, index) => (
              <li key={index}>
                <i className={item.icon}></i> {item.text}
              </li>
            ))}
          </ul>
          <div className="footer-social">
            <h5>Síguenos</h5>
            <div className="social-icons">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-payment">
            <h5>Métodos de pago</h5>
            <div className="payment-methods">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-amex"></i>
              <i className="fas fa-money-bill-wave"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright y enlaces legales */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            &copy; {currentYear} PsicoVida - Centro de Psicología. Todos los
            derechos reservados.
          </p>
          <div className="legal-links">
            <a href="/privacidad">Política de Privacidad</a>
            <a href="/terminos">Términos y Condiciones</a>
            <a href="/cookies">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
