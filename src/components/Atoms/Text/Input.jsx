import "./Input.scss";
import React, { Component } from "react";
import {bool, func} from 'prop-types';
import classNames from 'classnames';

class Input extends Component {
  handleChange = (onChange, e) => {
    onChange(e);
  }

  handleKeyDown = (onKeyDown, e) => {
    if (this.refs.input.value !== '' &&
        (e.keyCode === 9 ||
          e.keyCode === 188
        )) {
      e.preventDefault();
    }

    if ((this.refs.input.value === '' && e.keyCode === 8) ||
          e.keyCode === 13 ||
          e.keyCode === 9 ||
          e.keyCode === 188) {
      onKeyDown(e);
    }
  }

  render() {
    const { onChange, onKeyDown, borderless, val } = this.props;

    return (
      <input
          id="new-tag"
          ref="input"
          value={val}
          onChange={(e) => this.handleChange(onChange, e)}
          onKeyDown={(e) => this.handleKeyDown(onKeyDown, e)}
          className={classNames('input', {
              'input--borderless': borderless
          })}
      />
    )
  }
}

Input.defaultProps = {
  borderless: false,
  onChange: () => {},
  onKeyDown: () => {}

};

Input.PropTypes = {
  borderless: bool,
  onChange: func,
  onKeyDown: func,
};

export default Input;

/*
`Input` is a
  stateful class component
  receiving `borderless, onChange, onKeyDown` props
`rendering`
  an input and handling keyDown and keyChange events

Sample usage is as follows:
````
  <Input />
````
*/
