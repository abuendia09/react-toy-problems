import React, { Component } from 'react';

class Palindrome extends React.Component {
  constructor() {
    super();
    this.state = { userInput: ' ', palindrome: ' ' };
  }
  changeUserInput(event) {
    this.setState({ userInput: event.target.value });
  }
  thePalindrome(userInput) {
    let userString = userInput.toLowerCase();
    let backwardsValue = userInput.split('').reverse().join('').toLowerCase();
    if (userString === backwardsValue) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Palindrome </h4>
        <input
          className="inputLine"
          onChange={(event) => {
            this.changeUserInput(event);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.thePalindrome(this.state.userInput);
          }}
        >
          Check:
        </button>
        <span className="resultsBox">
          {' '}
          Palindrome: {JSON.stringify(this.state.palindrome)}
        </span>
      </div>
    );
  }
}

export default Palindrome;
