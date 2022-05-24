/* @flow */

import * as React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

import { getPageWithPath } from "../../modules/content";

import { IMAGE_DIR } from "../../constants";
import Link from "./Link";

import styles from "./ComponentFooter.module.scss";

class ComponentFooter extends React.Component<*> {
  render() {
    const { text, logos, links } = this.props;
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
          <div className={styles.logos}>
            {logos.map((logo, index) => {
              const { image, to, ...rest } = logo;
              return (
                <span key={`${index}`} className={styles.logoContainer}>
                  <Link to={to} {...rest}>
                    <img
                      className={styles.img}
                      src={`${process.env.PUBLIC_URL}/img/${image}`}
                    />
                  </Link>
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
  logos: PropTypes.array,
};

export default ComponentFooter;
