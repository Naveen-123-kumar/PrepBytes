import React, { Component } from 'react'
import '../App.css'
export class ClassCom extends Component {
  render() {
    return (
      <>
      <div className='classComp'>
      <div className='funcHeading'>This is created using Class Component</div>
      <h2>This is done using external CSS</h2>
      <h2 style={{color:'blue'}}>This is done using inline css</h2>
      </div>
      </>
    )
  }
}
