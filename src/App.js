import React, { Component } from 'react'
import Header from './component/header';


class App extends Component{
  constructor(){
    super()
    
    this.state = {
      name: '',
      names:[]
    }
  }

  handleChange = (e)=>{
    this.setState({
      name: e.target.value,
    })
  }

  onSubmitName = (e) =>{
    e.preventDefault();
    this.setState({
      name:'',
      names: this.state.names.concat(this.state.name)
    })
  }
    render(){

      const {name, names} = this.state;

      return (
        <div>
        <form onSubmit={this.onSubmitName}>
          <input 
          type="text"
          onChange ={this.handleChange} 
          value={name}
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