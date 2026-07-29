import api from './api';

export const eventService = {
  getAll: () => api.get('/events'),
  create: (formData) => api.post('/events', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
};

export default eventService;
