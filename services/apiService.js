// services/apiService.js
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

  // Auth endpoints
  async login(credentials) {
    return this.request('/auth/login', 'POST', credentials, false);
  },

  async register(userData) {
    return this.request('/auth/register', 'POST', userData, false);
  },

  // User endpoints
  async getCurrentUser() {
    return this.request('/users/me');
  },

  // Disease endpoints
  async getDiseases() {
    return this.request('/diseases', 'GET', null, false);
  },

  // Area endpoints
  async getAreas() {
    return this.request('/areas', 'GET', null, false);
  },

  async getArea(id) {
    return this.request(`/areas/${id}`, 'GET', null, false);
  },

  // Donation endpoints
  async createDonation(donationData) {
    return this.request('/donations', 'POST', donationData);
  },

  // Review endpoints
  async createReview(reviewData) {
    return this.request('/reviews', 'POST', reviewData);
  }
};

export default apiService;