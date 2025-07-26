export const API_BASE_URL = "https://non-communicable-diseases-charity-api.onrender.com";

export const ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register"
  },
  users: {
    me: "/users/me",
    updateRole: (id) => `/users/${id}/role`
  },
  diseases: {
    base: "/diseases",
    single: (id) => `/diseases/${id}`
  },
  areas: {
    base: "/areas",
    single: (id) => `/areas/${id}`,
    map: "/areas/map"
  },
  donations: {
    base: "/donations"
  },
  reviews: {
    base: "/reviews"
  }
};