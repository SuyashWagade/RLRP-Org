import api from './api';

export const blogService = {
  getAll: async () => {
    try {
      const response = await api.get('/blogs');
      return response.data;
    } catch (err) {
      return { success: false, data: [] };
    }
  },
  getById: async (id) => {
    try {
      const response = await api.get(`/blogs/${id}`);
      return response.data;
    } catch (err) {
      return { success: false, data: null };
    }
  },
};
