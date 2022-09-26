import { Component } from "react";
import Add from "../addButton";
import Dec from "../decButton";
import Inputs from "../inputs";

class Counter extends Component{
    constructor(){
        super();
        this.state ={
            value:10,
            maxValue:"",
            minValue:""
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
    defineMaxMinValues = (max,min)=>{
        this.setState({
            maxValue:max,
            minValue:min,
        })

        if(max && this.state.value > max){
            this.setState({
                value :+max,
            })
        }
        else if (min && this.state.value < min){
            this.setState({
                value :min,
            })
        }
    }

    render(){
        return(
            <div className="Counter">
                <Inputs defineMaxMinValues={this.defineMaxMinValues} />
                <Add disabled={ this.state.value == this.state.maxValue && this.state.maxValue }  onclick={this.addValue} />
                <h1>{this.state.value}</h1>
                <Dec disabled={this.state.value == this.state.minValue && this.state.minValue } onclick={this.decValue}/>
            </div>
        )
    }
}

export default Counter;