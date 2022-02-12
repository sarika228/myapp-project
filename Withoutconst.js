import React, { Component } from 'react'

class Withoutconst extends Component {
    constructor(props){
        super(props)
        this.state={message:"welcom to bellary",opt:this.props}
    }
    // state={message:"welcom to bellary",opt:true}
    update(){
        this.setState({message:"Thankyou for visiting",opt:!this.state.opt})
    }
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={()=>this.update()}>{this.state.opt?"Hi":"Bye"}</button>
            </div>
        )
    }
}

export default Withoutconst
