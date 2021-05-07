import React, { Component } from 'react'
import './App.css';
import * as d3 from "d3"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { myvar: 1 };
  }
  componentDidMount() {

    //-----------------------------------------------------------------------Data Joins
    var myData = [10, 40, 20, 30, 50];

    var s = d3.selectAll('circle');

    // Do the data join
    s.data(myData);

    // Modify the selected elements
    s.attr('r', function (d) {
      return d;
    })
      .attr('cx', function (d, i) {
        return i * 120 ;
      });

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
      </svg>
    )
  }
}
