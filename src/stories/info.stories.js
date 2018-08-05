import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Info from '../components/Atoms/Text/Info';

storiesOf('Info', module)
  .add('default', () => (
    <Info body={"Bij elke uitbetaling van je tegoeden zul je een notificatie ontvangen"} />
  ));
