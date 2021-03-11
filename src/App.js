import React, { Component } from 'react'
import Header from './component/header'

class App extends Component{
  constructor(props){
    super(props)

    this.onClickBtn = this.onClickBtn.bind(this)
  }

  onClickBtn(e){
    e.preventDefault()
    console.log('trigger')
  }

  render(){
    return (
    <Header onClickButton={this.onClickBtn}/>
    )
  }
}

export default App