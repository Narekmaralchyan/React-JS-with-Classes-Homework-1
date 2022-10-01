import {Component} from 'react'
import Input from '../Input';
import data from '../data.json'
import Result from '../Result';
import './styleApp.css'

class SearchApp extends Component{
    constructor(){
        super()
        
        this.state = {
            hide : false,
            data : data,
            selectedCountry :""
        }
    }
    searchInput = (value)=>{
        this.setState({
            data: data.filter(item=>item.name.toUpperCase().includes(value.toUpperCase()))
        })
        
    }
    clearSelected =()=>{
        this.setState({
            selectedCountry:""
        })
    }
    selectCountry = (value)=>{
        this.setState({
            selectedCountry:value,
        })
       
    }
    componentDidMount(){
        document.addEventListener("click", e => {
            if( !e.target.classList.contains("show") ){
                this.setState({
                    hide:true
                })
            }
            else if(e.target.classList.contains("inputValue")){
                this.setState({
                    hide:false
                })
            }
        })
    }
    
    render(){
        return(
            <div className='SearchApp show'>
                <Input 
                    clearSelected={this.clearSelected} 
                    selectedCountry={this.state.selectedCountry} 
                    searchInput={this.searchInput} 
                    />
                {this.state.hide ? "":<Result  data={this.state.data} selectCountry={this.selectCountry} />}
            </div>
        )
    }
}


export default SearchApp;