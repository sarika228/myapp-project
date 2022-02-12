import React from "react"

function NameList(){
    // const students=['Solace', 'Onyx', 'Trust', 'Praise']
    // return(
    //     <div>
    //     {
    //     students.map(student=><h3>{student}</h3>)
    //     }
    //     </div>   
    // )
    const students = ['Solace', 'Onyx', 'Trust', 'Praise']
    const studentList = students.map(student => <h2>{student}</h2>)
    return (
        <div>{studentList} </div>
    )

}
export default NameList;