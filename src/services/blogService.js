import api from './api';

export const blogService = {
  getAll: () => api.get('/blog'),
  getBySlug: (slug) => api.get(`/blog/${slug}`),
  create: (formData) => api.post('/blog', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  delete: (id) => api.delete(`/blog/${id}`),
};

export default blogService;
