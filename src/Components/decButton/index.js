import { Component } from "react";

class Dec extends Component{
    
    render(){
        return(
            <button disabled={this.props.disabled} onClick={this.props.onclick} className="decButton">DEC</button>
        )
    }
}
export default Dec;