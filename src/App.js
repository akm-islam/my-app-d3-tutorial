import React, { Component } from 'react'
import './App.css';
import * as d3 from "d3"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { myvar: 1 };
  }
  componentDidMount() {
    //-----------------------------------------------------------------------select and selectAll
    /*
      d3.select selects the first matching element whilst d3.selectAll selects all matching elements. 
      Each function takes a single argument which specifies the selector string.
    */
    //console.log(d3.select('circle')) // Selects only one circle. If there are multiple circles, the first one is returend
    //console.log(d3.selectAll('circle')) // Selects all circles


  }
  componentDidUpdate() {
    //console.log("Component Updated")
  }
  onclickHandler = () => {
    this.setState({ myvar: this.state.myvar + 1 })
  }
  render() {
    return (
      <svg width="760" height="140">
        <circle r="40" cx="120" cy="50" className="circle1" />
        <circle r="40" cx="240" id="circle2" cy="50" />
        <circle r="40" cx="360" cy="50" className="mycircle"/>
        <circle r="40" cx="480" cy="50" className="mycircle"/>
        <circle r="40" cx="600" cy="50" className="mycircle"/>
      </svg>
    )
  }
}
