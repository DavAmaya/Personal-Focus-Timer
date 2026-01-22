import { useEffect, useState } from 'react';

const storage_key = 'focus_timer_history';

export function useSessionHistory() {
  const [history, set_history] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(storage_key) || '[]');
    set_history(stored);
  }, []);

  const save_session = (session) => {
    const next = [...history, session];
    set_history(next);
    localStorage.setItem(storage_key, JSON.stringify(next));
  };

  return {
    history,
    save_session,
  };
}
