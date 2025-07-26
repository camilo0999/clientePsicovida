import { Routes, Route } from "react-router-dom";

// Paginas
import Inicio from "./Paginas/Inicio";
import Contactos from "./Paginas/Contactos";
import Quienes from "./Paginas/Quienes";
import Registro from "./Paginas/Registro";
import Login from "./Paginas/Login";
import Citas from "./Paginas/Citas";
import ConsultarCita from "./Paginas/ConsultarCita";

// Componentes de la app
import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contactos />} />
        <Route path="/quienes" element={<Quienes />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/consultar-cita" element={<ConsultarCita />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
