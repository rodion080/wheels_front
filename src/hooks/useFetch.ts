import { useState } from 'react';
// @ts-ignore
export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // @ts-ignore
  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e:any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
};
