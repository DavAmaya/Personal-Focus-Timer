import { useState } from "react";
import { status_map } from "../../Utils/constants";
import { useTimerEngine } from "../../Hooks/userTimerEngine";

import QuickActions from "../../Components/Presets/QuickActions";
import TimerDisplay from "../../Components/Timer/TimerDisplay";
import TimerControls from "../../Components/Timer/TimerControls";

import "./app.css";
import "../../Components/Timer/timer.css";

export default function App() {
  const [selected_seconds, set_selected_seconds] = useState(25 * 60);
  const timer = useTimerEngine(selected_seconds);

  const is_idle = timer.status === status_map.idle;

  return (
    <div className="app">
      <div className="app__card">
        {is_idle && (
          <>
            <header className="app__header">
              <h1 className="app__title">personal focus timer</h1>
              <p className="app__subtitle">
                choose a session and start in seconds
              </p>
            </header>

            <QuickActions
              selected_seconds={selected_seconds}
              on_select={(seconds) => {
                set_selected_seconds(seconds);
                timer.reset_timer(seconds);
              }}
            />
          </>
        )}

        {!is_idle && (
          <div className={`timer timer--${timer.status}`}>
            <TimerDisplay seconds={timer.remaining_seconds} />
          </div>
        )}

        <TimerControls
          status={timer.status}
          on_start={timer.start_timer}
          on_pause={timer.pause_timer}
          on_reset={() => timer.reset_timer(selected_seconds)}
        />
      </div>
    </div>
  );
}
