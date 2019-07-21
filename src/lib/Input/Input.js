import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import './input.scss';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['text', 'password']),
    title: PropTypes.node,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    error: PropTypes.string
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
    const { type, title, placeholder, value, required, error } = this.props;
    return (
      <div className='input_container'>
        {
          !!title && (
            <label className='input_title'>
              {title}
            </label>
          )
        }
        <FormattedMessage id={placeholder}>
          {
            msg => (<input
                      type={type}
                      className={classNames('input_normal', {'input_error': !!error} )}
                      placeholder={msg}
                      value={value}
                      onChange={this.handleChange}
                      required={required}
                    />)
          }
        </FormattedMessage>
        {
          !!error && (
            <div className='input_error-msg'>
              * <FormattedMessage
                id={error}
              />
            </div>
          )
        }
      </div>
    );
  }
}