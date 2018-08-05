import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Tag from '../components/Molecules/Info/Tag';

const mails = {
    "title": "E-mailadressen",
    "items":[
        {
           "id":0,
           "text":"me@me.com"
        },
        {
           "id":1,
           "text":"ali@baba.com"
        },
        {
           "id":2,
           "text":"someone@amazon.com"
        },
        {
           "id":3,
           "text":"one@abc.com"
        },
        {
           "id":4,
           "text":"two@abc.com"
        },
        {
           "id":5,
           "text":"three@abc.com"
        },
        {
           "id":6,
           "text":"four@abc.com"
        },
        {
           "id":7,
           "text":"five@abc.com"
        }
    ]
};

storiesOf('Tag', module)
  .add('default', () => (
    <Tag id={mails.items[0].id} text={mails.items[0].text} />
  ));
