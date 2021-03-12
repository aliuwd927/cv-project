import React, { Component } from 'react'
import Header from './component/header'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      name:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmitTask = this.onSubmitTask.bind(this)
  }

  handleChange = (e) =>{
    e.preventDefault()

    this.setState({
      name: e.target.value,
    })

    console.log('test')
  }


  onSubmitTask = (e) => {
    e.preventDefault();
    console.log(e)
  }

  render(){
    const {name} = this.state;

    return (
    <Header value = {name}/>
    )
  }
}

export default App