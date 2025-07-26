import React, { useEffect, useState } from "react";
import { citasService } from "../services/citasService";
import { doctorService } from "../services/doctorService";
import "./Citas.css";

function sumarUnaHora(hora) {
  const [h, m] = hora.split(":");
  let nuevaHora = parseInt(h, 10) + 1;
  if (nuevaHora < 10) nuevaHora = "0" + nuevaHora;
  return `${nuevaHora}:${m}`;
}

const Citas = () => {
  const [doctores, setDoctores] = useState([]);
  const [form, setForm] = useState({
    documentoPaciente: "",
    idDoctor: "",
    fecha: "",
    horaInicio: "",
    horaFin: "",
  });
  const [formMsg, setFormMsg] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);
  const [horarios, setHorarios] = useState([]);
  const [loadingHorarios, setLoadingHorarios] = useState(false);
  const [errores, setErrores] = useState({});
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const fetchDoctores = async () => {
      const result = await doctorService.obtenerDoctores();
      if (result.success) {
        setDoctores(result.data.doctores || []);
      }
    };
    fetchDoctores();
  }, []);

  useEffect(() => {
    const fetchDisponibilidad = async () => {
      setHorarios([]);
      setForm((prev) => ({ ...prev, horaInicio: "", horaFin: "" }));
      if (form.idDoctor && form.fecha) {
        setLoadingHorarios(true);
        const result = await doctorService.obtenerDisponibilidad(
          form.idDoctor,
          form.fecha
        );
        if (result.success) {
          setHorarios(result.data);
        } else {
          setHorarios([]);
        }
        setLoadingHorarios(false);
      }
    };
    fetchDisponibilidad();
  }, [form.idDoctor, form.fecha]);

  useEffect(() => {
    if (form.horaInicio) {
      setForm((prev) => ({ ...prev, horaFin: sumarUnaHora(form.horaInicio) }));
    } else {
      setForm((prev) => ({ ...prev, horaFin: "" }));
    }
  }, [form.horaInicio]);

  const hoy = new Date().toISOString().split("T")[0];

  const validar = () => {
    const errs = {};
    if (!form.documentoPaciente) {
      errs.documentoPaciente = "El documento es obligatorio";
    } else if (!/^[0-9]+$/.test(form.documentoPaciente)) {
      errs.documentoPaciente = "El documento solo debe contener números";
    }
    if (!form.idDoctor) {
      errs.idDoctor = "Selecciona un doctor(a)";
    }
    if (!form.fecha) {
      errs.fecha = "Selecciona una fecha";
    } else if (form.fecha < hoy) {
      errs.fecha = "No puedes seleccionar una fecha anterior a hoy";
    }
    if (!form.horaInicio) {
      errs.horaInicio = "Selecciona un horario disponible";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "documentoPaciente" && value && !/^[0-9]*$/.test(value))
      return;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Avanzar al siguiente paso cuando se completa un campo
    if (name === "documentoPaciente" && value && activeStep === 1) {
      setActiveStep(2);
    } else if (name === "idDoctor" && value && activeStep === 2) {
      setActiveStep(3);
    } else if (name === "fecha" && value && activeStep === 3) {
      setActiveStep(4);
    } else if (name === "horaInicio" && value && activeStep === 4) {
      setActiveStep(5);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMsg({ type: "", text: "" });
    const errs = validar();
    setErrores(errs);
    if (Object.keys(errs).length > 0) return;
    setSending(true);
    const cita = {
      ...form,
      idDoctor: parseInt(form.idDoctor, 10),
      estado: "PENDIENTE",
    };
    const result = await citasService.crearCita(cita);
    if (result.success) {
      setFormMsg({ type: "success", text: "¡Cita agendada exitosamente!" });
      setForm({
        documentoPaciente: "",
        idDoctor: "",
        fecha: "",
        horaInicio: "",
        horaFin: "",
      });
      setHorarios([]);
      setErrores({});
      setActiveStep(1);
    } else {
      setFormMsg({
        type: "error",
        text: result.error || "Error al agendar la cita",
      });
    }
    setSending(false);
  };

  const formIncompleto =
    !form.documentoPaciente ||
    !form.idDoctor ||
    !form.fecha ||
    !form.horaInicio ||
    horarios.length === 0;

  return (
    <div className="citas-container">
      <div className="citas-header">
        <h1>Agendar Cita Psicológica</h1>
        <p className="citas-subtitle">
          Completa el formulario para reservar tu cita con nuestros
          especialistas
        </p>
      </div>

      <div className="citas-stepper">
        <div className={`stepper-step ${activeStep >= 1 ? "active" : ""}`}>
          <div className="step-number">1</div>
          <div className="step-label">Datos del paciente</div>
        </div>
        <div className="stepper-line"></div>
        <div className={`stepper-step ${activeStep >= 2 ? "active" : ""}`}>
          <div className="step-number">2</div>
          <div className="step-label">Especialista</div>
        </div>
        <div className="stepper-line"></div>
        <div className={`stepper-step ${activeStep >= 3 ? "active" : ""}`}>
          <div className="step-number">3</div>
          <div className="step-label">Fecha</div>
        </div>
        <div className="stepper-line"></div>
        <div className={`stepper-step ${activeStep >= 4 ? "active" : ""}`}>
          <div className="step-number">4</div>
          <div className="step-label">Horario</div>
        </div>
        <div className="stepper-line"></div>
        <div className={`stepper-step ${activeStep >= 5 ? "active" : ""}`}>
          <div className="step-number">5</div>
          <div className="step-label">Confirmación</div>
        </div>
      </div>

      <form className="cita-form" onSubmit={handleSubmit} autoComplete="off">
        {formMsg.text && (
          <div className={`cita-form-msg ${formMsg.type}`}>
            <i
              className={`fas ${
                formMsg.type === "success"
                  ? "fa-check-circle"
                  : "fa-exclamation-circle"
              }`}
            ></i>
            {formMsg.text}
          </div>
        )}

        <div className={`form-step ${activeStep === 1 ? "active" : ""}`}>
          <div className="cita-form-group">
            <label htmlFor="documentoPaciente">
              <i className="fas fa-id-card"></i> Documento del paciente
            </label>
            <input
              type="text"
              id="documentoPaciente"
              name="documentoPaciente"
              value={form.documentoPaciente}
              onChange={handleChange}
              required
              maxLength={15}
              placeholder="Ingresa tu número de documento"
            />
            {errores.documentoPaciente && (
              <span className="cita-error-msg">
                <i className="fas fa-exclamation-circle"></i>{" "}
                {errores.documentoPaciente}
              </span>
            )}
          </div>
          <button
            type="button"
            className="cita-next-btn"
            onClick={() => form.documentoPaciente && setActiveStep(2)}
            disabled={!form.documentoPaciente}
          >
            Siguiente <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className={`form-step ${activeStep === 2 ? "active" : ""}`}>
          <div className="cita-form-group">
            <label htmlFor="idDoctor">
              <i className="fas fa-user-md"></i> Selecciona tu especialista
            </label>
            <select
              id="idDoctor"
              name="idDoctor"
              value={form.idDoctor}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un psicólogo</option>
              {doctores.map((doc) => (
                <option key={doc.idDoctor} value={doc.idDoctor}>
                  {doc.primerNombre} {doc.primerApellido} - {doc.especialidad}
                </option>
              ))}
            </select>
            {errores.idDoctor && (
              <span className="cita-error-msg">
                <i className="fas fa-exclamation-circle"></i> {errores.idDoctor}
              </span>
            )}
          </div>
          <div className="form-step-buttons">
            <button
              type="button"
              className="cita-prev-btn"
              onClick={() => setActiveStep(1)}
            >
              <i className="fas fa-arrow-left"></i> Anterior
            </button>
            <button
              type="button"
              className="cita-next-btn"
              onClick={() => form.idDoctor && setActiveStep(3)}
              disabled={!form.idDoctor}
            >
              Siguiente <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className={`form-step ${activeStep === 3 ? "active" : ""}`}>
          <div className="cita-form-group">
            <label htmlFor="fecha">
              <i className="fas fa-calendar-alt"></i> Selecciona una fecha
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              required
              min={hoy}
            />
            {errores.fecha && (
              <span className="cita-error-msg">
                <i className="fas fa-exclamation-circle"></i> {errores.fecha}
              </span>
            )}
          </div>
          <div className="form-step-buttons">
            <button
              type="button"
              className="cita-prev-btn"
              onClick={() => setActiveStep(2)}
            >
              <i className="fas fa-arrow-left"></i> Anterior
            </button>
            <button
              type="button"
              className="cita-next-btn"
              onClick={() => form.fecha && setActiveStep(4)}
              disabled={!form.fecha}
            >
              Siguiente <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className={`form-step ${activeStep === 4 ? "active" : ""}`}>
          <div className="cita-form-group">
            <label htmlFor="horaInicio">
              <i className="fas fa-clock"></i> Horario disponible
            </label>
            {loadingHorarios ? (
              <div className="loading-horarios">
                <i className="fas fa-spinner fa-spin"></i> Cargando horarios
                disponibles...
              </div>
            ) : horarios.length === 0 && form.idDoctor && form.fecha ? (
              <div className="cita-no-horarios">
                <i className="fas fa-calendar-times"></i> No hay horarios
                disponibles para este día.
                <p>Por favor selecciona otra fecha.</p>
              </div>
            ) : (
              <select
                id="horaInicio"
                name="horaInicio"
                value={form.horaInicio}
                onChange={handleChange}
                required
                disabled={horarios.length === 0}
              >
                <option value="">Selecciona un horario</option>
                {horarios.map((hora) => (
                  <option key={hora} value={hora}>
                    {hora}
                  </option>
                ))}
              </select>
            )}
            {errores.horaInicio && (
              <span className="cita-error-msg">
                <i className="fas fa-exclamation-circle"></i>{" "}
                {errores.horaInicio}
              </span>
            )}
          </div>
          <div className="cita-form-group">
            <label htmlFor="horaFin">
              <i className="fas fa-clock"></i> Hora de finalización
            </label>
            <input
              type="text"
              id="horaFin"
              name="horaFin"
              value={form.horaFin || "Selecciona un horario primero"}
              readOnly
              className="readonly-input"
            />
          </div>
          <div className="form-step-buttons">
            <button
              type="button"
              className="cita-prev-btn"
              onClick={() => setActiveStep(3)}
            >
              <i className="fas fa-arrow-left"></i> Anterior
            </button>
            <button
              type="button"
              className="cita-next-btn"
              onClick={() => form.horaInicio && setActiveStep(5)}
              disabled={!form.horaInicio}
            >
              Siguiente <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className={`form-step ${activeStep === 5 ? "active" : ""}`}>
          <div className="cita-resumen">
            <h3>Resumen de tu cita</h3>
            <div className="resumen-item">
              <span className="resumen-label">Documento:</span>
              <span className="resumen-value">{form.documentoPaciente}</span>
            </div>
            <div className="resumen-item">
              <span className="resumen-label">Especialista:</span>
              <span className="resumen-value">
                {doctores.find((d) => d.idDoctor == form.idDoctor)
                  ?.primerNombre || "No seleccionado"}
                {doctores.find((d) => d.idDoctor == form.idDoctor)
                  ?.primerApellido || ""}
              </span>
            </div>
            <div className="resumen-item">
              <span className="resumen-label">Fecha:</span>
              <span className="resumen-value">
                {form.fecha
                  ? new Date(form.fecha).toLocaleDateString("es-ES", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "No seleccionada"}
              </span>
            </div>
            <div className="resumen-item">
              <span className="resumen-label">Horario:</span>
              <span className="resumen-value">
                {form.horaInicio
                  ? `${form.horaInicio} - ${form.horaFin}`
                  : "No seleccionado"}
              </span>
            </div>
          </div>
          <div className="form-step-buttons">
            <button
              type="button"
              className="cita-prev-btn"
              onClick={() => setActiveStep(4)}
            >
              <i className="fas fa-arrow-left"></i> Anterior
            </button>
            <button
              className="cita-submit-btn"
              type="submit"
              disabled={sending || formIncompleto}
            >
              {sending ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Agendando...
                </>
              ) : (
                <>
                  <i className="fas fa-calendar-check"></i> Confirmar cita
                </>
              )}
            </button>
          </div>
        </div>
      </form>

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

export default Citas;
