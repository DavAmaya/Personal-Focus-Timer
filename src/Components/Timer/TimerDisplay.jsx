import { format_time } from '../../Utils/time';
import React from 'react';

export default function TimerDisplay({ seconds }) {
  return (
    <div className="timer__display">
      {format_time(seconds)}
    </div>
  );
}
