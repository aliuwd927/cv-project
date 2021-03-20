import React, { Component } from 'react'
import Header from './component/header';


class App extends Component{
  constructor(){
    super()
    
    this.state = {
      name: '',
      names:[]
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmitName = this.onSubmitName.bind(this)

  }

  handleChange = (e)=>{
    this.setState({
      nameF: e.target.value,
      nameL: e.target.value,
    })
  }

  onSubmitName = (e) =>{
    e.preventDefault();
    this.setState({
      nameF:'',
      nameL: '',
      names: this.state.names.concat(this.state.nameF + this.state.nameL)
    })
  }
    render(){

      const {nameF,nameL, names} = this.state;

      return (
        <div>
        <form onSubmit={this.onSubmitName}>
          <input 
          type="text"
          onChange ={this.handleChange} 
          value={nameF}
          />

          <input 
          type="text"
          onChange ={this.handleChange} 
          value={nameL}
          />  

          <button
          type='submit'
          >Add</button>
        </form>
          <Header names={names}/>
      </div>
      )

    }
  }

export default App