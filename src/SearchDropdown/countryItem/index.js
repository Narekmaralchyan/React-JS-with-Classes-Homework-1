import { Component } from "react";

class CountryItem extends Component{
    render(){
        return(
            <div className="CountryItem">
                <img className="flag" src={this.props.flag} alt={this.props.name}/>
                <span className="countryName">{this.props.name}</span>
            </div>
        )
    }
}

export default CountryItem
