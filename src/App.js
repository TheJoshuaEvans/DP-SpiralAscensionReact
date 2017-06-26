import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const SpiralFactory = require('./SpiralFactory');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({value: this.state.value, spiral: SpiralFactory.generate(this.state.value)});
    event.preventDefault();
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Spiral Ascension</h2>
          </div>
          <p className="App-intro">
            Input a number
          </p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>
                <input type="number" value={this.state.value} onChange={this.handleChange} />
              </label>       
              <input type="submit" value="Submit" />
            </p>
          </form>  
          <div className="Display-linebreak">
            <pre>{this.state.spiral}</pre>
          </div>
        </div>
    );
  }
}


export default App;
