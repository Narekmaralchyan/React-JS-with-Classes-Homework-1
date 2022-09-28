import { Component } from "react";

class HiddenCard extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="card_show">
                <button onClick={this.props.handleFlag} className='show_btn'>SHOW</button>
            </div>
        )
    }
}
export default HiddenCard;