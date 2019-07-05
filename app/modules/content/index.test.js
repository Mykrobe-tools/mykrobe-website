/* @flow */

import { getContent, getPageWithPath, getPages } from './index';

describe('content module', () => {
  it('getContent is defined', () => {
    expect(getContent()).toBeDefined();
  });
  it('getPages is defined', () => {
    expect(getPages()).toBeDefined();
  });
  it('getPageWithPath is defined', () => {
    expect(getPageWithPath('/')).toBeDefined();
  });
});
