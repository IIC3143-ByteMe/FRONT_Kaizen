import React from "react";
import "../styles/CreateHabitTemplate.css"

export interface Option<T extends string = string> {
    label: string;
    value: T;
}

interface DropdownProps<T extends string | string[]> {
    id?: string;
    label?: string;
    options?: Option[];
    value: T;
    onChange: (value: T) => void;
    multiple?: boolean;
}

export default function Dropdown<T extends string | string[]>({
    id = "",
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
        <div className="input-item">
        <label className="label-text">
            {label && <span className="font-medium">{label}</span>}

            <select
            className="select-item"
            value={value as unknown as string | string[]}
            onChange={handleChange}
            multiple={multiple}
            id={id ? id : undefined}
            size={multiple ? Math.min(options.length, 8) : undefined}
            > 

            {!multiple && (
            <option value="" disabled hidden>
                Selecciona una opción
            </option>
            )}

            {options?.map((o) => (
                <option key={o.value} value={o.value} style={id === "icon-color" ? {color: o.value} : undefined}>
                    {o.label}
                </option>
            ))}
            </select>
        </label>
        </div>
    );
}