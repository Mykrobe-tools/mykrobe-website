/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Image from './Image';

class ComponentVideo extends React.Component<*> {
  render() {
    const { image, to } = this.props;
    return (
      <Container>
        <Row>
          <Col md={{ offset: 2, size: 8 }}>
            <a
              className="d-block"
              href={to}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image image={image} />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

ComponentVideo.propTypes = {
  image: PropTypes.string,
  to: PropTypes.string,
};

export default ComponentVideo;
