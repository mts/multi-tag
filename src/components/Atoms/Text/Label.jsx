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
