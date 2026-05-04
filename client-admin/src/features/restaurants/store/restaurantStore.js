import { create } from 'zustand';
import { getRestaurantsRequest, createRestaurantRequest, deleteRestaurantRequest } from '../../../shared/api/api';

export const useRestaurantStore = create((set, get) => ({
  restaurants: [],
  selectedRestaurant: null,
  loading: false,
  isModalOpen: false,

  fetchRestaurants: async () => {
    set({ loading: true });
    try {
      const response = await getRestaurantsRequest();
      set({ restaurants: response.data.data || response.data, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },

  createRestaurant: async (restaurantData) => {
    set({ loading: true });
    try {
      await createRestaurantRequest(restaurantData);
      await get().fetchRestaurants();
      set({ loading: false, isModalOpen: false });
      return true;
    } catch (error) {
      console.error(error);
      set({ loading: false });
      return false;
    }
  },

  deleteRestaurant: async (id) => {
    try {
      await deleteRestaurantRequest(id);
      set((state) => ({
        restaurants: state.restaurants.filter((restaurant) => restaurant._id !== id)
      }));
    } catch (error) {
      console.error(error);
    }
  },

  setRestaurants: (restaurants) => set({ restaurants }),
  setSelectedRestaurant: (restaurant) => set({ selectedRestaurant: restaurant }),
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}));