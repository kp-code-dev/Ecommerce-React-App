function Button({ title, onClick, disabled, type, className, id, icon }) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={className}
        id={id}
      >
        {icon && (
          <span className="btn-icon" style={{ color: "inherit" }}>
            {icon}
          </span>
        )}
        {title}
      </button>
    </>
  );
}

export default Button;
