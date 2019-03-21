/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Markdown from './Markdown';

import styles from './ComponentEditorial.scss';

class ComponentEditorial extends React.Component<*> {
  render() {
    const { title, body } = this.props;
    return (
      <Container className={styles.container}>
        <Row>
          <Col md={{ offset: 2, size: 8 }} className={styles.content}>
            {title && <h1>{title}</h1>}
            <Markdown source={body} />
          </Col>
        </Row>
      </Container>
    );
  }
}

ComponentEditorial.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default ComponentEditorial;
