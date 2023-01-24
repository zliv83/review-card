import styles from './ThanksCard.module.scss';
import Card from '../Card';
import thanks from '@/public/thanks.svg';
import Selection from './Selection';

export default function ThanksCard() {
  return (
    <Card>
      <div className={styles.container}>
        <img alt="thanks" src={thanks.src} />
        <Selection className={styles.selection} />
        <div className={styles.title}>Thank you!</div>
        <div className={styles.subTitle}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </div>
      </div>
    </Card>
  );
}
