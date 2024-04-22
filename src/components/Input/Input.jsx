import "./styles.css";

function Input({ name, type, placeholder, label, onImputChange }) {
  return (
    <div className="input-component-container">
      <label className="input-component-label">{label}</label>
      <input
        className="input-component"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange = {onImputChange}
      />
    </div>
  );
}

export default Input;
