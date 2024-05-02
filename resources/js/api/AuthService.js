import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Change this to match your Laravel API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  async login(credentials) {
    return apiClient.post('/login', credentials);
  },
  async logout() {
    return apiClient.post('/logout');
  },
  async getAuthenticatedUser() {
    return apiClient.get('/authenticated-user');
  },
};
