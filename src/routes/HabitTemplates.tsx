import { Link } from "react-router-dom";

export default function HabitTemplates() {
  return (  
  <>
    <div className="mt-0">
      <h1 className="title">Plantillas</h1>
    </div>
    <div>
      <p>En este lugar, puedes crear plantillas para hábitos, los que después pueden importar directamente los usuarios, y usarlos tal como los configures aquí</p>
      <Link to="/create-template">Agregar plantilla</Link>
      <p>(Aquí poner toda la lista de plantillas)</p>
    </div>
  </>
);
}