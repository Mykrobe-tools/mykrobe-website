/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Buttons from './Buttons';
import Markdown from './Markdown';
import Image from './Image';

import styles from './ComponentHero.scss';

class ComponentHero extends React.Component<*> {
  render() {
    const { title, body, buttons, image } = this.props;
    return (
      <div className={styles.container}>
        <Container>
          <Row>
            <Col md={{ size: 6, offset: 3 }} className={styles.content}>
              <h1>{title}</h1>
              <Markdown source={body} />
              <Buttons buttons={buttons} />
            </Col>
          </Row>
          <Image image={image} />
        </Container>
      </div>
    );
  }
}

ComponentHero.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  buttons: PropTypes.array,
  image: PropTypes.string,
};

export default ComponentHero;
