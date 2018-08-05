import React from 'react';
import {object} from 'prop-types';
import MultiTag from '../../Organisms/Card/MultiTag';

const MultiTagCard = ({intro, mails, telephones}) => {
  return(
      <MultiTag
        intro={intro}
        mails={mails}
        telephones={telephones}
      />
  )
}

MultiTagCard.propTypes = {
    intro: object.isRequired,
    mails: object.isRequired,
    telephones: object.isRequired
};

export default MultiTagCard;

/*
`MultiTagCard` is a
  stateless function component
  receiving `intro, mails, telephones` props
`rendering`
  a `MultiTag` component

Sample usage is as follows:
````
  <MultiTagCard
    intro={intro}
    mails={emails}
    telephones={telephones}
  />
````
*/

