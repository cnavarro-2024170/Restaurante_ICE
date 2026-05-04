import { useAuthStore } from '../../../features/auth/store/authStore.js';

export const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuthStore();

  return (
    <nav
      className="sticky top-0 z-50 shadow-lg"
      style={{ background: 'linear-gradient(to right, #ea580c, #dc2626)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
            style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <span className="text-white font-bold text-lg leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
              Restaurante ICE
            </span>
            <p className="text-orange-100 text-xs font-medium">Panel de Administración</p>
          </div>
        </div>

        {/* Right: user info + logout */}
        <div className="flex items-center gap-3">
          {isAuthenticated && user ? (
            <>
              <div className="text-right hidden sm:block">
                <p className="text-white text-sm font-semibold leading-none">{user.name || user.username || 'Administrador'}</p>
                <p className="text-orange-100 text-xs">{user.role || 'Admin'}</p>
              </div>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm"
                style={{ background: 'rgba(255,255,255,0.9)' }}>
                {(user.name || user.username || 'A')[0].toUpperCase()}
              </div>
              <button
                onClick={logout}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-semibold transition"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M16 17l5-5-5-5M21 12H9M13 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h6a2 2 0 002-2v-2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Salir
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-200 animate-pulse" />
              <span className="text-orange-100 text-xs">Modo demo</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
