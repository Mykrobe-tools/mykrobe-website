/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

import { IconButton } from 'makeandship-js-common/src/components/ui/Buttons';

class Buttons extends React.Component<*> {
  render() {
    const { buttons } = this.props;
    return (
      <React.Fragment>
        {buttons.map(({ text, ...rest }, index) => (
          <IconButton key={`${index}`} tag={Link} smooth {...rest}>
            {text}
          </IconButton>
        ))}
      </React.Fragment>
    );
  }
}

Buttons.propTypes = {
  buttons: PropTypes.array,
};

export default Buttons;
