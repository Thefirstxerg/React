import React, { Component } from 'react';
import Products from './Products';
import { Button, ProgressBar } from 'react-bootstrap';
import Rating from './Rating';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => {
        if (prevState.progress >= 100) {
          clearInterval(this.timer);
          return { progress: 100 };
        }
        return { progress: prevState.progress + 1 };
      });
    }, 50); // Adjust speed as desired
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const isValid = true;
    const { progress } = this.state;
    return (
      <div>
        {/* <Products />
        <Button variant="primary" disabled={!isValid}>Default</Button> */}

        <div style={{ margin: '30px 500px' }}>
          <h4>Loading Progress</h4>
          <ProgressBar animated now={progress} label={`${progress}%`} />
        </div>

        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
      </div>
    );
  }
}

export default App;
