import React from "react"
import Student from "./Student"

function NameList(){
    const students=[{
        id: 1,
        name: 'Jadon',
        age: 16,
        country: 'Canada'
    },
    {
        id: 2,
        name: 'Macmills',
        age: 13,
        country: 'Nigeria'
    },
    {
        id: 3,
        name: 'Kumar',
        age: 24,
        country: 'India'
    }]
    // const studentList=students.map(student=><h4>My name is {student.name}.I am {student.age} From {student.country}</h4>)
    const studentList=students.map((student,index)=><Student key={index} student={student}></Student>)
    return(
        <div>{studentList}</div>
    )
}
export default NameList;