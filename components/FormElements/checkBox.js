
export default function Checkbox(props) {
    return (
        <label class="switch">
            <input type="checkbox" {...props} />
            <span class="slider round"></span>
        </label>
    )
}
