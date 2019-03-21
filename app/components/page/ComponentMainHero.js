/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Buttons from './Buttons';
import Markdown from './Markdown';
import Image from './Image';

import styles from './ComponentMainHero.scss';

class ComponentMainHero extends React.Component<*> {
  render() {
    const { title, body, buttons, image } = this.props;
    return (
      <div className={styles.container}>
        <Container>
          <Row className={styles.row}>
            <Col md={5} className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <Link to="/" className={styles.logoContainer}>
                <div className={styles.logo} />
              </Link>
              <Markdown className={styles.bodyContainer} source={body} />
              <Buttons buttons={buttons} />
            </Col>
            <div className={styles.imageContainer}>
              <Image image={image} />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

ComponentMainHero.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  buttons: PropTypes.array,
  image: PropTypes.string,
};

export default ComponentMainHero;
