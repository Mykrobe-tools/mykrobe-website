/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import ReactMarkdown from 'react-markdown';

const MarkdownLink = ({ href, children }: React.ElementProps<*>) => {
  if (href.startsWith('/') || href.startsWith('#')) {
    return <Link to={href}>{children}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const renderers = { link: MarkdownLink };

class Markdown extends React.Component<*> {
  render() {
    const { source, ...rest } = this.props;
    return <ReactMarkdown source={source} renderers={renderers} {...rest} />;
  }
}

Markdown.propTypes = {
  source: PropTypes.string,
};

export default Markdown;
