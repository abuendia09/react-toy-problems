import React from 'react';

class EvenAndOdd extends React.Component {
  constructor() {
    super();
    this.state = { evenArray: [], oddArray: [], userInput: '' };
  }
  changeUserInput(event) {
    this.setState({
      userInput: event.target.value,
    });
  }

  evenAndOdd(userInput) {
    let arr = userInput.split(',');
    if (this.state.userInput.includes(' ')) {
      arr = this.state.userInput(' ');
    }
    let odds = [];
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(+arr[i]);
      } else if (arr[i] % 2 === 1) {
        odds.push(+arr[i]);
      }
    }
    this.setState({ evenArray: evens, oddArray: odds });
    console.log(this.state.evenArray);
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(event) => {
            this.changeUserInput(event);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.evenAndOdd(this.state.userInput);
          }}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
