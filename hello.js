import React from "react"
class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"World"}
    }
    render(){
        return(
            <h3> Hello, {this.state.name}!</h3>
        );
    }
}
export default Hello