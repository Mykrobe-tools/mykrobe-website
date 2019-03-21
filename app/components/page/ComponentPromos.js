/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

import Markdown from './Markdown';
import Image from './Image';

import styles from './ComponentPromos.scss';

class ComponentPromos extends React.Component<*> {
  render() {
    const { promos } = this.props;
    return (
      <Container className={styles.container}>
        <Row>
          {promos.map(({ to, title, titleIcon, body, image }, index) => (
            <Col key={`${index}`} className={styles.promoCol}>
              <Link smooth to={to} className={'d-block'}>
                <Image image={image} />
                <div className={styles.promoTextContainer}>
                  <div className={styles.promoTitle}>
                    {titleIcon && (
                      <span>
                        <i className={`fa fa-${titleIcon}`} />{' '}
                      </span>
                    )}
                    {title}
                  </div>
                  <Markdown source={body} />
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

ComponentPromos.propTypes = {
  promos: PropTypes.array,
};

export default ComponentPromos;
