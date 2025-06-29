import { useEffect } from 'react';

export const useAuth = () => {
  useEffect(() => {
    const username = localStorage.getItem('username');

    if (!username) {
      window.location.href = '/login';
    }
  }, []);
};
