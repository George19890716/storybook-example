import React, { Component } from 'react';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className='box'>
        <img src='./images/1.jpg' className='img' alt='' />
        <img src='./images/2.jpg' className='img' alt='' />
      </div>
    );
  }
}