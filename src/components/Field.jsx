import "../styles/Field.css";
export default function Field({
  label = "",
  type = "text",
  editMode,
  value,
  handleChange,
}) {
  return (
    <>
      {editMode == true ? (
        <div className = "field">
          <label htmlFor={label}>{label}:</label>
          <input
            placeholder = {label}
            id={label}
            type={type}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      ) : (
        <span>{value}</span>
      )}
    </>
  );
}
