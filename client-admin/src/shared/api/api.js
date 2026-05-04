import axios from './axios';

export const getRestaurantsRequest = async () => {
  return await axios.get('/restaurant'); 
};

export const createRestaurantRequest = async (restaurantData) => {
  return await axios.post('/restaurant', restaurantData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteRestaurantRequest = async (id) => {
  return await axios.delete(`/restaurant/${id}`);
};

export const updateRestaurantRequest = async (id, restaurantData) => {
  return await axios.put(`/restaurant/${id}`, restaurantData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};