/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { Container } from 'reactstrap';

import { getPageWithPath } from '../../modules/content';

import styles from './ComponentFooter.scss';

class ComponentFooter extends React.Component<*> {
  render() {
    const { text, links } = this.props;
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.content}>
            {text}
            {links.map((link, index) => {
              const page = getPageWithPath(link);
              return (
                <span key={`${index}`} className={styles.linkContainer}>
                  <Link to={link}>{page.title}</Link>
                </span>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

ComponentFooter.propTypes = {
  text: PropTypes.string,
  links: PropTypes.array,
};

export default ComponentFooter;
