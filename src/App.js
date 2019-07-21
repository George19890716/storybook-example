import React, { Component } from 'react';
import Input from './lib/Input/Input';
import './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      value
    })
  }
  
  render() {
    const { value } = this.state;
    return (
      <div>
        <div>{value}</div>
        {/* <Input
          type='text'
          value={value}
          onChange={value => this.onChange(value)}
        /> */}
      </div>
      // <div className='box'>
      //   <img src='./images/1.jpg' className='img' alt='' />
      //   <img src='./images/2.jpg' className='img' alt='' />
      //   1\2
      // </div>
    );
  }
}