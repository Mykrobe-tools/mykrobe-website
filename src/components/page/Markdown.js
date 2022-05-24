/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Link from './Link';

import styles from './Markdown.module.scss';

const MarkdownLink = ({ href, ...rest }: React.ElementProps<*>) => {
  return <Link to={href} {...rest} />;
};

const renderers = { link: MarkdownLink };

class Markdown extends React.Component<*> {
  render() {
    const { source, ...rest } = this.props;
    return (
      <ReactMarkdown
        className={styles.markdown}
        source={source}
        renderers={renderers}
        {...rest}
      />
    );
  }
}

Markdown.propTypes = {
  source: PropTypes.string,
};

export default Markdown;
