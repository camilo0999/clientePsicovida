import React from "react";
import "./Quienes.css";

const Quienes = () => {
  return (
    <div className="quienes-container">
      {/* Hero Banner */}
      <section className="quienes-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Nuestro Equipo de Psicólogos</h1>
            <p className="hero-subtitle">
              Profesionales comprometidos con tu bienestar emocional y mental
            </p>
            <div className="hero-cta">
              <a href="#equipo" className="btn btn-primary">
                Conoce al equipo
              </a>
              <a href="/contacto" className="btn btn-outline">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="historia-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestra Historia</h2>
            <p className="section-subtitle">
              Una trayectoria de dedicación a la salud mental
            </p>
          </div>
          <div className="historia-content">
            <div className="historia-text">
              <p>
                Fundado en 2015, PsicoVida nació de la visión compartida de un
                grupo de psicólogos que buscaban crear un espacio terapéutico
                diferente. Un lugar donde la calidez humana y el rigor
                profesional se combinaran para ofrecer una atención psicológica
                integral.
              </p>
              <p>
                Lo que comenzó como un pequeño consultorio con dos
                profesionales, hoy es un centro multidisciplinario que atiende
                más de 1,200 pacientes al año. Hemos crecido, pero nuestra
                esencia sigue intacta: cada persona que llega a nosotros es
                única y merece un enfoque personalizado.
              </p>
              <div className="logros-container">
                <div className="logro-item">
                  <div className="logro-number">1,200+</div>
                  <div className="logro-text">Pacientes atendidos</div>
                </div>
                <div className="logro-item">
                  <div className="logro-number">15+</div>
                  <div className="logro-text">Especialidades</div>
                </div>
                <div className="logro-item">
                  <div className="logro-number">8</div>
                  <div className="logro-text">Profesionales</div>
                </div>
              </div>
            </div>
            <div className="historia-image">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                alt="Equipo de psicólogos en consulta"
                className="img-fluid"
              />
              <div className="image-caption">
                <i className="fas fa-quote-left"></i>
                <p>Nuestro equipo en una sesión de supervisión clínica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="mision-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mv-mision">
              <div className="mv-header">
                <div className="mv-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Misión</h3>
              </div>
              <div className="mv-body">
                <p>
                  Brindar atención psicológica de excelencia con un enfoque
                  humano e integral, acompañando a cada persona en su proceso de
                  autoconocimiento y crecimiento personal.
                </p>
                <ul className="mv-list">
                  <li>
                    <i className="fas fa-check"></i> Terapias basadas en
                    evidencia
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Enfoque personalizado
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Compromiso ético
                  </li>
                </ul>
              </div>
            </div>
            <div className="mv-card mv-vision">
              <div className="mv-header">
                <div className="mv-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>Visión</h3>
              </div>
              <div className="mv-body">
                <p>
                  Ser referentes en salud mental, promoviendo una cultura de
                  bienestar emocional donde cada persona pueda desarrollar su
                  máximo potencial.
                </p>
                <ul className="mv-list">
                  <li>
                    <i className="fas fa-check"></i> Innovación terapéutica
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Impacto comunitario
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Formación continua
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="equipo-section" id="equipo">
        <div className="container">
          <div className="section-header">
            <h2>Conoce a Nuestro Equipo</h2>
            <p className="section-subtitle">
              Psicólogos especializados con formación en diferentes enfoques
              terapéuticos
            </p>
          </div>
          <div className="equipo-grid">
            <div className="team-card">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Dra. María González"
                />
                <div className="team-specialty">
                  <span>Terapia Cognitivo-Conductual</span>
                </div>
              </div>
              <div className="team-info">
                <h3>Dra. María González</h3>
                <p className="team-title">Psicóloga Clínica - Directora</p>
                <p className="team-bio">
                  Doctora en Psicología con especialización en trastornos de
                  ansiedad. Más de 15 años de experiencia clínica y docente.
                </p>
                <div className="team-education">
                  <p>
                    <i className="fas fa-graduation-cap"></i> PhD en Psicología
                    Clínica
                  </p>
                  <p>
                    <i className="fas fa-university"></i> Universidad de Buenos
                    Aires
                  </p>
                </div>
                <div className="team-social">
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-calendar-alt"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Carlos Rodríguez"
                />
                <div className="team-specialty">
                  <span>Psicología Infantil</span>
                </div>
              </div>
              <div className="team-info">
                <h3>Dr. Carlos Rodríguez</h3>
                <p className="team-title">Psicólogo Infantil</p>
                <p className="team-bio">
                  Especialista en desarrollo infantil y terapia de juego. Amplia
                  experiencia en trastornos del espectro autista.
                </p>
                <div className="team-education">
                  <p>
                    <i className="fas fa-graduation-cap"></i> Máster en
                    Psicología Infantil
                  </p>
                  <p>
                    <i className="fas fa-university"></i> Universidad de Chile
                  </p>
                </div>
                <div className="team-social">
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-calendar-alt"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Lic. Ana Martínez"
                />
                <div className="team-specialty">
                  <span>Terapia de Parejas</span>
                </div>
              </div>
              <div className="team-info">
                <h3>Lic. Ana Martínez</h3>
                <p className="team-title">Terapeuta de Parejas</p>
                <p className="team-bio">
                  Especialista en relaciones interpersonales y terapia
                  sistémica. Facilitadora de talleres de comunicación asertiva.
                </p>
                <div className="team-education">
                  <p>
                    <i className="fas fa-graduation-cap"></i> Especialización en
                    Terapia Familiar
                  </p>
                  <p>
                    <i className="fas fa-university"></i> Universidad Nacional
                    de Colombia
                  </p>
                </div>
                <div className="team-social">
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-calendar-alt"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Lic. Laura Sánchez"
                />
                <div className="team-specialty">
                  <span>Psicología Organizacional</span>
                </div>
              </div>
              <div className="team-info">
                <h3>Lic. Laura Sánchez</h3>
                <p className="team-title">Psicóloga Organizacional</p>
                <p className="team-bio">
                  Experta en bienestar laboral y manejo del estrés. Consultora
                  para empresas en desarrollo de ambientes laborales saludables.
                </p>
                <div className="team-education">
                  <p>
                    <i className="fas fa-graduation-cap"></i> Máster en
                    Psicología del Trabajo
                  </p>
                  <p>
                    <i className="fas fa-university"></i> Universidad de
                    Barcelona
                  </p>
                </div>
                <div className="team-social">
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-calendar-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="valores-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Valores Fundamentales</h2>
            <p className="section-subtitle">
              Principios que guían nuestro trabajo terapéutico
            </p>
          </div>
          <div className="valores-grid">
            <div className="valor-card">
              <div className="valor-icon">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3>Empatía</h3>
              <p>
                Escuchamos con atención plena y sin juicios, creando un espacio
                seguro donde cada persona se sienta comprendida y aceptada.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h3>Confidencialidad</h3>
              <p>
                Respetamos y protegemos tu privacidad. Todo lo compartido en
                terapia se maneja con absoluta discreción profesional.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Excelencia</h3>
              <p>
                Mantenemos altos estándares de calidad en nuestra práctica, con
                formación continua en las últimas técnicas terapéuticas.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Enfoque Integral</h3>
              <p>
                Consideramos todos los aspectos de tu vida (emocional, social,
                físico) para un abordaje terapéutico completo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quienes-cta">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para comenzar tu proceso terapéutico?</h2>
            <p>
              Nuestro equipo está preparado para acompañarte en tu camino hacia
              el bienestar emocional. La primera consulta es el comienzo de tu
              transformación.
            </p>
            <div className="cta-buttons">
              <a href="/registro" className="btn btn-primary">
                <i className="fas fa-calendar-check"></i> Agendar Consulta
              </a>
              <a href="/contacto" className="btn btn-outline">
                <i className="fas fa-phone-alt"></i> Hablar con un profesional
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quienes;
