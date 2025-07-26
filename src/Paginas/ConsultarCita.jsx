import React, { useState } from "react";
import { citasService } from "../services/citasService";
import "./ConsultarCita.css";

const ConsultarCita = () => {
  const [documento, setDocumento] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) setDocumento(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResultado(null);

    if (!documento) {
      setError("Por favor ingresa tu número de documento");
      return;
    }

    setLoading(true);
    try {
      const result = await citasService.consultarCitaPorDocumento(documento);
      if (result.success) {
        setResultado(result.data);
      } else {
        setError(
          result.error ||
            "No pudimos encontrar tu cita. Por favor verifica tu número de documento."
        );
      }
    } catch (err) {
      setError("Ocurrió un error al consultar. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const formatFecha = (fechaStr) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(fechaStr).toLocaleDateString("es-ES", options);
  };

  return (
    <div className="consultar-cita-container">
      <div className="consultar-cita-header">
        <h1>Consulta tu Cita Psicológica</h1>
        <p className="consultar-cita-subtitle">
          Ingresa tu número de documento para ver los detalles de tu próxima
          cita
        </p>
      </div>

      <form className="consultar-cita-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="documento">
            <i className="fas fa-id-card"></i> Número de documento
          </label>
          <input
            type="text"
            id="documento"
            name="documento"
            value={documento}
            onChange={handleChange}
            maxLength={15}
            placeholder="Ingresa tu documento de identidad"
            required
          />
          <small className="form-hint">
            Solo números, sin puntos ni espacios
          </small>
        </div>

        <button
          type="submit"
          className="consultar-cita-btn"
          disabled={loading || !documento}
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Buscando...
            </>
          ) : (
            <>
              <i className="fas fa-search"></i> Consultar cita
            </>
          )}
        </button>

        {error && (
          <div className="consultar-cita-error">
            <i className="fas fa-exclamation-circle"></i> {error}
          </div>
        )}
      </form>

      {resultado && (
        <div className="consultar-cita-resultado">
          {resultado.tieneCita ? (
            <div className="cita-card">
              <div className="cita-card-header">
                <h2>
                  <i className="fas fa-calendar-check"></i> Tu próxima cita
                </h2>
                <span
                  className={`cita-status ${resultado.cita.estado.toLowerCase()}`}
                >
                  {resultado.cita.estado}
                </span>
              </div>

              <div className="cita-details">
                <div className="detail-item">
                  <i className="fas fa-user"></i>
                  <div>
                    <h4>Paciente</h4>
                    <p>{resultado.cita.nombrePaciente}</p>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="fas fa-user-md"></i>
                  <div>
                    <h4>Especialista</h4>
                    <p>{resultado.cita.nombreDoctor}</p>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="fas fa-calendar-day"></i>
                  <div>
                    <h4>Fecha</h4>
                    <p>{formatFecha(resultado.cita.fecha)}</p>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Horario</h4>
                    <p>
                      {resultado.cita.horaInicio} - {resultado.cita.horaFin}
                    </p>
                  </div>
                </div>
              </div>

              <div className="cita-actions">
                <button className="btn-secondary-citas">
                  <i className="fas fa-calendar-times"></i> Cancelar cita
                </button>
              </div>

              <div className="cita-nota">
                <i className="fas fa-info-circle"></i>
                <p>
                  Por favor llega 10 minutos antes. Trae tu documento de
                  identidad. Cancelaciones con 24 horas de anticipación.
                </p>
              </div>
            </div>
          ) : (
            <div className="no-cita-card">
              <i className="fas fa-calendar-times"></i>
              <h3>No tienes citas programadas</h3>
              <p>
                No encontramos citas asociadas a este documento. Si crees que
                esto es un error, por favor contáctanos.
              </p>
              <button className="btn-primary">
                <i className="fas fa-calendar-plus"></i> Agendar nueva cita
              </button>
            </div>
          )}
        </div>
      )}

      <div className="citas-info">
        <div className="info-card">
          <i className="fas fa-info-circle"></i>
          <h3>Importante</h3>
          <p>
            Por favor llega 10 minutos antes de tu cita. Las citas tienen una
            duración de 1 hora exacta.
          </p>
        </div>
        <div className="info-card">
          <i className="fas fa-calendar-times"></i>
          <h3>Cancelaciones</h3>
          <p>
            Si necesitas cancelar o reagendar, por favor hazlo con al menos 24
            horas de anticipación.
          </p>
        </div>
        <div className="info-card">
          <i className="fas fa-headset"></i>
          <h3>¿Necesitas ayuda?</h3>
          <p>
            Contáctanos al +52 55 1234 5678 o por WhatsApp para asistencia
            inmediata.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultarCita;
