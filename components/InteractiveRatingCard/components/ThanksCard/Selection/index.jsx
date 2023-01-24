import { useContext } from 'react';

import styles from './Selection.module.scss';
import { RatingContext } from '@/utils/RatingProvider';

export default function Selection({ className }) {
  const { rating } = useContext(RatingContext);
  return (
    <div className={`${styles.selection} ${className}`}>
      {`You selected ${rating} out of 5`}
    </div>
  );
}
