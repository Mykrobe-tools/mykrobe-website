/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';

import { SubmitButton } from 'makeandship-js-common/src/components/ui/Buttons';

import Markdown from './Markdown';

import styles from './ComponentRegister.scss';

class ComponentRegister extends React.Component<*> {
  render() {
    const { title, body } = this.props;
    return (
      <div className={styles.container}>
        <Container>
          <Row>
            <Col md={{ size: 6, offset: 3 }} className={styles.content}>
              <h1>{title}</h1>
              <Markdown source={body} />
              <InputGroup className={styles.inputContainer}>
                <Input
                  placeholder={'sam.smith@example.com'}
                  type={'email'}
                  className={styles.emailInput}
                />
                <InputGroupAddon addonType="append">
                  <SubmitButton outline>Register</SubmitButton>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ComponentRegister.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default ComponentRegister;
