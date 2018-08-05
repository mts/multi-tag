// Label stories for Storybook

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Label from '../components/Atoms/Text/Label';

storiesOf('Label', module)
  .add('default', () => (
    <Label text={"E-mailadressen"} />
  ));
