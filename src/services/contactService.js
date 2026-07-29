import api from './api';

export const contactService = {
  submit: (data) => api.post('/contact', data),
  getAll: () => api.get('/contact'),
};

export default contactService;
