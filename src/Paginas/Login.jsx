import React, { useState } from "react";
import { authService } from "../services/authService";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ usuario: "", contrasena: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });
    const result = await authService.login(form);
    if (result.success) {
      setMessage({ type: "success", text: "¡Inicio de sesión exitoso!" });
      // Aquí puedes redirigir o guardar el token si lo necesitas
    } else {
      setMessage({
        type: "error",
        text: result.error || "Error al iniciar sesión",
      });
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        {message.text && (
          <div className={`login-message ${message.type}`}>{message.text}</div>
        )}
        <div className="login-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={form.usuario}
            onChange={handleChange}
            required
            autoComplete="username"
          />
        </div>
        <div className="login-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={form.contrasena}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
        </div>
        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
};

export default Login;
