import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/HabitTemplates.css"
import Button from "../components/Button/Button";
import { useState, useEffect } from "react";
import type { HabitTemplateComponentType } from "../lib/types";
import HabitTemplateComponent from "../components/HabitTemplateComponent";
import { getToken } from "../lib/auth";

export default function HabitTemplates() {

  const [templates, setTemplates] = useState<HabitTemplateComponentType[] | undefined>(undefined);  // hacer props de habits
  const [isLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch(`${apiUrl}/habits/templates`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(getToken() ? {"Authorization": `Bearer ${getToken()}`} : {})
          }
        });
        if (!res.ok) throw new Error("Failed to fetch.")
          
          const data: HabitTemplateComponentType[] = await res.json();
          console.log("Server response: ", data);

        if (data.length === 0){
          console.warn("No hay templates creados")
        } else {
        setTemplates(data);
        }
      } catch (error) {
          console.error(error);
          setIsError(true);
      }
    }

    fetchTemplates();
  }, [apiUrl])

  return (  
    <div className="container">
      <Sidebar />
        <p className="title">Plantillas</p>
        <p className="bajada">En este lugar, puedes crear plantillas para hábitos, los que después pueden importar directamente los usuarios, y usarlos tal como los configures aquí</p>

        <Button variant="primary">
        <Link className="in-button-link" to="/create-template">Agregar plantilla</Link>
        </Button>

        {isError && <p style={{ color: "red" }}>Error al cargar las plantillas.</p>}
        {isLoading && !isError && <p>Cargando…</p>}

        <div className="tus-plantillas-container">
          <p className="title">Tus Plantillas</p>
                {/* Lista de plantillas */}
          {templates?.length ? (
            templates.map((template) => <HabitTemplateComponent key={template.id} template={template}/>)
          ) : (
            !isLoading && <p>Aún no has creado plantillas.</p>
          )}
        </div>
    </div>
  );
}