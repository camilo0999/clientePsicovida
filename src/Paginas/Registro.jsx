import React, { useState } from "react";
import { pacienteService } from "../services/pacienteService";
import "./Registro.css";

const Registro = () => {
  const [formData, setFormData] = useState({
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    tipoDocumento: "",
    numeroDocumento: "",
    fechaNacimiento: "",
    sexo: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [activeStep, setActiveStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    // Validación básica antes de avanzar
    if (
      activeStep === 1 &&
      (!formData.primerNombre ||
        !formData.primerApellido ||
        !formData.fechaNacimiento ||
        !formData.sexo)
    ) {
      setMessage({
        type: "error",
        text: "Por favor completa los campos requeridos",
      });
      return;
    }
    if (
      activeStep === 2 &&
      (!formData.tipoDocumento || !formData.numeroDocumento)
    ) {
      setMessage({
        type: "error",
        text: "Por favor completa los datos de identificación",
      });
      return;
    }

    setMessage({ type: "", text: "" });
    setActiveStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setMessage({ type: "", text: "" });
    setActiveStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const result = await pacienteService.registrarPaciente(formData);

      if (result.success) {
        setMessage({
          type: "success",
          text: "¡Registro exitoso! Hemos creado tu perfil de paciente.",
        });
        setFormData({
          primerNombre: "",
          segundoNombre: "",
          primerApellido: "",
          segundoApellido: "",
          tipoDocumento: "",
          numeroDocumento: "",
          fechaNacimiento: "",
          sexo: "",
          direccion: "",
          telefono: "",
          email: "",
        });
        setActiveStep(1);
      } else {
        setMessage({
          type: "error",
          text:
            result.error ||
            "Ocurrió un error al registrar. Por favor inténtalo nuevamente.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Error de conexión. Por favor verifica tu internet e inténtalo de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateAge = (birthdate) => {
    if (!birthdate) return 0;
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="registro-container">
      <div className="registro-content">
        <div className="registro-header">
          <h1>
            <i className="fas fa-user-plus"></i> Registro de Paciente
          </h1>
          <p className="registro-subtitle">
            Completa el formulario para comenzar tu proceso terapéutico
          </p>
        </div>

        <div className="registro-stepper">
          <div className={`stepper-step ${activeStep >= 1 ? "active" : ""}`}>
            <div className="step-number">1</div>
            <div className="step-label">Datos Personales</div>
          </div>
          <div className="stepper-line"></div>
          <div className={`stepper-step ${activeStep >= 2 ? "active" : ""}`}>
            <div className="step-number">2</div>
            <div className="step-label">Identificación</div>
          </div>
          <div className="stepper-line"></div>
          <div className={`stepper-step ${activeStep >= 3 ? "active" : ""}`}>
            <div className="step-number">3</div>
            <div className="step-label">Contacto</div>
          </div>
        </div>

        {message.text && (
          <div className={`registro-message ${message.type}`}>
            <i
              className={`fas ${
                message.type === "success"
                  ? "fa-check-circle"
                  : "fa-exclamation-circle"
              }`}
            ></i>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="registro-form">
          {/* Paso 1: Información Personal */}
          <div className={`form-step ${activeStep === 1 ? "active" : ""}`}>
            <div className="form-section">
              <h3>
                <i className="fas fa-user"></i> Información Personal
              </h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="primerNombre">
                    <i className="fas fa-asterisk required-icon"></i> Primer
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="primerNombre"
                    name="primerNombre"
                    value={formData.primerNombre}
                    onChange={handleInputChange}
                    required
                    placeholder="Ej: María"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="segundoNombre">Segundo Nombre</label>
                  <input
                    type="text"
                    id="segundoNombre"
                    name="segundoNombre"
                    value={formData.segundoNombre}
                    onChange={handleInputChange}
                    placeholder="Ej: José"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="primerApellido">
                    <i className="fas fa-asterisk required-icon"></i> Primer
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="primerApellido"
                    name="primerApellido"
                    value={formData.primerApellido}
                    onChange={handleInputChange}
                    required
                    placeholder="Ej: González"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="segundoApellido">Segundo Apellido</label>
                  <input
                    type="text"
                    id="segundoApellido"
                    name="segundoApellido"
                    value={formData.segundoApellido}
                    onChange={handleInputChange}
                    placeholder="Ej: López"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fechaNacimiento">
                    <i className="fas fa-asterisk required-icon"></i> Fecha de
                    Nacimiento
                  </label>
                  <input
                    type="date"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleInputChange}
                    required
                    max={new Date().toISOString().split("T")[0]}
                  />
                  {formData.fechaNacimiento && (
                    <span className="age-indicator">
                      Edad: {calculateAge(formData.fechaNacimiento)} años
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="sexo">
                    <i className="fas fa-asterisk required-icon"></i> Sexo
                  </label>
                  <select
                    id="sexo"
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecciona...</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="O">Otro</option>
                    <option value="N">Prefiero no decir</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-step-actions">
              <button
                type="button"
                className="next-btn"
                onClick={nextStep}
                disabled={
                  !formData.primerNombre ||
                  !formData.primerApellido ||
                  !formData.fechaNacimiento ||
                  !formData.sexo
                }
              >
                Siguiente <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Paso 2: Documento de Identidad */}
          <div className={`form-step ${activeStep === 2 ? "active" : ""}`}>
            <div className="form-section">
              <h3>
                <i className="fas fa-id-card"></i> Documento de Identidad
              </h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="tipoDocumento">
                    <i className="fas fa-asterisk required-icon"></i> Tipo de
                    Documento
                  </label>
                  <select
                    id="tipoDocumento"
                    name="tipoDocumento"
                    value={formData.tipoDocumento}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecciona...</option>
                    <option value="CC">Cédula de Ciudadanía</option>
                    <option value="CE">Cédula de Extranjería</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="PP">Pasaporte</option>
                    <option value="RC">Registro Civil</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="numeroDocumento">
                    <i className="fas fa-asterisk required-icon"></i> Número de
                    Documento
                  </label>
                  <input
                    type="text"
                    id="numeroDocumento"
                    name="numeroDocumento"
                    value={formData.numeroDocumento}
                    onChange={handleInputChange}
                    required
                    placeholder="Ej: 1234567890"
                  />
                </div>
              </div>
            </div>

            <div className="form-step-actions">
              <button type="button" className="prev-btn" onClick={prevStep}>
                <i className="fas fa-arrow-left"></i> Anterior
              </button>
              <button
                type="button"
                className="next-btn"
                onClick={nextStep}
                disabled={!formData.tipoDocumento || !formData.numeroDocumento}
              >
                Siguiente <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Paso 3: Información de Contacto */}
          <div className={`form-step ${activeStep === 3 ? "active" : ""}`}>
            <div className="form-section">
              <h3>
                <i className="fas fa-address-book"></i> Información de Contacto
              </h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefono">
                    <i className="fas fa-asterisk required-icon"></i> Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    placeholder="Ej: 3001234567"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-asterisk required-icon"></i> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Ej: ejemplo@correo.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="direccion">
                  <i className="fas fa-asterisk required-icon"></i> Dirección
                </label>
                <textarea
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  rows="3"
                  required
                  placeholder="Ingresa tu dirección completa"
                ></textarea>
              </div>
            </div>

            <div className="form-step-actions">
              <button type="button" className="prev-btn" onClick={prevStep}>
                <i className="fas fa-arrow-left"></i> Anterior
              </button>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Registrando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-check"></i> Completar Registro
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        <div className="registro-footer">
          <p>
            <i className="fas fa-lock"></i> Tus datos están protegidos bajo
            nuestra
            <a href="/privacidad"> Política de Privacidad</a>
          </p>
          <p>
            ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registro;
