import api from './api';

export const volunteerService = {
  register: (data) => api.post('/volunteers', data),
  getAll: () => api.get('/volunteers'),
  updateStatus: (id, status) => api.patch(`/volunteers/${id}`, { status }),
};

export default volunteerService;
