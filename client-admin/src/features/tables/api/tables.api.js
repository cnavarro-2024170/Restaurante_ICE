import axiosInstance from '../../../shared/utils/axios.js';

export const getTables = (params = {}) =>
  axiosInstance.get('/table', { params: { limit: 100, ...params } });

export const getTableById = (id) =>
  axiosInstance.get(`/table/${id}`);

export const createTable = (data) =>
  axiosInstance.post('/table', data);

export const updateTable = (id, data) =>
  axiosInstance.put(`/table/${id}`, data);

export const deleteTable = (id) =>
  axiosInstance.delete(`/table/delete/${id}`);

export const restoreTable = (id) =>
  axiosInstance.patch(`/table/restore/${id}`);
