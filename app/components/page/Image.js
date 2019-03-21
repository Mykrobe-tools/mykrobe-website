/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.scss';

const IMAGE_DIR =
  process.env.NODE_ENV === 'development' ? 'app/static/img' : 'static/img';

class Image extends React.Component<*> {
  render() {
    const { image } = this.props;
    if (!image) {
      return null;
    }
    return <img className={styles.img} src={`${IMAGE_DIR}/${image}`} />;
  }
}

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;
