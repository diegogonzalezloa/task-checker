function Title({ text, isCompleted }) {
    return (
        <p
            style={{
                textDecoration: isCompleted ? "line-through" : "none",
            }}
            className="mb-2.5 font-semibold"
        >
            {text}
        </p>
    );
}

export default Title;
