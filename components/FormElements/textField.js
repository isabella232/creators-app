

export default function TextField({ label, id, className = "", ...rest }) {

    return (
        <div className="flex flex-col w-full">
            <label for={id}>{label}</label>
            <input id={id} {...rest} className={`bg-container-interactive-background rounded-8 h-10 ${className}`} />
        </div >
    )
}