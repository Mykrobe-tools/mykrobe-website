/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';
import ReactMarkdown from 'react-markdown';

const MarkdownLink = ({ href, ...rest }: React.ElementProps<*>) => {
  return <Link to={href} {...rest} />;
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
