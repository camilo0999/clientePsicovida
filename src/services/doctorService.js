const API_DOCTORES_URL = "https://aplicacion-jfw5.onrender.com/api/v1/doctor";
const API_DISPONIBILIDAD_URL =
  "https://aplicacion-jfw5.onrender.com/api/v1/horario-atencion/disponibilidad";

export const doctorService = {
  async obtenerDoctores() {
    try {
      const response = await fetch(API_DOCTORES_URL);
      if (!response.ok) {
        throw new Error("Error al obtener los doctores");
      }
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
  async obtenerDisponibilidad(idDoctor, fecha) {
    try {
      const url = `${API_DISPONIBILIDAD_URL}/${idDoctor}?fecha=${fecha}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener la disponibilidad");
      }
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};
