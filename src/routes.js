/* @flow */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page from './components/page/Page';

import { getContent } from './modules/content';

const content = getContent();

console.log('content', content);

const { all, pages } = content;

export default (
  <Switch>
    {Object.entries(pages).map(([path, attributes]) => {
      const pageAttributes = {
        ...attributes,
        components: [...all.before, ...attributes.components, ...all.after],
      };
      const Component = (props) => <Page {...props} {...pageAttributes} />;
      return <Route key={path} path={path} exact component={Component} />;
    })}
  </Switch>
);
