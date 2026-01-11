function InputTitle({ title, handleChange }) {
    return (
        <div>
            <label>
                Title <span>*</span>
            </label>
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Ex. Go shopping"
            />
        </div>
    );
}

export default InputTitle;
