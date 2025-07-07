import '../styles/School.css'
import Field from './Field.jsx'
export default function School({data, editMode, handleChange, children}){
    return(
        <li>
            <Field label = "Name" type = "text" value = {data.name} editMode = {editMode} handleChange = {(val)=>{handleChange(val, "name")}}></Field>
            {!editMode&&<span>, </span>}
            <Field label = "Study" type = "text" value = {data.study} editMode = {editMode} handleChange = {(val)=>{handleChange(val, "study")}}></Field>
            <Field label = "End Date" type = "month" value = {data.endDate} editMode = {editMode} handleChange = {(val)=>{handleChange(val, "endDate")}}></Field>
            {!editMode &&<span> to </span>}
            <Field label = "Start Date" type = "month" value = {data.startDate} editMode = {editMode} handleChange = {(val)=>{handleChange(val, "startDate")}}></Field>
            
            
            {children}
        </li>
    )
}