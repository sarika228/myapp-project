// import { render } from "@testing-library/react";
import React,{Component} from "react"
class Practice extends React.Component{
    constructor(props){
        super(props);
        this.state={msg:"welcome to react"}
    };
    this.updateSetState=this.updateSetState.bind(this);
}
updateSetState(){
    this.setState({msg:"welcome to development"})
}
render(){
    return(
        <div>
            <h1>{this.state.msg}</h1>
            <button onClick={this.updateSetState}> SET STATE</button>
        </div>
    );
}
}
export default Practice