import { Routes, Route } from "react-router-dom";

// Paginas
import Inicio from "./Paginas/Inicio";
import Contactos from "./Paginas/Contactos";
import Quienes from "./Paginas/Quienes";
import Servicios from "./Paginas/Servicios";
import Chat from "./Paginas/Chat";
import Llamadas from "./Paginas/Llamadas";

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
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/chat" element={<Chat />} />
        <Route path="/servicios/llamada" element={<Llamadas />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
