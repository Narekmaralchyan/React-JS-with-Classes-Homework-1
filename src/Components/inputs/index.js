import { Component } from "react";

class Inputs extends Component{
    constructor(){
        super();
        this.state = {
            maxValue : "",
            minValue : "",
        }
    }
    handleMaxValue = (e)=>{
        this.setState({
            maxValue : e.target.value,
        })
    }
    handleMinValue = (e)=>{
        this.setState({
            minValue : e.target.value,
        })
    }
    setValues = ()=>{
        this.props.defineMaxMinValues(this.state.maxValue , this.state.minValue)
    }
    render(){
        return(
            <div className="Inputs">
                <input placeholder="max value" onChange={this.handleMaxValue} value={this.state.maxValue} type="number"/>
                <input placeholder="min value" onChange={this.handleMinValue} value={this.state.minValue} type="number"/>
                <button onClick={this.setValues}>Set Values</button>
            </div>
        )
    }
}

export default Inputs;