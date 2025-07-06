export default function CreateHabitTemplate() {

    // ejemplos 
    // const [name, setName] = useState('');
    // const [goal, setGoal] = useState('');

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        // const data = {
        //     name,
        //     goal,
        // };

        // fetch(api url)
    }

    return(
        <>
            <h1 className="text-2xl font-semibold mb-4">Crear template de un hábito</h1>

             <form onSubmit={handleSubmit} className="space-y-4">

                {/*  titulo */}
                <div>
                    <label>Titulo del habito plantilla</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                {/* descripcion */}
                <div>
                    <label>Descripcion</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                {/* icono ???  */}
                <div>
                    <label>Ícono</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                {/* Color */}
                <div>
                    <label>Color ícono</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                {/* Grupo */}
                <div>
                    <label>Grupo</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                {/* Tipo */}
                <div>
                    <label>Tipo</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                {/* Periodo meta */}
                 <div>
                    <label>Periodo de la meta</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                <div>
                    <label>Valor de la meta</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                <div>
                    <label>Unidad a medir</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                <div>
                    <label>Días</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                <div>
                    <label>Recordatorios</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

                <div>
                    <label>Categoría Ikigai</label>
                    <input type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className="w-fill border rounded px-3 py-2"/>
                </div>

             </form>
        </>
    )
}