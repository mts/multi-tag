import React from 'react';
import {string} from 'prop-types';
import {getPath} from '../../../utility/fontUtility';

const Icon = ({ name, width, height, fill, className }) => (
  <svg
    fill={fill}
    fontSize="1px"
    width={width}
    height={height}
    viewBox="0 0 1024 1024"
    className={className}
  >
    <path d={getPath(name)}></path>
  </svg>
);

Icon.defaultPropTypes = {
  className: '',
  fill: '',
};

Icon.propTypes = {
  name: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
  fill: string,
  className: string
};

export default Icon;
