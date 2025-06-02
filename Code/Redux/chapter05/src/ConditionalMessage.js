import React, { Component } from 'react';

class ConditionalMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      isChecked: false
    };
  }

  handleToggleMessage = () => {
    this.setState((prevState) => ({ showMessage: !prevState.showMessage }));
  };

  handleCheckboxChecked = (e) => {
    this.setState({ isChecked: e.target.checked });
  };

  render() {
    const { showMessage, isChecked } = this.state;
    return (
      <div>
        <button onClick={this.handleToggleMessage} style={{marginTop: '20px'}}>
          {showMessage ? 'Hide' : 'Show'} Message
        </button>
        <div style={{marginTop: '10px'}}>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={this.handleCheckboxChecked}
            />
            {' '}Check me!
          </label>
        </div>
        {/* Conditional rendering based on two conditions */}
        {showMessage && isChecked && (
          <div style={{marginTop: '10px', color: 'green'}}>
            Both conditions are true! The button is toggled and the checkbox is checked.
          </div>
        )}
      </div>
    );
  }
}

export default ConditionalMessage;
