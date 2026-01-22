import { status_map } from "../../Utils/constants";
import React from "react";

export default function TimerControls({
  status,
  on_start,
  on_pause,
  on_reset,
}) {
  return (
    <div className="controls">
      <button className="controls__btn">🎵</button>

      {status !== status_map.running && (
        <button
          className="controls__btn controls__btn--primary"
          onClick={on_start}
        >
          ▶
        </button>
      )}

      {status === status_map.running && (
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
