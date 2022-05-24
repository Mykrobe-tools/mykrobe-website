/* @flow */

import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

const Link = ({ to, ...rest }: React.ElementProps<*>) => {
  if (to.startsWith('/') || to.startsWith('#')) {
    return <HashLink to={to} {...rest} />;
  }
  /* eslint-disable jsx-a11y/anchor-has-content */
  return <a href={to} target="_blank" rel="noopener noreferrer" {...rest} />;
  /* eslint-enable jsx-a11y/anchor-has-content */
};

export default Link;
