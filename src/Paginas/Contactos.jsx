import React, { useState } from "react";
import "./Contactos.css";

const Contactos = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
  };

  const openWhatsApp = () => {
    // Reemplaza con tu número de WhatsApp (elimina los +, espacios o guiones)
    const phoneNumber = "5215512345678";
    const message =
      "Hola, me interesa obtener más información sobre sus servicios";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="contactos-container">
      {/* Hero Section */}
      <section className="contactos-hero">
        <h1>Contáctanos</h1>
        <p>
          Estamos aquí para ayudarte. Elige tu método de contacto preferido.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        {/* Formulario de Contacto */}
        <div className="contact-form-container">
          <h2>Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* Otros métodos de contacto */}
        <div className="other-methods">
          <div className="contact-card whatsapp-card" onClick={openWhatsApp}>
            <div className="contact-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <h3>WhatsApp</h3>
            <p>Chatea con nosotros instantáneamente</p>
            <button className="whatsapp-btn">Abrir WhatsApp</button>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Llamada telefónica</h3>
            <p>+52 55 1234 5678</p>
            <p>Lunes a Viernes: 9am - 6pm</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Correo electrónico</h3>
            <p>contacto@nodo.com</p>
            <p>Respuesta en menos de 24 horas</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Oficinas</h3>
            <p>Av. Reforma 123, CDMX</p>
            <p>Con cita previa</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactos;
