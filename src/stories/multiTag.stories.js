// MultiTag stories for Storybook

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MultiTag from '../components/Organisms/Card/MultiTag';
import {intro, emails, telephones} from '../data/multiTagData';

storiesOf('MultiTag', module)
  .add('default', () => (
    <MultiTag
      intro={intro}
      mails={emails}
      telephones={telephones}
    />
  ));
