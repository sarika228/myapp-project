import React, {useState}from 'react';
// import ReactDOM from "react-dom"


const UseState= () => {
    // const initialData=10;
    const [myNum,setMyNum]=useState(0);
    return (
        <center>
        <div className="center_div">
            <button onClick={()=> setMyNum(myNum+1)}>INCR</button>
            <p>{myNum}</p>
            <button onClick={()=> setMyNum(myNum-1)}>DCR</button>
        </div>
        </center>
    )
};

export default UseState;


