import api from './api';

export const programService = {
  getAll: () => api.get('/programs'),
  getById: (id) => api.get(`/programs/${id}`),
  create: (formData) => api.post('/programs', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  update: (id, formData) => api.put(`/programs/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  delete: (id) => api.delete(`/programs/${id}`),
};

export default programService;
