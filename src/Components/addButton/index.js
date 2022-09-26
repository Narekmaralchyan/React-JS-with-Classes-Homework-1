import { Component } from "react";

class Add extends Component{

    render(){
        return(
            <button disabled={this.props.disabled} onClick={this.props.onclick} className="addButton">ADD</button>
        )
    }
}

export default Add