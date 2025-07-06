import React from "react";
import "./Quienes.css"; // Archivo CSS que crearemos después

const Quienes = () => {
  return (
    <div className="quienes-container">
      {/* Hero Banner */}
      <section className="quienes-hero">
        <div className="hero-overlay">
          <h1>Quiénes Somos</h1>
          <p>
            Innovando en atención al cliente mediante inteligencia artificial
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="historia-section">
        <div className="section-content">
          <div className="text-content">
            <h2>Nuestra Historia</h2>
            <p>
              Fundada en 2025, nuestra empresa nació con la visión de
              revolucionar la interacción entre negocios y clientes. Lo que
              comenzó como un pequeño proyecto de investigación en procesamiento
              de lenguaje natural, se ha convertido en la solución líder en
              agendamiento inteligente de citas.
            </p>
            <p>
              Hoy, servimos a más de 500 empresas en 15 países, ayudándolas a
              optimizar sus operaciones y mejorar la experiencia de sus clientes
              mediante nuestra tecnología de vanguardia.
            </p>
          </div>
          <div className="image-content">
            <img
              src="https://www.bbva.com/wp-content/uploads/2018/02/emprender-jovenes-trabajo-empresa-bbva-1.jpg"
              alt="Nuestro equipo en los inicios"
            />
          </div>
        </div>
      </section>

      {/* Nuestra Misión y Visión */}
      <section className="mision-vision">
        <div className="mv-card">
          <div className="mv-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3>Misión</h3>
          <p>
            Transformar la atención al cliente mediante soluciones de IA
            accesibles, reduciendo tiempos de espera y mejorando la satisfacción
            del usuario final.
          </p>
        </div>
        <div className="mv-card">
          <div className="mv-icon">
            <i className="fas fa-eye"></i>
          </div>
          <h3>Visión</h3>
          <p>
            Ser el estándar global en sistemas de agendamiento inteligente,
            donde toda interacción cliente-empresa sea fluida, eficiente y
            satisfactoria.
          </p>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="equipo-section">
        <h2>Conoce a Nuestro Equipo</h2>
        <p className="section-subtitle">
          Expertos en IA, experiencia de usuario y servicio al cliente
          trabajando juntos para crear la mejor solución del mercado.
        </p>
        <div className="equipo-grid">
          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://i.revistapym.com.co/cms/2024/06/07163829/havas.jpg?w=412&d=2.625"
                alt="CEO"
              />
            </div>
            <h3>Carlos Martínez</h3>
            <p className="position">CEO & Fundador</p>
            <p className="bio">
              Experto en IA con más de 15 años en desarrollo de chatbots y
              sistemas conversacionales.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://img.freepik.com/fotos-premium/mujer-ceo-aislada-blanco-mujer-ceo-estudio-mujer-ceo-foto-fondo-mujer-ceo-usa-anteojos_474717-141113.jpg"
                alt="CTO"
                className="member-photo"
              />
            </div>
            <h3>Ana Rodríguez</h3>
            <p className="position">CTO</p>
            <p className="bio">
              Especialista en machine learning y arquitectura de sistemas
              escalables.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhBGvhjnA_BNAmC9BYTJV1gFCa3k83HissfEbP6ER3ToadRd6jdBcROpMNNdxsLat4bk&usqp=CAU"
                alt="UX Lead"
              />
            </div>
            <h3>David González</h3>
            <p className="position">Líder de UX</p>
            <p className="bio">
              Diseñador de experiencias conversacionales centradas en el
              usuario.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://www.expoknews.com/wp-content/uploads/2019/10/alexis.jpg"
                alt="CSO"
              />
            </div>
            <h3>Laura Sánchez</h3>
            <p className="position">Directora de Servicio al Cliente</p>
            <p className="bio">
              Conecta las necesidades reales de los clientes con nuestras
              soluciones técnicas.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Corporativos */}
      <section className="valores-section">
        <h2>Nuestros Valores</h2>
        <div className="valores-grid">
          <div className="valor-card">
            <div className="valor-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Innovación</h3>
            <p>
              Buscamos constantemente nuevas formas de mejorar la interacción
              entre empresas y clientes.
            </p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Enfoque Humano</h3>
            <p>
              La tecnología debe servir para conectar personas, no para
              reemplazar la interacción humana.
            </p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Seguridad</h3>
            <p>
              Protegemos los datos de nuestros clientes con los más altos
              estándares de la industria.
            </p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Mejora Continua</h3>
            <p>
              Nuestro sistema aprende de cada interacción para ofrecer un
              servicio cada vez mejor.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="quienes-cta">
        <h2>¿Listo para transformar tu atención al cliente?</h2>
        <p>
          Descubre cómo nuestra solución puede ayudar a tu negocio a ser más
          eficiente y ofrecer un servicio excepcional.
        </p>
        <button className="cta-button">Contacta a Nuestro Equipo</button>
      </section>
    </div>
  );
};

export default Quienes;
