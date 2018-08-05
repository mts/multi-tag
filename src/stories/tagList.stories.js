import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TagList from '../components/Molecules/List/TagList';
import {emails} from '../data/multiTagData';

storiesOf('TagList', module)
  .add('default', () => (
    <TagList items={emails.items} />
  ));
