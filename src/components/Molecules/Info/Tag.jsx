import './Tag.scss';
import React from 'react';
import {number, string, func} from 'prop-types';
import Info from '../../Atoms/Text/Info';
import Icon from '../../Atoms/Image/Icon';

const Tag = ({onMouseDown, text, id}) => {
  const handleMouseDown = (onMouseDown) => {
    onMouseDown(id);
  }

  return (
    <div
      onMouseDown={() => handleMouseDown(onMouseDown)}
      className="tag">
      <div className="tag__text">
        <Info size={'small'} body={text} />
      </div>
      <div className="tag__image">
        <Icon name={'cross'} width={"12"} height={"12"} />
      </div>
    </div>
  )
}

Tag.defaultProps = {
  onMouseDown: () => {}
};

Tag.propTypes = {
  id: number.isRequired,
  text: string.isRequired,
  onMouseDown: func
};

export default Tag;
