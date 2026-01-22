export function get_today_stats(history) {
  const today = new Date().toISOString().slice(0, 10);

  const today_items = history.filter(
    (item) => item.date === today && item.completed,
  );

  const focus_sessions = today_items.filter((item) => item.mode === "focus");

  const break_sessions = today_items.filter((item) => item.mode === "break");

  const total_seconds = focus_sessions.reduce(
    (sum, item) => sum + item.duration_seconds,
    0,
  );

  return {
    sessions_today: today_items.length,
    focus_sessions: focus_sessions.length,
    break_sessions: break_sessions.length,
    total_seconds,
  };
}
