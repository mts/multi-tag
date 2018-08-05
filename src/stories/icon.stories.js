// Icon stories for Storybook

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from '../components/Atoms/Image/Icon';

storiesOf('Icon', module)
  .add('cross', () => (
    <Icon name={'cross'} width={"10"} height={"10"} />
  ))
  .add('check', () => (
    <Icon name={'check'} width={"10"} height={"10"} />
  ));

