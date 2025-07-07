import '../styles/Section.css'
function Section({sectionName = "", name, children, editMode}){
    return(
        
        <div className = {sectionName + (editMode==true?" edit":" view")}>
            {sectionName!="bio"&&<h1>{name}</h1>}
            {sectionName=="bio"?children:
            <ul>
                {children}
            </ul>
            }
        </div>
    )
}
export default Section