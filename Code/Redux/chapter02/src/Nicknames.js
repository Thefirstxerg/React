import React, { Component } from 'react';

class Nicknames extends Component {
  render() {
    const names = ['Jada', 'Mathele', 'Mokgadi', 'Mokgadi'];
    const nicknames = names.map((name, index) => {
      return <li key={index}>{name}</li>;
    });

    return (
      <div>
        <h2>Nicknames</h2>
        <ul>{nicknames}</ul>

      </div>
    );
  }
}

export default Nicknames;