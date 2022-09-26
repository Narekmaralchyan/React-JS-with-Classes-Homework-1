import { Component } from "react";
import Add from "../addButton";
import Dec from "../decButton";

class Counter extends Component{
    constructor(){
        super();
        this.state ={
            value:10,
            maxValue:20,
            minValue:0
        }
    }
    addValue= ()=>{
        this.setState({
            value: ++this.state.value,
        })
    }

    decValue = ()=>{
        this.setState({
            value: --this.state.value,
        })
    }

    render(){
        return(
            <div className="Counter">
                <Add disabled={this.state.value == this.state.maxValue} onclick={this.addValue} />
                <h1>{this.state.value}</h1>
                <Dec disabled={this.state.value == this.state.minValue} onclick={this.decValue}/>
            </div>
        )
    }
}

export default Counter;