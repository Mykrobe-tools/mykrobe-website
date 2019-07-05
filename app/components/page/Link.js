/* @flow */

import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

const Link = ({ to, ...rest }: React.ElementProps<*>) => {
  if (to.startsWith('/') || to.startsWith('#')) {
    return <HashLink to={to} {...rest} />;
  }
  return <a href={to} target="_blank" rel="noopener noreferrer" {...rest} />;
};

export default Link;
