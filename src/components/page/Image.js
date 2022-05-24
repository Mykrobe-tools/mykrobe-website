/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';

class Image extends React.Component<*> {
  render() {
    const { image } = this.props;
    if (!image) {
      return null;
    }
    return (
      <img
        alt=""
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
