import React, { Component } from 'react';

class Sum extends React.Component {
  constructor() {
    super();
    this.state = { number1: 0, number2: 0, sum: null };
  }
  firstNumberInput(value) {
    this.setState({ number1: value });
  }
  secondNumberInput(value) {
    this.setState({ number2: value });
  }
  theSum(numberOne, numberTwo) {
    let sums = +numberOne + +numberTwo;
    this.setState({ sum: sums });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum</h4>
        <input
          className="inputLine"
          onChange={(event) => {
            this.firstNumberInput(event.target.value);
          }}
        />
        <input
          className="inputLine"
          onChange={(event) => {
            this.secondNumberInput(event.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.theSum(this.state.number1, this.state.number2);
          }}
        >
          Add
        </button>
        <span className="resultsBox">Sum:{this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
