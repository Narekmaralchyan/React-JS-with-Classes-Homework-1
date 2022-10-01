import { Component } from "react";
import CountryItem from "../countryItem";
import './styleResult.css'

class Result extends Component{
   
    render(){
        return(
            <div className= {this.props.hideclass + "show resultClass"}>
                {this.props.data.map(item=>{
                    return <CountryItem 
                            selectCountry={this.props.selectCountry} 
                            key={item.name} 
                            name={item.name} 
                            flag={item.img}/>
                })}
            </div>
        )
    }
}
export default Result;