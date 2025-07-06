export interface Option<T extends string = string> {
    label: string;
    value: T;
}

// TODO: Como futura nota de desarrollo, hay que considerar el escenario de que 
// al escalar la cantidad de atributos en un dropdown, el atributo value tenga que
// ser de un tipo distinto a string o string[], probablemente uno más versátil para valores que 
// no se puedan interpretar como strings (como el caso de "icon"). Esto se podría hacer extendiendo T

interface DropdownProps<T extends string | string[]> {
    label?: string;
    options?: Option[];
    value: T;
    onChange: (value: T) => void;
    multiple?: boolean;
}

// sacado de las plantillas de Dropdown de la página de React
export default function Dropdown<T extends string | string[]>({
    label,
    options = [],
    value,
    onChange,
    multiple = false,
}: DropdownProps<T>) {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (multiple) {
            const selected = Array.from(e.target.selectedOptions, (o) => o.value) as T;
            onChange(selected);
        } else {
            onChange(e.target.value as T);
        }
    };

    return (
        <label className="flex flex-col gap-1">
            {label && <span className="font-medium">{label}</span>}

            <select
            // TODO: cambiar directamente en este componente el estilo al de la app
            className="border border-gray-300 rounded-md p-2"
            value={value as unknown as string | string[]}
            onChange={handleChange}
            multiple={multiple}
            > 

            {!multiple && (
            <option value="" disabled hidden>
                Selecciona una opción
            </option>
            )}

            {options?.map((o) => (
                <option key={o.value} value={o.value}>
                    {o.label}
                </option>
            ))}
            </select>
        </label>
    );
}