/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

export default function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
