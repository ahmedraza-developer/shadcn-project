import { useId } from "react";
const Textarea = ({
    lable,
    textarea,
    name,
    placeholder,
    classes
}) => {
    const id = useId()
    return (
        <div className="relative">
            {
                lable && <label htmlFor={id} className="text-white font-bold text-base block mt-4">{lable}</label>
            }
            <textarea name={name} id={id} placeholder={placeholder} className={`${classes} bg-transparent border-b w-full text-sm font-bold pt-4 pb-6 outline-none resize-none`}>{textarea}</textarea>
        </div>
    )
}

export default Textarea;