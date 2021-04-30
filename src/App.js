import React, { Component } from 'react'
import './App.css';
import * as d3 from "d3"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {myvar: 1};
  }
  componentDidMount(){
   var my_selection=d3.selectAll("p")
   console.log(my_selection)
  }
  componentDidUpdate(){
    //console.log("Component Updated")
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
