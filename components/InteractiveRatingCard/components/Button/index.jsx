import { useContext } from 'react';

import styles from './Button.module.scss';
import { RatingContext } from '@/utils/RatingProvider';

export default function Button({ children, className }) {
  const { handleSubmit } = useContext(RatingContext);
  return (
    <button className={`${styles.button} ${className}`} onClick={handleSubmit}>
      {children}
    </button>
  );
}
