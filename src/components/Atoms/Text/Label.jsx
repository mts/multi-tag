import './Label.scss';
import React from 'react';
import {string, oneOf} from "prop-types";
import classNames from 'classnames';

const Label = ({ size, text }) => (
    <span
        className={classNames('label', {
            'label--small': size === 'small',
            'label--medium': size === 'medium'
        })}
    >
      {text}
    </span>
);

Label.defaultProps = {
    size: 'medium'
};

Label.propTypes = {
    text: string.isRequired,
    size: oneOf(['small', 'medium'])
};

export default Label;

/*
`Label` is a
  stateless function component
  receiving `size, text` props
`rendering`
  a styled span

Sample usage is as follows:
```
  <Label text={"E-mailadressen"} />
```
*/
