import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat-service-container">
      {/* Encabezado */}
      <header className="service-header">
        <h1>Servicio de Chat Inteligente</h1>
        <p className="service-subtitle">
          Solución de atención al cliente automatizada con IA para agendamiento
          de citas
        </p>
      </header>

      {/* Características Principales */}
      <section className="key-features">
        <h2>Características Clave</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Conversaciones Naturales</h3>
            <ul className="feature-list">
              <li>Procesamiento de Lenguaje Natural (NLP)</li>
              <li>Entiende contexto y intención</li>
              <li>Responde a preguntas complejas</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3>Agendamiento Automático</h3>
            <ul className="feature-list">
              <li>Integración con calendarios</li>
              <li>Detección de conflictos</li>
              <li>Recordatorios automáticos</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Funcionalidades Avanzadas</h3>
            <ul className="feature-list">
              <li>Multilenguaje (español/inglés)</li>
              <li>Personalización de flujos</li>
              <li>Análisis de conversaciones</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Beneficios del Servicio */}
      <section className="service-benefits">
        <h2>Beneficios para tu Negocio</h2>
        <div className="benefits-container">
          <div className="benefit-item">
            <h3>
              <i className="fas fa-clock"></i> Disponibilidad 24/7
            </h3>
            <p>
              Atiende consultas y agenda citas en cualquier momento sin
              necesidad de personal humano.
            </p>
          </div>

          <div className="benefit-item">
            <h3>
              <i className="fas fa-chart-line"></i> Mayor Conversión
            </h3>
            <p>
              Reduce el abandono de clientes con respuestas inmediatas a sus
              consultas.
            </p>
          </div>

          <div className="benefit-item">
            <h3>
              <i className="fas fa-money-bill-wave"></i> Reducción de Costos
            </h3>
            <p>
              Disminuye la carga de trabajo de tu equipo de atención al cliente.
            </p>
          </div>

          <div className="benefit-item">
            <h3>
              <i className="fas fa-user-check"></i> Experiencia Mejorada
            </h3>
            <p>
              Ofrece a tus clientes una atención rápida, consistente y
              personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Integraciones */}
      <section className="integrations">
        <h2>Integraciones Disponibles</h2>
        <div className="integration-icons">
          <div className="integration-item">
            <i className="fab fa-google"></i>
            <span>Google Calendar</span>
          </div>
          <div className="integration-item">
            <i className="fas fa-calendar"></i>
            <span>Microsoft Outlook</span>
          </div>
          <div className="integration-item">
            <i className="fab fa-slack"></i>
            <span>Slack</span>
          </div>
          <div className="integration-item">
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp Business</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>¿Listo para implementar nuestro chat inteligente?</h2>
        <button className="cta-button">Solicitar Demo</button>
      </section>
    </div>
  );
};

export default Chat;
