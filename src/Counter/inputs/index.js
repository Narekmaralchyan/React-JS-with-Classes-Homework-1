import { Component } from "react";

class Inputs extends Component{
    constructor(){
        super();
        this.state = {
            maxValue : "infinity",
            minValue : "infinity",
            step:1,
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
    handleStep =(e)=>{
        this.setState({
            step:e.target.value
        })
    }
    setValues = ()=>{
        this.props.defineMaxMinStepValues(this.state.maxValue , this.state.minValue ,this.state.step)
    }
    render(){
        return(
            <div className="Inputs">
                <div className="valueInput">
                    <h3>type max value</h3>
                    <input placeholder="max value" onChange={this.handleMaxValue} value={this.state.maxValue} type="number"/>
                </div>
                <div className="valueInput">
                    <h3>type min value</h3>
                    <input placeholder="min value" onChange={this.handleMinValue} value={this.state.minValue} type="number"/>
                </div>
                <div className="valueInput">
                    <h3>input step</h3>
                    <input value={this.state.step} onChange={this.handleStep} placeholder=" type step" type="number" />
                </div>
                <button onClick={this.setValues}>Set Values</button>
            </div>
        )
    }
}

export default Inputs;