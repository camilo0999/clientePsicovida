import React from "react";
import "./Inicio.css"; // Archivo CSS que crearemos después

const Inicio = () => {
  return (
    <div className="inicio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Revolucionando la Atención al Cliente con IA</h1>
          <p>
            Nuestro sistema inteligente automatiza el agendamiento de citas
            mediante conversaciones naturales por texto, voz o llamadas.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Solicitar Demo</button>
            <button className="secondary-btn">Más Información</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://holaamigo.ai/wp-content/uploads/2024/03/Blog-Implementacion-IA-en-atencion-al-cliente.png"
            alt="Sistema de IA"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>¿Cómo funciona nuestro sistema?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Chat Inteligente</h3>
            <p>
              Los clientes pueden agendar citas mediante conversaciones de texto
              naturales con nuestro asistente virtual 24/7.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-phone-volume"></i>
            </div>
            <h3>Atención por Voz</h3>
            <p>
              Nuestra IA entiende y procesa solicitudes por voz con precisión,
              ofreciendo una experiencia humana.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <h3>Agendamiento Automático</h3>
            <p>
              Integración perfecta con tu calendario para evitar conflictos y
              optimizar tu disponibilidad.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Aprendizaje Continuo</h3>
            <p>
              El sistema mejora constantemente gracias a algoritmos de machine
              learning que analizan cada interacción.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo-section">
        <div className="demo-content">
          <h2>Experimenta el poder de la IA</h2>
          <p>
            Prueba nuestro asistente virtual en acción y descubre cómo puede
            transformar tu atención al cliente.
          </p>
          <button className="primary-btn">Probar Demo Interactiva</button>
        </div>
        <div className="demo-video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo del sistema"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-text">
              "Implementamos este sistema y redujimos nuestro tiempo de
              respuesta en un 80%. ¡Increíble!"
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyJTIwZGUlMjBob21icmV8ZW58MHx8MHx8fDA%3D"
                  alt="Cliente 1"
                  className="author-avatar"
                />
              </div>
              <div className="author-info">
                <h4>María González</h4>
                <p>Directora de Operaciones, Empresa XYZ</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              "Nuestros clientes están encantados con la facilidad para agendar
              citas a cualquier hora."
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img
                  src="https://img.freepik.com/foto-gratis/chica-cabello-largo-siendo-feliz_23-2148244714.jpg?semt=ais_items_boosted&w=740"
                  alt="Cliente 2"
                  className="author-avatar"
                />
              </div>
              <div className="author-info">
                <h4>Juan Pérez</h4>
                <p>Gerente General, Servicios ABC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>¿Listo para transformar tu atención al cliente?</h2>
        <p>
          Contáctanos hoy mismo y descubre cómo nuestra solución de IA puede
          optimizar tu negocio.
        </p>
        <button className="cta-btn">Contactar al Equipo</button>
      </section>
    </div>
  );
};

export default Inicio;
