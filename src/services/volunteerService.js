import api from './api';

export const volunteerService = {
  apply: async (formData) => {
    try {
      const response = await api.post('/volunteers/apply', formData);
      return response.data;
    } catch (err) {
      return { success: false, message: 'Application submission failed' };
    }
  },
};
