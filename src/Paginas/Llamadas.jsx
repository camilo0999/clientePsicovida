import React from "react";
import "./Llamadas.css";

const Llamadas = () => {
  return (
    <div className="llamadas-container">
      {/* Hero Section */}
      <section className="llamadas-hero">
        <div className="hero-content">
          <h1>Servicio de Llamadas Inteligentes</h1>
          <p>
            Nuestra solución de IA gestiona llamadas telefónicas para
            agendamiento de citas con interacciones naturales y eficientes
          </p>
        </div>
      </section>

      {/* Características Principales */}
      <section className="features-section">
        <h2>Funcionalidades Clave</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>Asistente por Voz</h3>
            <ul>
              <li>Reconoce lenguaje natural</li>
              <li>Procesa solicitudes complejas</li>
              <li>Aprende de cada interacción</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <h3>Agendamiento Automático</h3>
            <ul>
              <li>Consulta disponibilidad en tiempo real</li>
              <li>Evita conflictos de horarios</li>
              <li>Envía confirmaciones automáticas</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <h3>Transferencia Inteligente</h3>
            <ul>
              <li>Deriva llamadas cuando es necesario</li>
              <li>Proporciona contexto al agente humano</li>
              <li>Mantiene la continuidad de la conversación</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <h2>Ventajas para tu Negocio</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>
              <i className="fas fa-clock"></i> 24/7 Disponible
            </h3>
            <p>Atiende llamadas fuera de horario sin costos adicionales</p>
          </div>
          <div className="benefit-card">
            <h3>
              <i className="fas fa-chart-line"></i> Mayor Conversión
            </h3>
            <p>Reduce llamadas perdidas y mejora la satisfacción</p>
          </div>
          <div className="benefit-card">
            <h3>
              <i className="fas fa-money-bill-wave"></i> Reduce Costos
            </h3>
            <p>Disminuye la carga de tu call center</p>
          </div>
          <div className="benefit-card">
            <h3>
              <i className="fas fa-user-tie"></i> Escalable
            </h3>
            <p>Maneja múltiples llamadas simultáneas sin problemas</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>¿Listo para transformar tu atención telefónica?</h2>
        <button className="cta-button">Solicitar Demostración</button>
      </section>
    </div>
  );
};

export default Llamadas;
