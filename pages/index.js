import styles from '../styles/pages/Home.module.scss';
import InteractiveRatingCard from '../components/InteractiveRatingCard';
import { RatingProvider } from '../utils/RatingProvider';

export default function Home() {
  return (
    <div className={styles.page}>
      <RatingProvider>
        <InteractiveRatingCard />
      </RatingProvider>
    </div>
  );
}
