/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';

import { IMAGE_DIR } from '../../constants';

import styles from './Image.module.scss';

class Image extends React.Component<*> {
  render() {
    const { image } = this.props;
    if (!image) {
      return null;
    }
    return (
      <img
        className={styles.img}
        src={`${process.env.PUBLIC_URL}/img/${image}`}
      />
    );
  }
}

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;
