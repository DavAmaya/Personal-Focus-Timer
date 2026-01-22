import { useState, useEffect } from "react";
import React from "react";
import { status_map } from "../../Utils/constants";
import { useTimerEngine } from "../../Hooks/userTimerEngine";
import { get_today_stats } from "../../Utils/stats";
import { useSessionHistory } from "../../Hooks/useSessionHistory";
import QuickActions from "../../Components/Presets/QuickActions";
import TimerDisplay from "../../Components/Timer/TimerDisplay";
import TimerControls from "../../Components/Timer/TimerControls";
import Timer from "../../Components/Timer/Timer";
import ProgressRing from "../../Components/Timer/ProgressRing";
import CompletedScreen from "../Completed/CompletedScreen.jsx";
import DailyCheckins from "../Stats/DailyCheckins.jsx";

import "./app.css";
import "../../Components/Timer/timer.css";
import "../../Components/Completed/Completed.css";

export default function App() {
  const [selected_seconds, set_selected_seconds] = useState(25 * 60);
  const timer = useTimerEngine(selected_seconds);
  const sessions = useSessionHistory();

  const is_idle = timer.status === status_map.idle;
  const is_completed = timer.status === status_map.completed;

  useEffect(() => {
    if (is_completed) {
      sessions.save_session({
        id: crypto.randomUUID(),
        date: new Date().toISOString().slice(0, 10),
        mode: "focus",
        duration_seconds: selected_seconds,
        completed: true,
      });
    }
  }, [is_completed]);

  const today = get_today_stats(sessions.history);
  return (
    <div className="app">
      <div className="app__card">
        {is_idle && (
          <>
            <header className="app__header">
              <h1 className="app__title">Personal Focus Timer</h1>
              <p className="app__subtitle">
                Choose a session and start in seconds
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

      
        <div className={`timer timer--${timer.status}`}>
          <ProgressRing
            progress={timer.remaining_seconds / selected_seconds}
            paused={timer.status === status_map.paused}
            completed={is_completed}
          />
          <TimerDisplay seconds={timer.remaining_seconds} />
          {//<Timer timer={timer}/>
          }
        </div>

        {is_completed && (
          <CompletedScreen
            daily_count={today.count}
            daily_seconds={today.total_seconds}
            on_restart={() => timer.reset_timer(selected_seconds)}
          />
        )}
        {!is_completed && (
          <TimerControls
            status={timer.status}
            on_start={timer.start_timer}
            on_pause={timer.pause_timer}
            on_reset={() => timer.reset_timer(selected_seconds)}
          />
        )}
      </div>
      {timer.status === status_map.idle && (
        <DailyCheckins
          sessions_today={today.sessions_today}
          total_seconds={today.total_seconds}
          focus_sessions={today.focus_sessions}
          break_sessions={today.break_sessions}
        />
      )}
    </div>
  );
}
