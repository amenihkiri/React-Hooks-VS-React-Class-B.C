import React, { Component } from 'react';


class BasedClass extends Component {

state={
    counter:1000,
    
}
 
handleClickInc=()=>{
    this.setState({
        counter:this.state.counter + 1
    })
}
handleClickDec=()=>{
    this.setState({
        counter:this.state.counter - 1
    })
}

    render() {
        return (
            <div style={{backgroundColor:"lightblue" ,width:"50%",textAlign:"center"}}>
                <h1>React Class Based Component</h1>
                 <button onClick={this.handleClickDec}>-</button>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClickInc}>+</button>
            </div>
        )
    }
}
export default BasedClass