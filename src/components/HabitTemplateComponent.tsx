import "../styles/HabitTemplate.css"
import type { HabitTemplateComponentType } from "../lib/types"

interface Props {
    template: HabitTemplateComponentType;
}

export default function HabitTemplateComponent({ template}: Props) { 
    return (
    <div className="habit-container">
        <div className="name-and-buttons-container">
            <p className="habit-name">{template.title}</p>
        </div>
        <div className="description-container">
            <p className="habit-description">{template.description}</p>
        </div>
    </div>
    );
}
