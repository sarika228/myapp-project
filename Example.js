import React,{useState}from "react";

function InitialValue(){
    console.log("function called");
    return 0;
}
function Name(){
    const [name, setName]=useState("sarika");
    const [flag,setFlag]=useState(false);
    const [steps,setSteps]=useState(InitialValue());
    const [names,setNames]=useState([]);
    function changeName(){
        console.log("clicked");
        return setFlag(!flag);
    }
    function Increment(){
        return setSteps(steps+1);
        
    }
    function Decrement(){
        return setSteps(steps-1);
    }
    function AddNames(e){
        e.preventDefault();
        setNames([...names,{id:names.length,name}])
        setName("");
    }
    return (
        <center>
        <div className="Name">
            <div>Hello,{flag?name:""}</div>
            <button onClick={changeName}>Click Me</button>
            <hr></hr>
            <button onClick={Increment}>+</button>
            <div>{steps}</div>
            <button onClick={Decrement}>-</button>
            <hr></hr>
            <form onSubmit={AddNames}>
                <input type="text" value={name} placeholder="add names" 
                onChange={(e)=>setName(e.target.value)}></input>
                <button>Submit</button>
            </form>
            <hr></hr>
            <ul>
                {names.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
        </center>
    );
}
export default Name;