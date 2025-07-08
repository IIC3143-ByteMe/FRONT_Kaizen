import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
// import type { Option } from "../components/Dropdown";
import Sidebar from "../components/Sidebar";
import { getToken } from "../lib/auth";
import "../styles/CreateHabitTemplate.css"
import Button from "../components/Button/Button";
import { iconOptions, colorOptions, habitGroupsOptions,
    habitTypeOptions, goalValueUnitOptions, 
    taskDaysOptions, goalPeriodOptions } from "../constants/habitOptions"

const apiUrl = import.meta.env.VITE_API_URL



export default function CreateHabitTemplate() {

    const [feedback, setFeedback] = useState<"" | "ok" | "error">("");

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [color, setColor] = useState('');
    const [group, setGroup] = useState('');
    const [habit_type, setHabitType] = useState('');
    const [goal_period, setGoalPeriod] = useState('');
    const [goal_value, setGoalValue] = useState('');
    const [goal_value_unit, setGoalValueUnit] = useState('');
    const [goal_type, setGoalType] = useState('');
    const [task_days, setTaskDays] = useState<string[]>(["Mon", "Tue", "Wed", "Thu", "Fri"]);
    const [reminders, setReminders] = useState<string[]>(["08:00"]);

    useEffect(() => {
        if (parseInt(goal_value) === 1) {
            setGoalType('Check');
        } else if (parseInt(goal_value) >= 2 && parseInt(goal_value) <= 5) {
            setGoalType('Sum');
        } else if (parseInt(goal_value) > 5) {
            setGoalType('Slide');
        }
    }, [goal_value]);

    function resetForm() {
        setTitle("");
        setDescription("");
        setIcon("");
        setColor("");
        setGroup("");
        setHabitType("");
        setGoalPeriod("");
        setGoalValue("");
        setGoalValueUnit("");
        setGoalType("");
        setTaskDays(["Mon", "Tue", "Wed", "Thu", "Fri"]);
        setReminders(["08:00"]);
    }

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        setFeedback("");

        const goal = {
            period: goal_period,
            type: goal_type,
            target: goal_value,
            unit: goal_value_unit
        }

        const data = {
            title,
            description,
            icon,
            color,
            group,
            type: habit_type,
            goal,
            task_days,
            reminders,
            published: true
        };

        // console.log("Enviando datos: ", data);

       fetch(`${apiUrl}/habits/templates`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(getToken() ? { "Authorization": `Bearer ${getToken()}` } : {})
        },
        body: JSON.stringify(data)
       })

       .then((response) => response.json())
       .then((data) => {
        console.log(JSON.stringify([data]))
        console.log("Respuesta del servidor:", data)

        setFeedback("ok");
        resetForm();

       })
       .catch((error) => {
        console.error("Error al enviar los datos:", error)
       });
    }

    return(
        <main className="container">
            <Sidebar />
            <h2 className="title">Crear Plantilla</h2>

            {feedback === "ok" && (
                <p className="success-message">Plantilla creada!</p>
            )}

            {feedback == "error" &&  (
                <p className="error-message">Hubo un error con la creación de la plantilla</p>
            )}

             <form onSubmit={handleSubmit} className="forms">

                <div className="input-item">
                    <label className="label-text">Titulo del hábito plantilla</label>
                    <input type="text"
                    value={title}
                    onChange={(t) => setTitle(t.target.value)}
                    className="label-item"
                    required
                    />
                </div>

                <div className="input-item">
                    <label className="label-text">Descripción del hábito</label>
                    <textarea
                    value={description}
                    onChange={(d) => setDescription(d.target.value)}
                    className="label-item"
                    id="descripcion"
                    rows={4}
                    required/>
                </div>

                <div className="input-item">
                    <Dropdown 
                        label="Ícono del hábito"
                        options={iconOptions}
                        value={icon}
                        onChange={setIcon}
                    />
                </div>

                <div className="input-item">
                    <Dropdown
                        label="Color del ícono"
                        options={colorOptions}
                        value={color}
                        onChange={setColor}
                        id="icon-color"
                    />
                </div>

                <div className="input-item">
                    <Dropdown
                    label="Grupo general del hábito"
                    options={habitGroupsOptions}
                    value={group}
                    onChange={setGroup}
                    />
                </div>

                <div className="input-item">
                    <Dropdown
                    label="Criterio de cumplido del hábito"
                    options={habitTypeOptions}
                    value={habit_type}
                    onChange={setHabitType}
                    />
                </div>

                <div className="input-item">
                    <Dropdown
                    label="Cada cuánto se debe cumplir el hábito"
                    options={goalPeriodOptions}
                    value={goal_period}
                    onChange={setGoalPeriod}
                    />
                </div>

                <div className="input-item">
                    <label className="label-text">Cantidad de la meta</label>
                    <input
                        type="number"
                        value={goal_value}
                        onChange={(g) => Number(setGoalValue(g.target.value))}
                        className="label-item"
                        min={1}
                        required
                    />
                </div>

                <div className="input-item">
                    <Dropdown
                    label="Unidad de medida del hábito"
                    options={goalValueUnitOptions}
                    value={goal_value_unit}
                    onChange={setGoalValueUnit}
                    />
                </div>

                <div className="input-item" id="taskdays">
                    <Dropdown
                    label="Días a realizar el hábito"
                    multiple
                    options={taskDaysOptions}
                    value={task_days}
                    onChange={setTaskDays}
                    id="multiple"
                    />
                </div>

                <div className="input-item">
                    <p className="label-text">Hora para el recordatorio</p>
                    <input type="time"
                    value={reminders[0] || ""}
                    onChange={(t) => setReminders([t.target.value])}
                    className="label-item"
                    step={60} 
                    required
                    />
                </div>

                <Button variant="primary">
                    Crear
                </Button>
             </form>
        </main>
    )
}