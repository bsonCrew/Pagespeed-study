import {ChangeEvent} from "react";

type InputProps = {
    label: string;
    placeholder: string;
    type: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({label, placeholder, type, name, value, onChange}: InputProps) {
    return (
        <div>
            <label htmlFor={label} className="font-medium leading-6">
                {label}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    id={label}
                    placeholder={placeholder}
                    className="input input-bordered w-full"
                />
            </div>
        </div>
    )
}