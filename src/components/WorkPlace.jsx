import Field from './Field.jsx'
import '../styles/WorkPlace.css'
export default function WorkPlace({data, editMode, handleChange, children}) {
  return (
    //name:'', position:'', dateStart:'', dateEnd:'', description:''
    <li>
      <Field
        label="Name"
        type="text"
        value={data.name}
        editMode={editMode}
        handleChange={(val) => {
          handleChange(val, "name");
        }}
      ></Field>
      {!editMode && <span>, </span>}
      <Field
        label="Position"
        type="text"
        value={data.position}
        editMode={editMode}
        handleChange={(val) => {
          handleChange(val, "position");
        }}
      ></Field>
      <Field
        label="End Date"
        type="month"
        value={data.endDate}
        editMode={editMode}
        handleChange={(val) => {
          handleChange(val, "endDate");
        }}
      ></Field>
      {!editMode && <span> to </span>}
      <Field
        label="Start Date"
        type="month"
        value={data.startDate}
        editMode={editMode}
        handleChange={(val) => {
          handleChange(val, "startDate");
        }}
      ></Field>
      <div></div>
      <Field
        label="Description"
        type="text"
        value={data.description}
        editMode={editMode}
        handleChange={(val) => {
          handleChange(val, "description");
        }}
      ></Field>
      {children}
    </li>
  );
}
