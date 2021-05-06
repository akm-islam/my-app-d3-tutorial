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
    //d3.selectAll('#myid').filter(d3.matcher('circle')).style('fill',"orange")
    //d3.selectAll('circle').filter(d3.matcher('#myid2')).style('fill',"orange")

    //-----------------------------------------------------------------------Multiple selection
    //d3.selectAll('.circle1,.mycircle4').style('fill',"orange")
    d3.selectAll('#circle2,.mycircle4').style('fill',"orange")

  }
  componentDidUpdate() {
    //console.log("Component Updated")
  }
  onclickHandler = () => {
    this.setState({ myvar: this.state.myvar + 1 })
  }
  render() {
    return (
      <svg width="760" height="500">
        <circle id="circle2" r="40" cx="120" cy="50" className="circle" />
        <circle id="myid2" r="40" cx="240" cy="50" />
        <circle id="myid" r="40" cx="360" cy="50" className="mycircle" />
        <circle id="myid" r="40" cx="480" cy="50" className="mycircle4" />
        <circle id="myid" r="40" cx="600" cy="50" className="mycircle" />
        <text id="myid" x="110" y="150">Text1</text>
        <text id="myid" x="230" y="150">Text2</text>
      </svg>
    )
  }
}
