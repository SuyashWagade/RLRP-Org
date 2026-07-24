import api from './api';

export const eventService = {
  getAll: async () => {
    try {
      const response = await api.get('/events');
      return response.data;
    } catch (err) {
      return { success: false, data: [] };
    }
  },
  getById: async (id) => {
    try {
      const response = await api.get(`/events/${id}`);
      return response.data;
    } catch (err) {
      return { success: false, data: null };
    }
  },
};
