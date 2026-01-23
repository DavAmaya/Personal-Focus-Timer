import { useEffect, useRef, useState } from "react";
import { status_map } from "../Utils/constants";

export function useTimerEngine(initial_seconds) {
  const [status, set_status] = useState(status_map.idle);
  const [remaining_seconds, set_remaining_seconds] = useState(initial_seconds);

  const end_at_ref = useRef(null);
  const interval_ref = useRef(null);

  const start_timer = () => {
    if (status === status_map.running) return;

    end_at_ref.current = Date.now() + remaining_seconds * 1000;
    set_status(status_map.running);

    interval_ref.current = setInterval(() => {
      const diff = end_at_ref.current - Date.now();
      const next = Math.max(0, Math.ceil(diff / 1000));
      set_remaining_seconds(next);

      if (next === 0) {
        clearInterval(interval_ref.current);
        set_status(status_map.completed);
      }
    }, 250);
  };

  const pause_timer = () => {
    if (status !== status_map.running) return;

    clearInterval(interval_ref.current);
    const diff = end_at_ref.current - Date.now();
    set_remaining_seconds(Math.max(0, Math.ceil(diff / 1000)));
    set_status(status_map.paused);
  };

  const reset_timer = (seconds) => {
    clearInterval(interval_ref.current);
    set_remaining_seconds(seconds);
    set_status(status_map.idle);
  };

  useEffect(() => {
    return () => clearInterval(interval_ref.current);
  }, []);

  return {
    status,
    remaining_seconds,
    start_timer,
    pause_timer,
    reset_timer,
  };
}
