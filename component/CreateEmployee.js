import React from "react"

function CreateEmployee(){
    return(
        <div>
            <lable for = "full-name" id = "full-name">Full Name</lable>
            <input type = "text" id = "full-name" class = "full-name" placeholder="write here"/>
            <label for = "dob" id = "dob">Date of Birth</label>
            <input type = "date" id = "dob" class = "dob"/>
            <label for = "salary" id = "salary">Salary</label>
            <input type = "number" id = "salary" class = "salary"/>
            <label for = "sex" id = "sex">Sex</label>
            <input type =  "radio" id = "sex" class = "sex"/>
        </div>
    )
}
export default CreateEmployee
