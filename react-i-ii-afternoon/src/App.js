import React, { Component } from "react";
import data from "./data.js";
import Person from "./components/Person.js";
import Header from "./components/Header.js";
import Button from "./components/Button";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      count: 0,
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    let count = this.state.count;
    count === this.state.data.length - 1 ? (count = 0) : (count += 1);
    this.setState({
      count,
    });
  }

  prev() {
    let count = this.state.count;
    count === 0 ? (count = this.state.data.length - 1) : (count -= 1);
    this.setState({
      count,
    });
  }

  render() {
    let currentPerson = this.state.data.map((e, i) => (
      <Person key={e.id} per={e} count={this.state.count} />
    ));

    return (
      <div className="App">
        <Header />
        {currentPerson[this.state.count]}
        <Button next={this.next} prev={this.prev} />
      </div>
    );
  }
}
