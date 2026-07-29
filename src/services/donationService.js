import api from './api';

export const donationService = {
  getAll: () => api.get('/donations'),
  create: (data) => api.post('/donations', data),
  getStats: () => api.get('/donations/stats'),
};

export default donationService;
