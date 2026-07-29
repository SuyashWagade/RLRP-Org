import api from './api';

export const authService = {
  login: async (credentials) => {
    const data = await api.post('/auth/login', credentials);
    if (data?.token) {
      localStorage.setItem('rlrp_token', data.token);
      localStorage.setItem('rlrp_user', JSON.stringify(data.user));
    }
    return data;
  },
  logout: () => {
    localStorage.removeItem('rlrp_token');
    localStorage.removeItem('rlrp_user');
  },
  getCurrentUser: () => {
    const user = localStorage.getItem('rlrp_user');
    return user ? JSON.parse(user) : null;
  },
  getMe: () => api.get('/auth/me'),
};

export default authService;
