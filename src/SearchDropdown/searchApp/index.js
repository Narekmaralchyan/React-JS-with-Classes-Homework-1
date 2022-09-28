import {Component} from 'react'
import Input from '../Input';
import data from '../data.json'
import Result from '../Result';
import './styleApp.css'

class SearchApp extends Component{
    constructor(){
        super()
        
        this.state = {
            hide : true,
            data : data,
        }
    }
    searchInput = (value)=>{
        this.setState({
            data: data.filter(item=>item.name.toUpperCase().includes(value.toUpperCase()))
        })
        
    }
    hideResult = ()=>{
        this.setState({
            hide : !this.state.hide,
        })
    }
    
    render(){
        return(
            <div className='SearchApp'>
                <Input hideResult= {this.hideResult} searchInput={this.searchInput} />
                {this.state.hide ? <Result data={this.state.data} />:"type for search"}
            </div>
        )
    }
}


export default SearchApp;