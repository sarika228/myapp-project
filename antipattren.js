import React from "react";

function Names(){
    const names = ['Ralujah', 'Jeffrey', 'Jany', 'Adaoma']
    const nameList = names.map((name, index) => <h4 key={index}>{index} {name}</h4>)
    return(
        <div>{nameList}</div>
    )
}
export default Names
