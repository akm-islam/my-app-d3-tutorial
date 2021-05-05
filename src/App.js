import React, { Component } from 'react'
import './App.css';
import * as d3 from "d3"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { myvar: 1 };
  }
  componentDidMount() {
    //-----------------------------------------------------------------------Filtering selection
    //console.log(d3.selectAll('circle').filter(d3.matcher('.mycircle')).style('fill',"orange"))

    //-----------------------------------------------------------------------Multiple selection
    //console.log(d3.selectAll('.circle1,.mycircle4').style('fill',"orange"))
    console.log(d3.selectAll('#circle2,.mycircle4').style('fill',"orange"))

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
        <circle r="40" cx="360" cy="50" className="mycircle" />
        <circle r="40" cx="480" cy="50" className="mycircle4" />
        <circle r="40" cx="600" cy="50" className="mycircle" />
      </svg>
    )
  }
}
