import React,{useState} from 'react'

const Use = () => {
    const [count,setCount]=useState(0)
    return (
        <div>
            <center>
                <h1>{count}</h1>
                <button onClick={()=> setCount(count+1)}>Change</button>
            </center>
        </div>
    )
}

export default Use


