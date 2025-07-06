import { useState } from "react";
import Dropdown from "../components/Dropdown";
import type { Option } from "../components/Dropdown";
import axios from "axios";


const apiUrl = import.meta.env.VITE_API_URL


// Lista de opciones (NOTA: de seguir escalando, importarlas de un archivo aparte para limpieza)

const iconOptions: Option[] = [
  'running', 'dumbbell', 'book', 'brain', 'bed', 'users', 
  'piggy-bank', 'paint-brush', 'plane', 'apple-alt', 
  'water', 'language', 'power-off', 'utensils', 'heart', 
  'music', 'code', 'coffee', 'pen', 'sun', 'moon', 
  'bicycle', 'medkit', 'graduation-cap', 'leaf'
].map((o) => ({label: String(o), value: String(o)}));

// TODO: para mejor legibilidad, label debería cambiar al ser el nombre del color
// TASK: probar en color picker y definir label de color al ojo
const iconColorOptions: Option[] = [
  '#A4B1FF', '#FFB6A4', '#A4FFDA', '#FFC8A4', '#A4D6FF', 
  '#D1A4FF', '#FFB4A4', '#A4FFB1', '#FFC5A4', '#A4FFF7',
  '#FFD84A', '#FF7070', '#70FF94', '#70C5FF', '#E870FF',
  '#B1B1B1', '#FFAA55', '#5E7CFF', '#55BDFF', '#FF55BD'
].map((o) => ({label: String(o), value: String(o)}));

// Poner el icono aquí altiro
const habitGroupsOptions: Option[] = [
    'Healthy', 'Fitness', 'Mental Health', 'Productivity',
    'Sleep', 'Social', 'Finance', 'Hobbies', 'Reading', 'Travel'
].map((o) => ({label: String(o), value: String(o)}))

const habitTypeOptions: Option[] = [
    'Build', 'Quit'
].map((o) => ({label: String(o), value: String(o)}))

const goalValueUnitOptions: Option[] = [
    {label: 'veces', value: 'times'},
    {label: 'minutos', value: 'minutes'},
    {label: 'horas', value: 'hours'},
    {label: 'pasos', value: 'steps'},
    {label: 'ml', value: 'ml'},
    {label: 'km', value: 'km'},
    {label: 'gr', value: 'gr'}, 
]

// const taskDaysOptions: Option<string[]>[] = [
//     {label: 'Todos los días', value: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
//     {label: 'Durante la semana', value: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']},
//     {label: 'Durante el fin de semana', value: ['Sat', 'Sun']},
//     {label: 'Lunes', value: ['Mon']},
//     {label: 'Martes', value: ['Tue']},
//     {label: 'Miércoles', value: ['Wed']},
//     {label: 'Jueves', value: ['Thu']},
//     {label: 'Viernes', value: ['Fri']},
//     {label: 'Sábado', value: ['Sat']},
//     {label: 'Domingo', value: ['Sun']},
// ]

const taskDaysOptions: Option[] = [
    {label: "Lunes", value: "Mon"},
    {label: "Martes", value: "Tue"},
    {label: "Miércoles", value: "Wed"},
    {label: "Jueves", value: "Thu"},
    {label: "Viernes", value: "Fri"},
    {label: "Sábado", value: "Sat"},
    {label: "Domingo", value: "Sun"},
    
]

const ikigaiCategoryOptions: Option[] = [
    'Misión', 'Pasión', 'Vocación', 'Profesión'
].map((o) => ({label: String(o), value: String(o)}))

const goalPeriodOptions: Option[] = [
    {label: "Diariamente", value: "daily"}
]
export default function CreateHabitTemplate() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [iconColor, setIconColor] = useState('');
    const [grupo, setGrupo] = useState('');
    const [type, setType] = useState('');
    const [goalPeriod, setGoalPeriod] = useState('');
    const [goalValue, setGoalValue] = useState('');
    const [goalValueUnit, setGoalValueUnit] = useState('');
    const [taskDays, setTaskDays] = useState<string[]>([]);
    const [reminders, setReminders] = useState("8:30");
    const [ikigaiCategory, setIkigaiCategory] = useState('');

    // const [published, setPublished] = useState(false);
    // NOTE: por lógica del flujo, published debe setearse a la hora de mandar la request, se deja comentado por si es que eventualmente se quiere cambiar el flujo

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        const data = {
            title,
            description,
            icon,
            iconColor,
            grupo,
            type,
            goalPeriod,
            goalValue,
            goalValueUnit,
            taskDays,
            reminders,
            ikigaiCategory,
            published: true
        };

        console.log("Enviando datos: ", data);
        await axios.post(`${apiUrl}/habits/templates`, data);

    //    fetch(`${API_URL}/habits/templates`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify([data])
    //    })

    //    .then((response) => response.json())
    //    .then((data) => {
    //     console.log("Respuesta del servidor:", data)
    //    })
    //    .catch((error) => {
    //     console.error("Error al enviar los datos:", error)
    //    });
    }

    return(
        <>
        <main className="mx-auto max-w-lg p-4">
            {/* <h1 className="text-2xl font-semibold mb-4">Crear Template</h1> */}
            <h2 className="title">Crear Template</h2>

             <form onSubmit={handleSubmit} className="flex-col space-y-6">

                <div>
                    <label>Titulo del hábito plantilla</label>
                    <input type="text"
                    value={title}
                    onChange={(t) => setTitle(t.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                <div>
                    <label>Descripción</label>
                    <input type="text"
                    value={description}
                    onChange={(d) => setDescription(d.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                <div>
                    <Dropdown 
                        label="Ícono del hábito"
                        options={iconOptions}
                        value={icon}
                        onChange={setIcon}
                    />
                </div>

                <div>
                    <Dropdown
                        label="Color del ícono"
                        options={iconColorOptions}
                        value={iconColor}
                        onChange={setIconColor}
                    />
                </div>

                <div>
                    <Dropdown
                    label="Grupo general del hábito"
                    options={habitGroupsOptions}
                    value={grupo}
                    onChange={setGrupo}
                    />
                </div>

                <div>
                    <Dropdown
                    label="Tipo de hábito"
                    options={habitTypeOptions}
                    value={type}
                    onChange={setType}
                    />
                </div>

                {/* Periodo meta */}
                <Dropdown
                label="Cada cuánto se debe cumplir el hábito"
                options={goalPeriodOptions}
                value={goalPeriod}
                onChange={setGoalPeriod}
                />

                <div>
                    <label className="block mb-1">Cantidad de la meta</label>
                    <input
                        type="number"
                        value={goalValue}
                        onChange={(g) => Number(setGoalValue(g.target.value))}
                        className="w-full border rounded px-3 py-2"
                        min={1}
                    />
                </div>

                <Dropdown
                label="Unidad de medida del hábito"
                options={goalValueUnitOptions}
                value={goalValueUnit}
                onChange={setGoalValueUnit}
                />

                <Dropdown
                label="Dias a realizar el hábito"
                multiple
                options={taskDaysOptions}
                value={taskDays}
                onChange={setTaskDays}
                />

                <div>
                    <p>Hora para el recordatorio</p>
                    <input type="time"
                    value={reminders}
                    onChange={(t) => setReminders(t.target.value)}
                    className="w-fill border rounded px-3 py-2"
                    step={60} 
                    />
                </div>

                <Dropdown
                label="Categoría Ikigai del hábito"
                options={ikigaiCategoryOptions}
                value={ikigaiCategory}
                onChange={setIkigaiCategory}
                />

                <button
                    type="submit"
                    className="primary-button"
                >
                    Guardar
                </button>
             </form>
        </main>
        </>
    )
}