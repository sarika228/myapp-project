import React from "react"

class Increment extends React.Component{
    constructor(){
        super();
        this.state={number:0}
       
    }
    render(){
        return(
            <div className="center_div">
                <h3>{this.state.number}</h3>
                <button onClick={()=> this.setState({number:this.state.number+1})}>INCR</button>
            </div>
        )
    }
}

export default Increment
