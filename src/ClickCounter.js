import React, { Component } from 'react';

import './ClickCounter.css';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clickCount: 0,
    };
  }

  increaseClickCount() {
    const { clickCount } = this.state;
    this.setState({
      clickCount: clickCount + 1,
    });
  }

  render() {
    const { clickCount } = this.state;
    return (
      <div>
        <button
          onClick={this.increaseClickCount.bind(this)}
          style={clickCount % 2 === 0 ? { color: 'red' } : { color: 'black' }}
        >
          {clickCount} clics
        </button>
      </div>
    );
  }
}

export default ClickCounter;
