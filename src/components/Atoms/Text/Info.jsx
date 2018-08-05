import "./Info.scss";
import React from "react";
import {string, oneOf} from "prop-types";
import classNames from 'classnames';

const Info = ({ size, body }) => (
    <span
        className={classNames('info', {
            'info--small': size === 'small',
            'info--medium': size === 'medium'
        })}
    >
      {body}
    </span>
);

Info.propTypes = {
    body: string.isRequired,
    size: oneOf(['small', 'medium'])
};

export default Info;

/*
`Info` is a
  stateless function component
  receiving `size, body` props
`rendering`
  a styled span

Sample usage is as follows:
```
  <Info body={"Bij elke uitbetaling van je tegoeden zul je een notificatie ontvangen"} />
```
*/
