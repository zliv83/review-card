import Rating from '@/components/InteractiveRating/components/Rating';
import { RatingProvider } from '@/utils/RatingProvider';

export default function Test() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <RatingProvider>
        <Rating />
      </RatingProvider>
    </div>
  );
}
