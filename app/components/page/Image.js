/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';

import { IMAGE_DIR } from '../../constants';

import styles from './Image.scss';

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
