function Checkbox({ type, onChange }) {
    return (
        <input
            type="checkbox"
            checked={type === "active" ? false : true}
            onChange={onChange}
            className="w-4.5 h-4.5 cursor-pointer"
        />
    );
}

export default Checkbox;
