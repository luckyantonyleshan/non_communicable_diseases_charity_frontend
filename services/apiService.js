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
      body: body ? JSON.stringify(body) : null,
    };

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
  login(credentials) {
    return this.request('/auth/login', 'POST', credentials, false);
  },

  register(userData) {
    return this.request('/auth/register', 'POST', userData, false);
  },

  // User endpoints
  getCurrentUser() {
    return this.request('/users/me');
  },

  // Disease endpoints
  getDiseases() {
    return this.request('/diseases', 'GET', null, false);
  },

  createDisease(diseaseData) {
    return this.request('/diseases', 'POST', diseaseData);
  },

  // Area endpoints
  getAreas() {
    return this.request('/areas', 'GET', null, false);
  },

  getArea(id) {
    return this.request(`/areas/${id}`, 'GET', null, false);
  },

  getMapData() {
    return this.request('/areas/map', 'GET', null, false);
  },

  // Case endpoints
  getCases() {
    return this.request('/cases', 'GET', null, false);
  },

  createCase(caseData) {
    return this.request('/cases', 'POST', caseData);
  },

  // Review endpoints
  getReviews() {
    return this.request('/reviews', 'GET', null, false);
  },

  createReview(reviewData) {
    return this.request('/reviews', 'POST', reviewData);
  },

  // Donation endpoints
  getDonations() {
    return this.request('/donations', 'GET', null, false);
  },

  createDonation(donationData) {
    return this.request('/donations', 'POST', donationData);
  },

  // Resource endpoints
  getResources() {
    return this.request('/resources', 'GET', null, false);
  },

  createResource(resourceData) {
    return this.request('/resources', 'POST', resourceData);
  }
};

export default apiService;