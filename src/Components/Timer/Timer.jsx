import TimerDisplay from "../../Components/Timer/TimerDisplay";

export default function Timer({ timer }) {
  return (
    <div className="timer_circle">
      <div className={timer.status === 'running' ? 'timer_line' : 'timer_line paused'}>
        <div className={timer.status === 'running' ? 'timer_display' : 'timer_display paused'}>
        <TimerDisplay seconds={timer.remaining_seconds} />
        </div>
      </div>
    </div>
  );
}
