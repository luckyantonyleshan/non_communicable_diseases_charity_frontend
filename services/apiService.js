import { API_BASE_URL } from '../src/config';
const apiService = {
  async request(endpoint, method = 'GET', body = null, requiresAuth = true) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (requiresAuth) {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    const config = {
      method,
      headers,
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  async login(credentials) {
    return this.request('/auth/login', 'POST', credentials, false);
  },

  async register(userData) {
    return this.request('/auth/register', 'POST', userData, false);
  },

  async getCurrentUser() {
    return this.request('/users/me');
  },

  async getDiseases() {
    return this.request('/diseases', 'GET', null, false);
  },

  async getAreas() {
    return this.request('/areas', 'GET', null, false);
  },

  async getArea(id) {
    return this.request(`/areas/${id}`, 'GET', null, false);
  },

  async createDonation(donationData) {
    return this.request('/donations', 'POST', donationData);
  },

  async createReview(reviewData) {
    return this.request('/reviews', 'POST', reviewData);
  }
};

export default apiService;