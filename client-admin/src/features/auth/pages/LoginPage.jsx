// LOGIN PAGE — Prepared for authentication-service integration
// Another developer will implement the full login form here.
// The useAuthStore().login() stub is ready to receive the JWT response.

export const LoginPage = () => (
  <div
    className="min-h-screen flex items-center justify-center"
    style={{ background: 'linear-gradient(135deg,#fff7ed,#ffffff,#fef2f2)' }}
  >
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center border border-orange-100">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md"
        style={{ background: 'linear-gradient(135deg,#ea580c,#dc2626)' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2.5"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
      <h1
        className="text-2xl font-black text-gray-800 mb-1"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Restaurante ICE
      </h1>
      <p className="text-gray-500 text-sm mb-6">Panel de Administración</p>

      <div
        className="px-4 py-3 rounded-xl text-sm font-medium"
        style={{ background: '#fff7ed', color: '#ea580c', border: '1.5px solid #fdba74' }}
      >
        🔐 Login será implementado por el equipo de autenticación
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Para ver el dashboard, navega directamente a{' '}
        <a href="/dashboard/tables" className="text-orange-500 font-semibold hover:underline">
          /dashboard/tables
        </a>
      </p>
    </div>
  </div>
);
