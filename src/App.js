import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onCountUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  };
  onCountDown = () => {
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    return (
      <div className="App">
        <input className="button" type="button" value="+" onClick={this.onCountUp} />
        {this.state.count}
        <input className="button" type="button" value="-" onClick={this.onCountDown} />
      </div>
    );
  }

}

export default App;