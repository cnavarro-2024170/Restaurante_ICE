import { Navbar } from './Navbar.jsx';
import { Sidebar } from './Sidebar.jsx';

export const DashboardContainer = ({ children }) => (
  <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg,#fff7ed,#ffffff,#fef2f2)' }}>
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  </div>
);
