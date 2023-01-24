/* eslint-disable react/prop-types */
import { useContext } from 'react';

import Avatar from '../Avatar';
import styles from './Rating.module.scss';
import { RatingContext } from '../../../../utils/RatingProvider';

export default function Rating({ className }) {
  const { setRating, rating } = useContext(RatingContext);
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className={`${styles.rating} ${className}`}>
      {numbers.map((number) => (
        <Avatar
          key={number}
          className={styles.avatar}
          value={number}
          onClick={() => setRating(number)}
          sx={{
            backgroundColor: rating === number && 'hsl(216, 12%, 54%)',
            color: rating === number && 'white',
          }}
        >
          {number}
        </Avatar>
      ))}
    </div>
  );
}
