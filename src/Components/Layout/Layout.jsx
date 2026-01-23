import Sidebar from "./Sidebar";
import Header from "./Header";
import "./layout.css";

export default function AppLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__main">
        <Header />
        <div className="layout__content">{children}</div>
      </div>
    </div>
  );
}
