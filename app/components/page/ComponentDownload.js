/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import { IconButton } from 'makeandship-js-common/src/components/ui/Buttons';

import Markdown from './Markdown';
import Image from './Image';

import styles from './ComponentDownload.scss';

const DownloadButton = (props: React.ElementProps<*>) => {
  const { text, primaryUserAgent, to, ...rest } = props;
  const primary =
    primaryUserAgent && navigator.userAgent.includes(primaryUserAgent);
  return (
    <IconButton outline={!primary} tag={'a'} href={to} {...rest}>
      {text}
    </IconButton>
  );
};

class ComponentDownload extends React.Component<*> {
  render() {
    const { title, body, promos, image } = this.props;
    return (
      <div className={styles.container}>
        <Container>
          <Row>
            <Col md={{ size: 6, offset: 3 }} className={styles.content}>
              <div className={styles.imageContainer}>
                <Image image={image} />
              </div>
              <h1>{title}</h1>
              <Markdown source={body} />
            </Col>
          </Row>
          <Row>
            {promos.map(({ title, body, button }, index) => (
              <Col key={`${index}`} className={styles.promoCol}>
                <div className={styles.promoTitle}>{title}</div>
                <Markdown source={body} />
                <DownloadButton {...button} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

ComponentDownload.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  promos: PropTypes.array,
  image: PropTypes.string,
};

export default ComponentDownload;
