import React from "react";

export default function ProgressRing({ progress, paused, completed }) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const dash_offset = circumference * (1 - progress);


  return (
    <svg className="timer__ring" width="220" height="220">
      <circle className="timer__ring-bg" cx="110" cy="110" r={radius} />
      {!completed && (
        <circle
          className={`timer__ring-progress ${
            paused ? "timer__ring-progress--paused" : ""
          }`}
          cx="110"
          cy="110"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dash_offset}
        />
      )}
      {completed && (
        <circle
          className="timer__ring-celebration"
          cx="110"
          cy="110"
          r={radius}
        />
      )}
    </svg>
  );
}
