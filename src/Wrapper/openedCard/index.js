import { Component } from "react";

class OpenedCard extends Component{
    constructor(){
        super()
    }
    componentWillUnmount(){
        this.props.cardUnmountCounter(this.props.value)
    }
    render(){
        return(
            <div className="card">
            {this.props.value}
            <button onClick={this.props.handleFlag} className="closeBtn">
              X
            </button>
          </div>
        )
    }
}
export default OpenedCard;