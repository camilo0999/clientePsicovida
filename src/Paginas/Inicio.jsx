import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="inicio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a tu Espacio de Crecimiento Personal</h1>
          <p className="hero-subtitle">
            Ofrecemos acompañamiento psicológico profesional para ayudarte a
            encontrar equilibrio emocional y bienestar mental.
          </p>
          <div className="hero-buttons">
            <Link to="/registro" className="btn btn-primary">
              Registrarme
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            alt="Psicóloga profesional"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Nuestros Enfoques Terapéuticos</h2>
          <p className="section-subtitle">
            Cada persona es única, por eso adaptamos nuestras terapias a tus
            necesidades específicas.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h3>Terapia Individual</h3>
            <p>
              Sesiones personalizadas para abordar ansiedad, depresión, estrés y
              otros desafíos emocionales con un enfoque compasivo y profesional.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Terapia de Pareja</h3>
            <p>
              Mejoramos la comunicación, resolvemos conflictos y fortalecemos
              los lazos emocionales de manera saludable.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-child"></i>
            </div>
            <h3>Psicología Infantil</h3>
            <p>
              Atención especializada para niños y adolescentes, ayudándoles a
              desarrollar habilidades emocionales y sociales.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Evaluación Psicológica</h3>
            <p>
              Evaluaciones completas para diagnosticar y crear planes de
              tratamiento personalizados según tus necesidades.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            alt="Consultorio psicológico"
          />
        </div>
        <div className="about-content">
          <h2>Un Espacio Seguro para tu Bienestar</h2>
          <p>
            Nuestro consultorio está diseñado para crear un ambiente de
            confianza donde puedas expresarte libremente. Creemos en un enfoque
            integral que considera todos los aspectos de tu vida.
          </p>
          <ul className="about-list">
            <li>
              <i className="fas fa-check-circle"></i> Profesionales certificados
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Enfoque humanista
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Confidencialidad
              garantizada
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Terapias basadas en
              evidencia
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Historias de Transformación</h2>
          <p className="section-subtitle">
            Descubre cómo nuestros pacientes han encontrado el camino hacia su
            bienestar emocional.
          </p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-text">
              <i className="fas fa-quote-left"></i>
              <p>
                Gracias a la terapia he podido superar mi ansiedad y recuperar
                la confianza en mí misma. ¡La experiencia ha sido
                transformadora!
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Paciente 1"
                />
              </div>
              <div className="author-info">
                <h4>Ana Martínez</h4>
                <p>Paciente desde 2022</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              <i className="fas fa-quote-left"></i>
              <p>
                La terapia de pareja nos ayudó a comunicarnos mejor y fortalecer
                nuestra relación. Ahora tenemos herramientas para resolver
                conflictos.
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Paciente 2"
                />
              </div>
              <div className="author-info">
                <h4>Carlos y Laura</h4>
                <p>Pareja en terapia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para comenzar tu camino hacia el bienestar?</h2>
          <p>
            El primer paso es el más importante. Contáctanos para agendar tu
            primera consulta y comenzar tu proceso de transformación personal.
          </p>
          <div className="cta-buttons">
            <Link to="/registro" className="btn btn-primary">
              Agendar Consulta
            </Link>
            <Link to="/contacto" className="btn btn-outline">
              Contactarnos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
