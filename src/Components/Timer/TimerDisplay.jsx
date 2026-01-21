import { format_time } from '../../utils/time';

export default function TimerDisplay({ seconds }) {
  return (
    <div className="timer__display">
      {format_time(seconds)}
    </div>
  );
}
