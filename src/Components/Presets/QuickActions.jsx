import { focus_presets } from '../../Utils/constants';
import React from 'react';
import './presets.css';

export default function QuickActions({ selected_seconds, on_select }) {
  return (
    <div className="presets">
      <div className="presets__row">
        {focus_presets.map((minutes) => {
          const seconds = minutes * 60;
          const is_selected = seconds === selected_seconds;

          return (
            <button
              key={minutes}
              type="button"
              className={`presets__btn ${is_selected ? 'presets__btn--active' : ''}`}
              onClick={() => on_select(seconds)}
            >
              <span className="presets__minutes">{minutes}</span>
              <span className="presets__label">min</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
