import React, { useState } from "react";
import "./Contactos.css";

const Contactos = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
    telefono: "",
    mensaje: "",
    asunto: "Consulta general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Obtener fecha y hora actual
      const now = new Date();
      const fecha = now.toISOString().split("T")[0]; // Formato YYYY-MM-DD
      const hora = now.toTimeString().split(" ")[0]; // Formato HH:MM:SS

      // Preparar datos según el formato requerido
      const mensajeData = {
        fecha: fecha,
        hora: hora,
        nombreCompleto: formData.nombreCompleto,
        asunto: formData.asunto,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.mensaje,
        visto: false,
      };

      // Enviar al endpoint
      const response = await fetch(
        "https://aplicacion-jfw5.onrender.com/api/v1/mensaje",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mensajeData),
        }
      );

      if (response.ok) {
        console.log("Mensaje enviado exitosamente:", mensajeData);
        setSubmitSuccess(true);
        setFormData({
          nombreCompleto: "",
          email: "",
          telefono: "",
          mensaje: "",
          asunto: "Consulta general",
        });
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openTelegram = () => {
    window.open("https://t.me/CamiloTetrisBot", "_blank");
  };

  const contactMethods = [
    {
      icon: "fab fa-telegram-plane",
      title: "Chat de Telegram",
      description:
        "Disponible 24/7 para atención al paciente y consultas rápidas.",
      action: "Abrir chat",
      onClick: openTelegram,
      highlight: true,
    },
    {
      icon: "fas fa-phone-alt",
      title: "Llamada telefónica",
      details: "+52 55 1234 5678",
      description: "Horario: Lunes a Viernes de 9:00 a 18:00 hrs",
      action: "Llamar ahora",
      link: "tel:+525512345678",
    },
    {
      icon: "fas fa-envelope",
      title: "Correo electrónico",
      details: "contacto@psicovida.com",
      description: "Respuesta en menos de 24 horas hábiles",
      action: "Enviar email",
      link: "mailto:contacto@psicovida.com",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Consultorios",
      details: "Av. Reforma 123, CDMX",
      description: "Solo con cita previa",
      action: "Ver en mapa",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="contactos-container">
      {/* Hero Section */}
      <section className="contactos-hero">
        <div className="hero-content">
          <h1>Estamos aquí para ayudarte</h1>
          <p className="hero-subtitle">
            En PsicoVida, tu bienestar emocional es nuestra prioridad.
            Contáctanos por el medio que prefieras y te responderemos a la
            brevedad.
          </p>
          <div className="hero-cta">
            <a href="#formulario" className="btn btn-primary">
              <i className="fas fa-envelope"></i> Enviar mensaje
            </a>
            <button onClick={openTelegram} className="btn btn-secondary">
              <i className="fab fa-telegram-plane"></i> Chat inmediato
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="contactos-content">
        {/* Formulario de Contacto */}
        <section id="formulario" className="contact-form-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Envíanos un mensaje</h2>
              <p className="section-subtitle">
                Completa el formulario y nos pondremos en contacto contigo en
                menos de 24 horas.
              </p>
            </div>

            {submitSuccess && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>
                  ¡Gracias por tu mensaje! Nos pondremos en contacto contigo
                  pronto.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="nombreCompleto">Nombre completo*</label>
                  <input
                    type="text"
                    id="nombreCompleto"
                    name="nombreCompleto"
                    value={formData.nombreCompleto}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo electrónico*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+52 55 1234 5678"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="asunto">Asunto</label>
                  <select
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                  >
                    <option value="Consulta general">Consulta general</option>
                    <option value="Primera cita">Solicitar primera cita</option>
                    <option value="Seguimiento">
                      Seguimiento de tratamiento
                    </option>
                    <option value="Emergencia">Emergencia psicológica</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="mensaje">Mensaje*</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    placeholder="Describe brevemente el motivo de tu contacto..."
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <div className="form-footer">
                <p className="form-note">
                  <i className="fas fa-lock"></i> Tus datos están seguros con
                  nosotros. Respetamos tu privacidad.
                </p>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Enviar mensaje
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Métodos de Contacto */}
        <section className="contact-methods-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Otros medios de contacto</h2>
              <p className="section-subtitle">
                Elige el método que más te convenga para comunicarte con
                nosotros
              </p>
            </div>

            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`method-card ${
                    method.highlight ? "highlight" : ""
                  }`}
                  onClick={method.onClick}
                >
                  <div className="card-icon">
                    <i className={method.icon}></i>
                  </div>
                  <h3>{method.title}</h3>
                  {method.details && (
                    <p className="card-detail">{method.details}</p>
                  )}
                  <p className="card-description">{method.description}</p>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="card-action"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.action} <i className="fas fa-chevron-right"></i>
                    </a>
                  ) : (
                    <button className="card-action">
                      {method.action} <i className="fas fa-chevron-right"></i>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="map-section">
          <div className="section-container">
            <div className="map-container">
              <iframe
                title="Ubicación del consultorio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8882445525436!2d-99.1678265845336!3d19.427020746202915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3758e9d36b%3A0x4a5a74a1e3a1295e!2sAv.%20Paseo%20de%20la%20Reforma%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="map-overlay">
                <h3>Nuestro consultorio principal</h3>
                <p>Av. Reforma 123, Col. Juárez, CDMX</p>
                <p>Horario: Lunes a Viernes de 9:00 a 18:00 hrs</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <i className="fas fa-directions"></i> Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="contact-cta">
          <div className="section-container">
            <h2>¿Necesitas ayuda psicológica inmediata?</h2>
            <p>
              Si estás en crisis o necesitas hablar con alguien urgentemente,
              contáctanos ahora mismo a través de nuestro servicio de
              emergencias.
            </p>
            <div className="cta-buttons">
              <a href="tel:+525512345678" className="btn btn-emergency">
                <i className="fas fa-phone-alt"></i> Línea de emergencia
              </a>
              <button onClick={openTelegram} className="btn btn-secondary">
                <i className="fab fa-telegram-plane"></i> Chat de emergencia
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contactos;
