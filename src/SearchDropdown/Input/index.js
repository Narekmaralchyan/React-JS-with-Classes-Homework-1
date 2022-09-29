import { Component } from "react";
import './styleInput.css'
class Input extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: ""
        }
    }
    handleInput = e => {
        
        this.props.searchInput(e.target.value);
        this.setState({ 
            inputValue: e.target.value
             })
    }
    render() {
        return (
            <input  placeholder="input country" className="inputValue" value={this.state.inputValue} onChange={this.handleInput} />
        )
    }
}
export default Input;