const API_LOGIN_URL = "https://aplicacion-jfw5.onrender.com/api/v1/login";

export const authService = {
  async login({ usuario, contrasena }) {
    try {
      const response = await fetch(API_LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario, contrasena }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Error en el inicio de sesión");
      }
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};
