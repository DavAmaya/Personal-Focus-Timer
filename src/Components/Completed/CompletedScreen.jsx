import { format_time } from '../../Utils/time';
import "../Completed/Completed.css";

export default function CompletedScreen({
  daily_count,
  daily_seconds,
  on_restart,
}) {
  return (
    <div className="completed">
      <div className="completed__celebration">🎉</div>

      <h1 className="completed__title">focus complete</h1>

      <p className="completed__summary">
        that’s your <strong>{daily_count}</strong>
        {daily_count === 1 ? 'st' : 'th'} session today
      </p>

      <p className="completed__time">
        total focus today: {format_time(daily_seconds)}
      </p>

      <button
        type="button"
        className="completed__btn"
        onClick={on_restart}
      >
        new session
      </button>
    </div>
  );
}
