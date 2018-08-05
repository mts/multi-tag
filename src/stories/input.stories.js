// Input stories for Storybook

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../components/Atoms/Text/Input';

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ));
