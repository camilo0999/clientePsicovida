// Usar proxy local en desarrollo para evitar CORS
const API_BASE_URL = import.meta.env.DEV
  ? "/api"
  : "https://aplicacion-jfw5.onrender.com/api/v1";

export const pacienteService = {
  // Registrar un nuevo paciente
  async registrarPaciente(pacienteData) {
    try {
      const response = await fetch(
        `https://aplicacion-jfw5.onrender.com/api/v1/paciente`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(pacienteData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Datos recibidos:", data);
      return { success: true, data };
    } catch (error) {
      console.error("Error al registrar paciente:", error);
      return { success: false, error: error.message };
    }
  },
};
