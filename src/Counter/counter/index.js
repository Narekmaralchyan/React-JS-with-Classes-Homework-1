import { Component } from "react";
import Add from "../addButton";
import Dec from "../decButton";
import Inputs from "../inputs";
import './index.css'
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            value: +localStorage.getItem("value") || 0,
            maxValue: +localStorage.getItem("maxValue") || "infinity",
            minValue: +localStorage.getItem("minValue") || "infinity",
            step: +localStorage.getItem("step") || 1,
        }
    }
    componentDidUpdate() {
        localStorage.setItem("value", this.state.value.toString())
        localStorage.setItem("maxValue", this.state.maxValue.toString())
        localStorage.setItem("minValue", this.state.minValue.toString())
        localStorage.setItem("step", this.state.step.toString())
    }
    addValue = () => {

        if (this.state.maxValue == "infinity" || +this.state.value + +this.state.step < +this.state.maxValue) {
            this.setState({
                value: +this.state.value + +this.state.step,
            })
        }
        else if (+this.state.value + +this.state.step >= +this.state.maxValue) {
            this.setState({
                value: this.state.maxValue,
            })
        }
    }

    decValue = () => {
        if (this.state.minValue == "infinity" || +this.state.value - +this.state.step > +this.state.minValue) {
            this.setState({
                value: +this.state.value - +this.state.step,
            })
        }
        else if (+this.state.value - +this.state.step <= +this.state.minValue) {
            this.setState({
                value: this.state.minValue,
            })
        }
    }
    defineMaxMinStepValues = (max, min ,step) => {
        this.setState({
            maxValue: max || "infinity",
            minValue: min || "infinity",
            step: step || 1,
        })

        if (this.state.value > max) {
            this.setState({
                value: +max,
            })
        }
        else if (this.state.value < min) {
            this.setState({
                value: min,
            })
        }
    }
    reset = () => {
        if (this.state.minValue == "infinity") {
            this.setState({
                value: 0,
            })
        }
        else {
            this.setState({
                value: this.state.minValue,
            })
        }

    }
    render() {
        return (
            <div className="CounterApp">
                <Inputs defineMaxMinStepValues={this.defineMaxMinStepValues} />
                <button onClick={this.reset}>Reset</button>
                <div className="counter" >
                    <Add disabled={this.state.value == this.state.maxValue} maxValue={this.state.maxValue} onclick={this.addValue} />
                    <h1>{this.state.value}</h1>
                    <Dec disabled={this.state.value == this.state.minValue} minValue={this.state.minValue} onclick={this.decValue} />
                </div>

            </div>
        )
    }
}

export default Counter;