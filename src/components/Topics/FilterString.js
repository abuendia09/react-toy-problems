import React, { Component } from 'react';

class FilterString extends React.Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        'Messi',
        'Ronaldo',
        'Rooney',
        'Neymar',
        'Jadon',
        'Bruno',
        'Scholes',
        'Beckham',
      ],
      userInput: '',
      filteredArray: [],
    };
  }
  changeUserInput(event) {
    this.setState({ userInput: event.target.value });
  }
  filterString(input) {
    let arr = this.state.unFilteredArray;
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(input)) {
        filteredArr.push(arr[i]);
      }
    }
    this.setState({ filteredArray: filteredArr });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={(event) => {
            this.changeUserInput(event);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterString(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered names: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
export default FilterString;
