/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import ComponentMainHero from './ComponentMainHero';
import ComponentHero from './ComponentHero';
import ComponentEditorial from './ComponentEditorial';
import ComponentPromos from './ComponentPromos';
import ComponentVideo from './ComponentVideo';
import ComponentDownload from './ComponentDownload';
import ComponentRegister from './ComponentRegister';
import ComponentFooter from './ComponentFooter';

const TypeToComponent = {
  'main-hero': ComponentMainHero,
  editorial: ComponentEditorial,
  promos: ComponentPromos,
  hero: ComponentHero,
  video: ComponentVideo,
  download: ComponentDownload,
  register: ComponentRegister,
  footer: ComponentFooter,
};

class Page extends React.Component<*> {
  render() {
    const { components, title } = this.props;
    const titleParts = [
      'Mykrobe',
      'Antimicrobial resistance and outbreak information within minutes',
    ];
    if (title) {
      titleParts.unshift(title);
    }
    const documentTitle = titleParts.join(' – ');
    return (
      <React.Fragment>
        <DocumentTitle title={documentTitle} />
        {components.map(({ type, anchor, enabled, ...rest }, index) => {
          if (enabled !== false) {
            const Component = TypeToComponent[type];
            if (Component) {
              return (
                <React.Fragment key={`${index}`}>
                  {anchor && <div id={anchor} />}
                  <Component {...rest} />
                </React.Fragment>
              );
            } else {
              return <pre>Unhandled type {type}</pre>;
            }
          }
        })}
      </React.Fragment>
    );
  }
}

Page.propTypes = {
  components: PropTypes.any,
};

export default Page;
