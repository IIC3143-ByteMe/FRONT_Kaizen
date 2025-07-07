import "../styles/HabitTemplate.css"
import Button from "./Button/Button";
import type { HabitTemplateComponentType } from "../lib/types"

interface Props {
    template: HabitTemplateComponentType;
}

export default function HabitTemplateComponent({ template }: Props) { 
    return (
    <div className="container">
        <div>
            <p className="habit-name">{template.habitName}</p>
            <Button variant="primary">Editar</Button>
            <Button variant="secondary">Eliminar</Button>
        </div>
        <div>
            <p className="habit-description">{template.habitDescription}</p>
        </div>
    </div>
    );
}
