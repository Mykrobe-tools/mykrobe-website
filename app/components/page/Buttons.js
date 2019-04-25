/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';

import { IconButton } from 'makeandship-js-common/src/components/ui/Buttons';

import Link from './Link';

class Buttons extends React.Component<*> {
  render() {
    const { buttons } = this.props;
    return (
      <React.Fragment>
        {buttons.map(({ text, enabled, ...rest }, index) => {
          if (enabled === false) {
            return null;
          }
          return (
            <IconButton key={`${index}`} tag={Link} smooth {...rest}>
              {text}
            </IconButton>
          );
        })}
      </React.Fragment>
    );
  }
}

Buttons.propTypes = {
  buttons: PropTypes.array,
};

export default Buttons;
