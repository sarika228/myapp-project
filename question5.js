import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    // incrementCount(){
    //     this.setState((previousState) => ({
    //         count: previousState.count + 1
    //     }))
    // }
    incrementCount(){
        this.setState({
            count: this.state.count + 1
        },
        () => {
            //executes sync
            console.log(this.state.count)
        }
        )
        //executes async
        console.log(this.state.count)
    //     console.log("****************")
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count)
        // console.log("*************")
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)
    }
    render() {
        return (
            <div>
                Current Count: {this.state.count} <br />
                <button onClick={() => this.incrementCount()}>
                    Increment
                </button>
                
            </div>
        )
    }
}

export default Counter
