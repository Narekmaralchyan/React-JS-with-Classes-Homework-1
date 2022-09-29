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
    componentDidMount(){
        document.addEventListener("click",(e)=>{
           if(!e.target.classList.contains("resultClass") && !e.target.classList.contains("inputValue")){
                console.log("set false"); // աշխատում ա 2 անգամ
                this.setState({
                    hide:false,
                })
            }
            else {
                console.log("set true");  // աշխատում ա 8 անգամ
                this.setState({
                    hide : true,
                })
            }
            
        })
    }
    searchInput = (value)=>{
        this.setState({
            data: data.filter(item=>item.name.toUpperCase().includes(value.toUpperCase()))
        })
        
    }
    
    render(){
        return(
            <div className='SearchApp'>
                <Input searchInput={this.searchInput} />
                {this.state.hide ? <Result data={this.state.data} />:"type for search"}
            </div>
        )
    }
}


export default SearchApp;