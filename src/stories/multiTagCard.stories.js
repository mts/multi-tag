import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MultiTagCard from '../components/Templates/Input/MultiInputCard';
import {intro, emails, telephones} from '../data/multiTagData';

storiesOf('MultiTagCard', module)
  .add('default', () => (
    <MultiTagCard
      intro={intro}
      mails={emails}
      telephones={telephones}
    />
  ));
