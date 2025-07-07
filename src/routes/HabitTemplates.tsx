import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./HabitTemplates.css"
import { div } from "framer-motion/client";

export default function HabitTemplates() {
  return (  
    <div className="container">
      <div className="sidebar-container">
      <Sidebar />
      </div>
      <div className="everything-besides-the-sidebar">
        <p className="title">Plantillas</p>
        <p>En este lugar, puedes crear plantillas para hábitos, los que después pueden importar directamente los usuarios, y usarlos tal como los configures aquí</p>
        <Link to="/create-template">Agregar plantilla</Link>
        <p>(Aquí poner toda la lista de plantillas)</p>
      </div>
    </div>
    // <div className="container">
    //     <Sidebar />
    //     <div className="everything-besides-the-sidebar">
    //       <p className="title">Plantillas</p>
    //       <p>En este lugar, puedes crear plantillas para hábitos, los que después pueden importar directamente los usuarios, y usarlos tal como los configures aquí</p>
    //       <Link to="/create-template">Agregar plantilla</Link>
    //       <p>(Aquí poner toda la lista de plantillas)</p>
    //     </div>
    // </div>
);
}