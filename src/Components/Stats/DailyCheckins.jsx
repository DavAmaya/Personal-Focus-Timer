import { format_time } from '../../Utils/time';
import './DailyCheckins.css';

export default function DailyCheckins({
  sessions_today,
  total_seconds,
  focus_sessions,
  break_sessions,
}) {
  return (
    <div className="daily">
      <div className="daily__header">
        <span className="daily__title">daily check-ins</span>
        <span className="daily__count">
          sessions today: {sessions_today}
        </span>
      </div>

      <div className="daily__clock">
        {format_time(total_seconds)}
      </div>

      <ul className="daily__list">
        <li className="daily__item">
          ⏳ today’s focus time: {format_time(total_seconds)}
        </li>
        <li className="daily__item">
          🎯 focus sessions: {focus_sessions}
        </li>
        <li className="daily__item">
          ☕ breaks completed: {break_sessions}
        </li>
      </ul>

      <div className="daily__actions">
        <button className="daily__btn">stats →</button>
        <button className="daily__btn">history →</button>
      </div>
    </div>
  );
}
