const API_CITAS_URL = "https://aplicacion-jfw5.onrender.com/api/v1/cita";
const API_CONSULTAR_CITA_URL =
  "https://aplicacion-jfw5.onrender.com/api/v1/cita/tiene-cita";

export const citasService = {
  async obtenerCitas() {
    try {
      const response = await fetch(API_CITAS_URL);
      if (!response.ok) {
        throw new Error("Error al obtener las citas");
      }
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
  async crearCita(cita) {
    try {
      const response = await fetch(API_CITAS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cita),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Error al crear la cita");
      }
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
  async consultarCitaPorDocumento(documento) {
    try {
      const response = await fetch(API_CONSULTAR_CITA_URL + "/" + documento, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Error al consultar la cita");
      }
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};
