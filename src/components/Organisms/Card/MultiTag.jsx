import './MultiTag.scss';
import React from 'react';
import {arrayOf, shape, string, number} from 'prop-types';

import Heading from '../../Atoms/Title/Heading';
import Info from '../../Atoms/Text/Info';

import Label from '../../Atoms/Text/Label';

import TagList from '../../Molecules/List/TagList';

import Input from '../../Atoms/Text/Input';

const MultiTag = ({ intro, mails, telephones }) => (
  <div className="multi-tag">
    <div className="multi-tag__container">
      <div className="multi-tag__intro-title">
        <Heading size={'h4'} text={intro.title} />
      </div>
      <div className="multi-tag__intro-description">
        <Info body={intro.description} />
      </div>

      <div className="multi-tag__mails-title">
        <Label size={'small'} text={mails.title} />
      </div>
      <TagList items={mails.items} />

      <div className="multi-tag__telephones">
        <div className="multi-tag__telephones-title">
          <Label size={'small'} text={telephones.title} />
        </div>
        <div className="multi-tag__telephones-input">
          <Input />
        </div>
        <Info size={'small'} body={telephones.description} />
      </div>
    </div>
  </div>
);

MultiTag.propTypes = {
    intro: shape({
      title: string,
      description: string
    }),
    mails: shape({
      title: string,
      items: arrayOf(
        shape({
          id: number,
          text: string
        })
      )
    }),
    telephones: shape({
      title: string,
      description: string
    })
};

export default MultiTag;

/*
`MultiTag` is a
  stateless function component
  receiving `intro, mails, telephones` props
`rendering`
  `Heading`, `Label` and `Input` components

Sample usage is as follows:
```
  <MultiTag
    intro={intro}
    mails={emails}
    telephones={telephones}
  />
```
*/

