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

/*
`Icon` is a
  stateless function component
  receiving `name, width, height, fill, className` props
rendering
  various icons depending on name.

Sample usages are as follows:
  <Icon name={'cross'} width={"10"} height={"10"} />
  <Icon name={'check'} width={"10"} height={"10"} />
*/
