import React, { Component } from 'react';

class FilterObject extends React.Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        { food: 'Banana', color: 'yellow', texture: 'soft' },
        { food: 'Apple', size: 'small', shape: 'circle' },
        { food: 'Orange', color: 'orange', shape: 'circle' },
      ],
      userInput: ' ',
      filteredArray: [],
    };
  }
  changeUserInput(event) {
    this.setState({
      userInput: event.target.value,
    });
  }

  filterObject(input) {
    let arr = this.state.unFilteredArray;
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hasOwnProperty(input)) {
        filteredArr.push(arr[i]);
      }
    }
    this.setState({ filteredArray: filteredArr });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={(event) => {
            this.changeUserInput(event);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.filterObject(this.state.userInput);
          }}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          filteredArray: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
