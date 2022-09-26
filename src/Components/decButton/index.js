import { Component } from "react";

class Dec extends Component{
    
    render(){
        return(
            <div className="borderValue">
              <button disabled={this.props.disabled} onClick={this.props.onclick} className="decButton">DEC</button>
              <h3>MIN value-- {this.props.minValue}</h3>
            </div>
        )
    }
}
export default Dec;