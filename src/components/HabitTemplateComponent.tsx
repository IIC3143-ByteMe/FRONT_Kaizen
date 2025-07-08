import "../styles/HabitTemplate.css"
import Button from "./Button/Button";
import type { HabitTemplateComponentType } from "../lib/types"

interface Props {
    template: HabitTemplateComponentType;
}

export default function HabitTemplateComponent({ template }: Props) { 
    return (
    <div className="habit-container">
        <div className="name-and-buttons-container">
            <p className="habit-name">{template.title}</p>
            <Button variant="primary">Editar</Button>
            <Button variant="secondary">Eliminar</Button>
        </div>
        <div className="description-container">
            <p className="habit-description">{template.description}</p>
        </div>
    </div>
    );
}
