import { Link, useLocation } from 'react-router-dom';

const navItems = [
  {
    label: 'Mesas',
    to: '/dashboard/tables',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="3" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 10v7M19 10v7M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  // Future modules placeholder — they'll hook into the same sidebar pattern
  {
    label: 'Órdenes',
    to: '/dashboard/orders',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    comingSoon: true,
  },
  {
    label: 'Reservaciones',
    to: '/dashboard/reservations',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    comingSoon: true,
  },
  {
    label: 'Productos',
    to: '/dashboard/products',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    comingSoon: true,
  },
  {
    label: 'Usuarios',
    to: '/dashboard/users',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    comingSoon: true,
  },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside
      className="w-60 min-h-[calc(100vh-4rem)] flex flex-col shadow-sm"
      style={{ background: '#ffffff', borderRight: '1px solid #e5e7eb' }}
    >
      {/* Section label */}
      <div className="px-5 pt-6 pb-2">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#9ca3af' }}>
          Módulos
        </span>
      </div>

      <nav className="flex-1 px-3 pb-6 space-y-1">
        {navItems.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`sidebar-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${active ? 'active' : 'text-gray-600'} ${item.comingSoon ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <span className={active ? 'text-orange-600' : 'text-gray-400'}>{item.icon}</span>
              <span>{item.label}</span>
              {item.comingSoon && (
                <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-orange-50 text-orange-400">
                  Próximo
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer info */}
      <div className="px-5 py-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 leading-relaxed">
          Restaurante ICE<br />
          <span className="text-orange-400 font-medium">Admin Panel v1.0</span>
        </p>
      </div>
    </aside>
  );
};
