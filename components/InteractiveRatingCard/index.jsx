import { useContext } from 'react';

import RatingCard from './components/RatingCard';
import ThanksCard from './components/ThanksCard';
import { RatingContext } from '@/utils/RatingProvider';

export default function InteractiveRatingCard() {
  const { submit } = useContext(RatingContext);
  return submit ? <ThanksCard /> : <RatingCard />;
}
