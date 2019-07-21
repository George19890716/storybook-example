import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['submit', 'button']),
    onClick: PropTypes.func,
    square: PropTypes.bool,
    raduisLeft: PropTypes.bool, 
    raduisRight: PropTypes.bool,
    blackBtn: PropTypes.bool,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    type: 'button',
    square: false,
    raduisLeft: false, 
    raduisRight: false,
    black: false,
    onClick: null,
    disabled: false
  }

  render() {
    const { children, type, square, raduisLeft, raduisRight, blackBtn, disabled, onClick } = this.props;
    const className = classNames(
      'button_normal', 
      {
        'button_raduis': !square,
        'button_black': blackBtn,
        'button_raduis-left': raduisLeft,
        'button_raduis-right': raduisRight,
        'button_disabled': disabled
      }
    );
    return (
      <button
        type={type}
        className={className}
        onClick={disabled ? null : onClick}
      >
        {children}
      </button>
    )
  }
}

export default Button;