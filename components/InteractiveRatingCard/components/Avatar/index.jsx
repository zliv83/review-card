/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import styles from './Avatar.module.scss';

export default function Avatar({ children, className, onClick, value, sx }) {
  return (
    <div
      onClick={onClick}
      value={value}
      className={`${styles.avatar} ${className}`}
      style={sx}
    >
      {children}
    </div>
  );
}

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.object,
  onClick: PropTypes.func,
  value: PropTypes.number,
  sx: PropTypes.object,
};

Avatar.defaultProps = {
  className: {},
  onClick: () => {},
  value: 0,
  sx: {},
};
