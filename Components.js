import React, { Component } from 'react'

class Components extends Component {
    details=[{name:"sarika",age:20,skills:"python"},{name:"manju",age:20,skills:"python,react"}]
    // result=details.map((a)=>{<h2>my name {a.name},age is{a.age},and i know {a.skills}</h2>}
    render() {
        // details=[{name:"sarika",age:20,skills:"python"},{name:"manju",age:20,skills:"python,react"}
        let result=details.map(deatail=><h2>I am{deatail.name}</h2>)
        return (
            <div>
                {result}
            </div>
        )
    }
}

export default Component
