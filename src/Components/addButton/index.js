import { Component } from "react";

class Add extends Component{

    render(){
        return(
            <div className="borderValue">
            <button disabled={this.props.disabled} onClick={this.props.onclick} className="addButton">ADD</button>
            <h3>Max value-- {this.props.maxValue}</h3>
            </div>
            
        )
    }
}

export default Add