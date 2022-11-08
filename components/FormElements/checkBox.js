
export default function Checkbox(props) {
    return (
        <label className="switch">
            <input type="checkbox" {...props} />
            <span className="slider round"></span>
        </label>
    )
}
