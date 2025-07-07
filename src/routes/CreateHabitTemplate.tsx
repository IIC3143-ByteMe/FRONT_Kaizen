import { useState } from "react";
import Dropdown from "../components/Dropdown";
import type { Option } from "../components/Dropdown";
import Sidebar from "../components/Sidebar";
import { getToken } from "../lib/auth";
import "../styles/CreateHabitTemplate.css"
import Button from "../components/Button/Button";


const apiUrl = import.meta.env.VITE_API_URL

// NOTE: para futuras releases, implementar un componente como el IconSelector de mobile, el cual es más visual
// Para la release v0.1 del panel de administradores, esta feature no fue considerada por un tradeoff de tiempo-calidad
const iconOptions: Option[] = [
    {label: "Correr", value: "running"},
    {label: "Mancuerna", value: "dumbbell"},
    {label: "Libro", value: "book"},
    {label: "Cerebro", value: "brain"},
    {label: "Cama", value: "bed"},
    {label: "Usuarios", value: "users"},
    {label: "Alcancía", value: "piggy-bank"},
    {label: "Pincel", value: "paint-brush"},
    {label: "Avión", value: "plane"},
    {label: "Manzana", value: "apple-alt"},
    {label: "Agua", value: "water"},
    {label: "Idioma", value: "language"},
    {label: "Boton apagado", value: "power-off"},
    {label: "Utensilios", value: "utensils"},
    {label: "Corazón", value: "heart"},
    {label: "Música", value: "music"},
    {label: "Código", value: "code"},
    {label: "Café", value: "coffee"},
    {label: "Lápiz", value: "pen"},
    {label: "Sol", value: "sun"},
    {label: "Luna", value: "moon"},
    {label: "Bicicleta", value: "bicycle"},
    {label: "Medicina", value: "medkit"},
    {label: "Graduación", value: "graduation-cap"},
    {label: "Hoja", value: "leaf"},
    
]

// TODO: para mejor legibilidad, label debería cambiar al ser el nombre del color
// TASK: probar en color picker y definir label de color al ojo
const colorOptions: Option[] = [
  '#A4B1FF', '#FFB6A4', '#A4FFDA', '#FFC8A4', '#A4D6FF', 
  '#D1A4FF', '#FFB4A4', '#A4FFB1', '#FFC5A4', '#A4FFF7',
  '#FFD84A', '#FF7070', '#70FF94', '#70C5FF', '#E870FF',
  '#B1B1B1', '#FFAA55', '#5E7CFF', '#55BDFF', '#FF55BD'
].map((o) => ({label: String(o), value: String(o)}));

// Poner el icono aquí altiro
const habitGroupsOptions: Option[] = [
    {label: "Salud", value: "Healthy"},
    {label: "Deporte", value: "Fitness"},
    {label: "Salud Mental", value: "Mental Health"},
    {label: "Productividad", value: "Productivity"},
    {label: "Sueño", value: "Sleep"},
    {label: "Social", value: "Social"},
    {label: "Finanzas", value: "Finance"},
    {label: "Hobbies", value: "Hobbies"},
    {label: "Lectura", value: "Reading"},
    {label: "Viajes", value: "Travel"},   
]

const habitTypeOptions: Option[] = [
    {label: "Hacer", value: "Build"},
    {label: "Dejar", value: "Quit"}
]

const goalTypeOptions: Option[] = [
    {label: "Deslizar", value: "slider"},
    {label: "Chequear", value: "boolean"}
]

const goalValueUnitOptions: Option[] = [
    {label: 'veces', value: 'times'},
    {label: 'minutos', value: 'minutes'},
    {label: 'horas', value: 'hours'},
    {label: 'pasos', value: 'steps'},
    {label: 'ml', value: 'ml'},
    {label: 'km', value: 'km'},
    {label: 'gr', value: 'gr'}, 
]

const taskDaysOptions: Option[] = [
    {label: "Lunes", value: "Mon"},
    {label: "Martes", value: "Tue"},
    {label: "Miércoles", value: "Wed"},
    {label: "Jueves", value: "Thu"},
    {label: "Viernes", value: "Fri"},
    {label: "Sábado", value: "Sat"},
    {label: "Domingo", value: "Sun"},
]

// const ikigaiCategoryOptions: Option[] = [
//     'Misión', 'Pasión', 'Vocación', 'Profesión'
// ].map((o) => ({label: String(o), value: String(o)}))

const goalPeriodOptions: Option[] = [
    {label: "Diariamente", value: "daily"}
    // NOTE: Para futuras releases de la aplicación se podría considerar hacer háitos con otros objetivos de tiempo
    // (tales como Semanalmente, Mensualmente, Personalizar, etc)
]

export default function CreateHabitTemplate() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState(''); // running
    const [color, setColor] = useState(''); // #A4B1FF
    const [group, setGroup] = useState(''); // Healthy
    const [habit_type, setHabitType] = useState('');
    const [goal_period, setGoalPeriod] = useState('');
    const [goal_value, setGoalValue] = useState('');
    const [goal_value_unit, setGoalValueUnit] = useState('');
    const [goal_type, setGoalType] = useState('');
    const [task_days, setTaskDays] = useState<string[]>(["Mon", "Tue", "Wed", "Thu", "Fri"]);
    const [reminders, setReminders] = useState<string[]>(["08:00"]);

    // const [ikigai_category, setIkigaiCategory] = useState('');

    // const [published, setPublished] = useState(false);
    // NOTE: por lógica del flujo, published debe setearse a la hora de mandar la request, se deja comentado por si es que eventualmente se quiere cambiar el flujo

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault()

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

            // ikigai_category,

            published: true
        };

        // NOTE: Descomenten cuando se quiera testear, pero no dejar en consola, no lo debería poder ver el cliente
        console.log("Enviando datos: ", data);

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
       })
       .catch((error) => {
        console.error("Error al enviar los datos:", error)
       });
    }

    return(
        <main className="container">
            <Sidebar />
            {/* <h1 className="text-2xl font-semibold mb-4">Crear Template</h1> */}
            <h2 className="title">Crear Plantilla</h2>

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
                    <Dropdown
                    label="Tipo de hábito"
                    options={goalTypeOptions}
                    value={goal_type}
                    onChange={setGoalType}/>
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