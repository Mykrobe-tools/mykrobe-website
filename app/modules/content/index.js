/* @flow */

import content from '../../static/json/content.json';

export const getContent = () => content;
export const getPages = () => getContent().pages;
export const getPageWithPath = path => getContent().pages[path];
