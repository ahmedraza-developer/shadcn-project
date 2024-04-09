import { useId } from "react";
const Input = ({
    lable,
    type,
    name,
    placeholder,
    classes
}) => {
    const id = useId()
    return (
        <div className="relative">
            {lable && 
            <label htmlFor={id} className="text-white font-bold text-base block mt-4">{lable}</label>
            }
            <input type={type} name={name} id={id} placeholder={placeholder} required className={`${classes} bg-transparent border-b w-full text-sm font-bold pt-4 pb-2 outline-none`} />
        </div>
    )
}

export default Input;