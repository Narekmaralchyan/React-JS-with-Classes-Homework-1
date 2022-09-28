import { Component } from "react";

class Info extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
            {this.props.list.map(item=>{
                return <div key={item.value} className="info">
                    Card {item.value} unmounted {item.count} times
                </div>
            })}
           </>
        )
    }
}
export default Info;