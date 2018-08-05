import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Tag from '../components/Molecules/Info/Tag';
import {emails} from '../data/tagData';

storiesOf('Tag', module)
  .add('default', () => (
    <Tag id={emails.items[0].id} text={emails.items[0].text} />
  ));
