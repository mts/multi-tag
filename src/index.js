// Application entry point
// Renders MultiTagCard component
// to the DOM element with the id root

import React from 'react';
import ReactDOM from 'react-dom';
import MultiTagCard from './components/Templates/Input/MultiTagCard';
import {intro, emails, telephones} from './data/multiTagData';


ReactDOM.render(
    <MultiTagCard
      intro={intro}
      mails={emails}
      telephones={telephones}
    />,
    document.getElementById('root'));

