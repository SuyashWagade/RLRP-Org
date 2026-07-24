import api from './api';

export const programService = {
  getAll: async () => {
    try {
      const response = await api.get('/programs');
      return response.data;
    } catch (err) {
      return { success: false, data: [] };
    }
  },
  getById: async (id) => {
    try {
      const response = await api.get(`/programs/${id}`);
      return response.data;
    } catch (err) {
      return { success: false, data: null };
    }
  },
};
