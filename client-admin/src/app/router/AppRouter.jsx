import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardContainer from '../../shared/components/layout/DashboardContainer';
import Dashboard from '../../features/orders/pages/Dashboard';
import RestaurantsPage from '../../features/restaurants/pages/RestaurantsPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardContainer />}>
          <Route index element={<Dashboard />} />
          <Route path="restaurants" element={<RestaurantsPage />} />
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};