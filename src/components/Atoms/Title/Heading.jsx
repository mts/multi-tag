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

/*
Heading is a
  stateless function component
  receiving size, text props
rendering a conditionally styled span
  indicating various sizes

Sample usages are as follows:
  <Heading size={'h1'} text={"Uitbetalingen"} />
  <Heading size={'h2'} text={"Uitbetalingen"} />
  <Heading size={'h3'} text={"Uitbetalingen"} />
  <Heading size={'h4'} text={"Uitbetalingen"} />
*/
