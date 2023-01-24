// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import styles from './RatingCard.module.scss';
import Card from '../Card';
import Avatar from '../Avatar';
import star from '../../../../public/icon-star.svg';
import Rating from '../Rating';
import Button from '../Button';

export default function RatingCard({ onSubmit }) {
  return (
    <Card>
      <div className={styles.container}>
        <Avatar>
          <img alt="star" src={star.src} />
        </Avatar>
        <div className={styles.title}>How did we do?</div>
        <div className={styles.subTitle}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>
        <Rating className={styles.rating} />
        <Button className={styles.button} onSubmit={onSubmit}>
          Submit
        </Button>
      </div>
    </Card>
  );
}

RatingCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
