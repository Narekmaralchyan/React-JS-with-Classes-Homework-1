import { Component } from "react";
import CountryItem from "../countryItem";
import './styleResult.css'

class Result extends Component{
    x = "resultClass "+this.props.hideclass
    render(){
        return(
            <div className={this.x}>
                {this.props.data.map(item=>{
                    return <CountryItem key={item.name} name={item.name} flag={item.img}/>
                })}
            </div>
        )
    }
}
export default Result;