/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import { useContext } from 'react';

import styles from './Button.module.scss';
import { RatingContext } from '../../../../utils/RatingProvider';

export default function Button({ children, className }) {
  const { handleSubmit } = useContext(RatingContext);
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.object,
};

Button.defaultProps = {
  className: {},
};
