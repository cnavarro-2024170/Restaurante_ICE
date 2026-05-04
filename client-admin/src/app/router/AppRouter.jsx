import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../layouts/DashboardPage.jsx';
import { ProtectedRoute } from './ProtectedRoute.jsx';
import { Tables } from '../../features/tables/components/Tables.jsx';
import { LoginPage } from '../../features/auth/pages/LoginPage.jsx';

// Placeholder components for future modules
const ComingSoon = ({ name }) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
      style={{ background: 'linear-gradient(135deg,#fff7ed,#ffedd5)' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#ea580c" strokeWidth="2"/>
        <path d="M12 8v4l3 3" stroke="#ea580c" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
    <h2 className="text-xl font-bold text-gray-700">{name}</h2>
    <p className="text-gray-400 text-sm mt-1">Módulo en desarrollo</p>
  </div>
);

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard/tables" replace />} />
    <Route path="/login" element={<LoginPage />} />

    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }
    >
      <Route index element={<Navigate to="tables" replace />} />
      <Route path="tables" element={<Tables />} />
      <Route path="orders" element={<ComingSoon name="Órdenes" />} />
      <Route path="reservations" element={<ComingSoon name="Reservaciones" />} />
      <Route path="products" element={<ComingSoon name="Productos" />} />
      <Route path="users" element={<ComingSoon name="Usuarios" />} />
    </Route>

    {/* Catch-all */}
    <Route path="*" element={<Navigate to="/dashboard/tables" replace />} />
  </Routes>
);
