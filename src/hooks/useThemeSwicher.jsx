import { useState, useEffect } from 'react';

export function useThemeSwitcher() {
  const preferenceDarkQuiery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferenceDarkQuiery);
    const userPref = 'dark'
    // window.localStorage.getItem('theme');
    if (userPref) {
      setMode(userPref);
    }

    const handleChange = () => {
      if (userPref) {
        const check = userPref === 'dark' ? 'dark' : 'light';
        setMode(check);
        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        const check = mediaQuery.matches ? 'dark' : 'light';
        setMode(check);

        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    handleChange();

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    if (mode === 'light') {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return [mode, setMode];
}
