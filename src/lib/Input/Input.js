import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input.css';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['text', 'password']),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    type: 'text'
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { type, value } = this.props;
    return (
      // <div className='input'>
        <input 
          type={type}
          value={value}
          onChange={this.handleChange}
        />
      // </div>
    );
  }
}