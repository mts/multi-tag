import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Heading from '../components/Atoms/Title/Heading';

storiesOf('Heading', module)
  .add('h1', () => (
    <Heading size={'h1'} text={"Uitbetalingen"} />
  ))
  .add('h2', () => (
    <Heading size={'h2'} text={"Uitbetalingen"} />
  ))
  .add('h3', () => (
    <Heading size={'h3'} text={"Uitbetalingen"} />
  ))
  .add('h4', () => (
    <Heading size={'h4'} text={"Uitbetalingen"} />
  ));
