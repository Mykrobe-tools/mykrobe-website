/* @flow */

import * as React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import styles from './Buttons.module.scss';

const iconButtonClassName = ({ marginLeft, marginRight }) => {
  if (!marginLeft && !marginRight) {
    return styles.button;
  }
  if (marginLeft && marginRight) {
    return `${styles.button} mx-sm-2`;
  }
  return marginLeft ? `${styles.button} ml-sm-2` : `${styles.button} mr-sm-2`;
};

const IconButton = ({
  icon,
  children,
  marginLeft,
  marginRight,
  color,
  outline,
  ...rest
}: React.ElementProps<*>): React.Element<*> => {
  return (
    <Button
      className={iconButtonClassName({ marginLeft, marginRight })}
      color={color}
      outline={outline}
      {...rest}
    >
      <div className={styles.contentContainer}>
        {icon ? (
          <span>
            <i className={`fa fa-${icon}`} /> {children}
          </span>
        ) : (
          children
        )}
      </div>
    </Button>
  );
};

IconButton.defaultProps = {
  icon: 'chevron-circle-right',
  marginLeft: false,
  marginRight: false,
  children: 'Submit',
};

const SubmitButton = (props: React.ElementProps<*>): React.Element<*> => (
  <IconButton type="submit" {...props} />
);

const PrimaryButton = (props: React.ElementProps<*>): React.Element<*> => (
  <IconButton tag="a" href="" color="secondary" {...props} />
);

const SecondaryButton = (props: React.ElementProps<*>): React.Element<*> => (
  <IconButton tag="a" href="" outline color="mid" {...props} />
);

const LinkButton = (props: React.ElementProps<*>): React.Element<*> => (
  <IconButton tag={Link} color="link" {...props} />
);

const CancelButton = (props: React.ElementProps<*>): React.Element<*> => (
  <IconButton
    icon="times-circle"
    tag="a"
    href=""
    outline
    color="mid"
    {...props}
  >
    Cancel
  </IconButton>
);

const DestructiveButton = (props: React.ElementProps<*>): React.Element<*> => (
  <IconButton icon="trash" tag="a" href="" outline color="danger" {...props} />
);

export {
  IconButton,
  SubmitButton,
  PrimaryButton,
  SecondaryButton,
  LinkButton,
  CancelButton,
  DestructiveButton,
};
