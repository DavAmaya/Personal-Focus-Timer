import "./layout.css";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <button className="sidebar__btn sidebar__btn--active">⏱</button>
      <button className="sidebar__btn">📊</button>
      <button className="sidebar__btn">📁</button>
      <button className="sidebar__btn">⚙</button>
    </nav>
  );
}
