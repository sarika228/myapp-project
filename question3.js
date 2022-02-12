import React from "react"

class Message extends React.Component{
    constructor(){
        super();
        this.state={
            message:"Welcome Sarika"
        }
    }
    changeMessage(){
        this.setState({
            message:"thankyou for subscribing"
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.changeMessage()}>
                    Please subscribe
                </button>
            </div>

        )
    }
}
export default Message