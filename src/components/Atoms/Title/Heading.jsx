import './Heading.scss';
import React from 'react';
import {string} from 'prop-types';
import cx from 'classnames';

const Heading = ({size, text}) => <span className={cx(`heading heading--${size}`)}>{text}</span>;

Heading.propTypes = {
  size: string.isRequired,
  text: string.isRequired,
};

export default Heading;
