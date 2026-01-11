function PriorityTag({ priority, colors }) {
    return (
        <p
            style={{
                color: colors.text,
                backgroundColor: colors.bg,
                border: `1px solid ${colors.border}`,
            }}
            className="w-max px-3 py-1 text-xs rounded-xl unselectable-text"
        >
            {priority}
        </p>
    );
}

export default PriorityTag;
