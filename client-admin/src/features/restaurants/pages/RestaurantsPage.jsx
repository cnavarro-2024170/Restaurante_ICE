import { useEffect } from 'react';
import RestaurantList from '../components/RestaurantList';
import RestaurantModal from '../components/RestaurantModal'; 
import { useRestaurantStore } from '../store/restaurantStore';

const RestaurantsPage = () => {
  const { fetchRestaurants, setIsModalOpen } = useRestaurantStore();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="animate-fadeIn relative"> {}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Gestión de Restaurantes</h2>
          <p className="text-gray-500">Administra las sedes y ubicaciones de Restaurante ICE</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="bg-main-orange text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-orange-600 transition-colors"
        >
          + Nuevo Restaurante
        </button>
      </div>

      <RestaurantList />
      
      {}
      <RestaurantModal />
    </div>
  );
};

export default RestaurantsPage;