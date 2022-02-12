import React from "react"

function Student(props) {
    // const studentList = students.map(student => <Student student={student}></Student>)
    return (
        <div>
            <h5>My name is {props.student.name}. 
            I am {props.student.age} from {props.student.country}</h5>
        </div>
    )
}

export default Student