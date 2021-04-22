import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {myvar: 1};
  }
  componentDidMount(){
    console.log("Component Mounted")
  }
  componentDidUpdate(){
    console.log("Component Updated")
  }
  onclickHandler=()=>{
    this.setState({myvar:this.state.myvar+1})
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.myvar}</p>
        <button onClick={()=>this.onclickHandler()}>Click</button>
      </div>
    )
  }
}
