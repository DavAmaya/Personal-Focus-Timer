import { status_map } from "../../Utils/constants";
import React from "react";

export default function TimerControls({
  status,
  on_start,
  on_pause,
  on_reset,
  on_toggle_sound,
  sound_on,
}) {
  return (
    <div className="controls">
      <button
        className={`controls__btn ${sound_on ? "controls__btn--active" : ""}`}
        onClick={on_toggle_sound}
        title="toggle focus sound"
      >
        🎵
      </button>

      {status !== "running" && (
        <button
          className="controls__btn controls__btn--primary"
          onClick={on_start}
        >
          ▶
        </button>
      )}

      {status === "running" && (
        <button
          className="controls__btn controls__btn--primary"
          onClick={on_pause}
        >
          ❚❚
        </button>
      )}

      <button className="controls__btn" onClick={on_reset}>
        ✎
      </button>
    </div>
  );
}
