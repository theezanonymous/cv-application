import { useState } from "react";
import "../styles/Form.css";
import Section from "./Section.jsx";
import Field from "./Field.jsx";
import School from "./School.jsx";
import WorkPlace from "./WorkPlace.jsx";
import url from '../assets/pencil.svg'
import trash from '../assets/trash.svg'
import plus from '../assets/plus.svg'
export default function Form() {
  const [editMode, setEditMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    education: [],
    experience: [],
    skills: "",
    certifications: "",
  });
  return (
    <div className = {editMode?"editBody":"viewBody"}>
    <button
        className={editMode?"edit":"submit"}
        onClick={() => {
          setEditMode(!editMode);
        }}
      >
        <img src={url} alt="Edit" />
      </button>
    <div className = "form">
      <Section sectionName="bio" name="Bio" editMode={editMode}>
        <Field
          label="Name"
          type="text"
          editMode={editMode}
          value={formData.name}
          handleChange={(s) => {
            setFormData({ ...formData, name: s });
          }}
        ></Field>
        <Field
          label="Email"
          type="email"
          editMode={editMode}
          value={formData.email}
          handleChange={(s) => {
            setFormData({ ...formData, email: s });
          }}
        ></Field>
        <Field
          label="Phone Number"
          type="tel"
          editMode={editMode}
          value={formData.phoneNumber}
          handleChange={(s) => {
            setFormData({ ...formData, phoneNumber: s });
          }}
        ></Field>
      </Section>
      <Section sectionName="education" name="Education">
        {formData.education.map((school) => {
          //Figure out HandleChange function
          return (
            <>
              <School
                data={school}
                key={school.id}
                editMode={editMode}
                handleChange={(val, fieldName) => {
                  let newEducation = [...formData.education];
                  newEducation.forEach((currSchool) => {
                    if (currSchool.id == school.id) {
                      currSchool[fieldName] = val;
                    }
                  });

                  let newForm = { ...formData, education: newEducation };
                  setFormData(newForm);
                }}
              >
                <button
                  className="delete"
                  style={{ display: editMode ? "flex" : "none" }}
                  onClick={() => {
                    formData.education = formData.education.filter(
                      (curr) => curr.id != school.id
                    );
                    setFormData({ ...formData });
                  }}
                >
                    <img src={trash} alt="" />
                  Delete
                </button>
              </School>
            </>
          );
        })}
        <button
          className="add"
          style={{ display: editMode ? "flex" : "none" }}
          onClick={() => {
            formData.education.push({
              name: "",
              study: "",
              startDate: "",
              endDate: "",
              id: crypto.randomUUID(),
            });
            setFormData({ ...formData });
          }}
        >
          <img src={plus} alt="" />
          Add School
        </button>
      </Section>
      <Section sectionName="experience" name="Work">
        {formData.experience.map((workplace) => {
          //Figure out HandleChange function
          return (
            <>
              <WorkPlace
                data={workplace}
                key={workplace.id}
                editMode={editMode}
                handleChange={(val, fieldName) => {
                  let newExperience = [...formData.experience];
                  newExperience.forEach((currWorkPlace) => {
                    if (currWorkPlace.id == workplace.id) {
                      currWorkPlace[fieldName] = val;
                    }
                  });

                  let newForm = { ...formData, experience: newExperience };
                  setFormData(newForm);
                }}
              >
                <button
                  className="delete"
                  style={{ display: editMode ? "flex" : "none" }}
                  onClick={() => {
                    formData.experience = formData.experience.filter(
                      (curr) => curr.id != workplace.id
                    );
                    setFormData({ ...formData });
                  }}
                >
                  <img src={trash} alt="" />
                  Delete
                </button>
              </WorkPlace>
            </>
          );
        })}
        <button
          className="add"
          style={{ display: editMode ? "flex" : "none" }}
          onClick={() => {
            formData.experience.push({
              name: "",
              position: "",
              startDate: "",
              endDate: "",
              description: "",
              id: crypto.randomUUID(),
            });
            setFormData({ ...formData });
          }}
        >
            <img src={plus} alt="" />
          Add Experience
        </button>
      </Section>
      <Section sectionName = "skillsCertifs" name="Skills and Certifications">
        <Field
          label="Skills"
          type="text"
          editMode={editMode}
          value={formData.skills}
          handleChange={(s) => {
            setFormData({ ...formData, skills: s });
          }}
        ></Field>
        <div></div>
        <Field
          label="Certifications"
          type="text"
          editMode={editMode}
          value={formData.certifications}
          handleChange={(s) => {
            setFormData({ ...formData, certifications: s });
          }}
        ></Field>
      </Section>
      

    </div>
  </div>);
}
