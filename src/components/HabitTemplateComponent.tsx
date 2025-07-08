import "../styles/HabitTemplate.css"
import Button from "./Button/Button";
import type { HabitTemplateComponentType } from "../lib/types"

interface Props {
    template: HabitTemplateComponentType;
    deleteFunction: () => void;
}

export default function HabitTemplateComponent({ template, deleteFunction }: Props) { 
    return (
    <div className="habit-container">
        <div className="name-and-buttons-container">
            <p className="habit-name">{template.title}</p>
            <Button variant="primary">Editar</Button>
            <Button variant="secondary"onClick={deleteFunction}>Eliminar</Button>
        </div>
        <div className="description-container">
            <p className="habit-description">{template.description}</p>
        </div>
    </div>
    );
}
