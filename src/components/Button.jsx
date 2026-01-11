function Button({ className, content, onClick, type }) {
    return (
        <button
            className={`w-max h-max ${className} rounded-lg cursor-pointer animate-all duration-50 easy-in-out`}
            onClick={onClick}
            type={type}
        >
            {content}
        </button>
    );
}

export default Button;
