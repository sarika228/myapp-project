import { ReactComponent } from "*.svg";
import { render } from "@testing-library/react";
import React from "react";
class CComponent extends React.Component{
    state={
        message:"class component",
        time:new Date().toString(),
    };
    componentDidMount(){
        console.log("I am from Did Mount");
        this.interval=setInterval(this.showDate,1000);
    }
    componentDidUpdate(){
        console.log("I am from update");
    }
    componentWillUnmount(){
        console.log("I am from unmount");
        clearInterval(this.interval);
    }
    showDate =()=>{
        this.setState({time:new Date().toString()});
}

    render(){
        return(
            <div>{this.state.message}
            <div>{this.state.time}</div>

            </div>
            
        );
}