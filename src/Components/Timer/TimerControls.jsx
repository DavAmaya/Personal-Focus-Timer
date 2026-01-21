import { status_map } from '../../utils/constants';

export default function TimerControls({
  status,
  on_start,
  on_pause,
  on_reset,
}) {
  return (
    <div className="timer__controls">
      {status === status_map.idle && (
        <button className="timer__btn" onClick={on_start}>
          start
        </button>
      )}

      {status === status_map.running && (
        <button className="timer__btn" onClick={on_pause}>
          pause
        </button>
      )}

      {status === status_map.paused && (
        <button className="timer__btn" onClick={on_start}>
          resume
        </button>
      )}

      {(status === status_map.running ||
        status === status_map.paused) && (
        <button
          className="timer__btn timer__btn--secondary"
          onClick={on_reset}
        >
          reset
        </button>
      )}
    </div>
  );
}
