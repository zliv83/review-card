import { createContext, useState } from 'react';

export const RatingContext = createContext();

export function RatingProvider({ children }) {
  const [rating, setRating] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => setSubmit(true);

  return (
    <RatingContext.Provider value={{ submit, rating, handleSubmit, setRating }}>
      {children}
    </RatingContext.Provider>
  );
}
