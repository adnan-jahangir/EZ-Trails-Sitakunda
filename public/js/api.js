/**
 * TOURSTK ENTERPRISE API CLIENT
 * Handles all REST API communications with the Node.js + MongoDB Backend
 */

const API_BASE_URL = window.location.port === '5000' 
  ? '/api' 
  : (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:5000/api'
    : '/api';

const TourstkAPI = {
  baseUrl: API_BASE_URL,
  tokenKey: 'tourstk_admin_jwt',
  userKey: 'tourstk_admin_user',

  // Auth Helpers (Tab-Session Based Authentication)
  getToken() {
    return sessionStorage.getItem(this.tokenKey) || localStorage.getItem(this.tokenKey);
  },

  setAuth(token, user) {
    sessionStorage.setItem(this.tokenKey, token);
    sessionStorage.setItem(this.userKey, JSON.stringify(user));
    // Clear localStorage to avoid permanent cross-tab leaks
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  },

  clearAuth() {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userKey);
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  },

  getAdminUser() {
    try {
      const data = sessionStorage.getItem(this.userKey) || localStorage.getItem(this.userKey);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  // Base Fetch wrapper with headers & error handling
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const res = await fetch(url, {
        ...options,
        headers,
      });

      const contentType = res.headers.get('content-type') || '';
      let data;
      if (contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        try {
          data = JSON.parse(text);
        } catch (e) {
          if (!res.ok) {
            throw new Error(`Server returned status ${res.status}: ${text.slice(0, 100).trim() || 'Resource Not Found'}`);
          }
          data = { success: true, message: text };
        }
      }

      if (!res.ok) {
        if (res.status === 401 && endpoint.startsWith('/admin') || (options.authRequired && res.status === 401)) {
          this.clearAuth();
          if (window.location.pathname.includes('/admin/')) {
            window.location.href = 'index.html?auth=required';
          }
        }
        throw new Error(data.message || `Request failed with status ${res.status}`);
      }

      return data;
    } catch (error) {
      console.warn(`[Tourstk API Request Error] (${endpoint}):`, error.message);
      throw error;
    }
  },

  // =================== AUTHENTICATION ===================
  async loginAdmin(email, password) {
    try {
      const res = await this.request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      if (res.success && res.data?.token) {
        this.setAuth(res.data.token, res.data);
      }
      return res;
    } catch (err) {
      // Local fallback for offline/static environments
      const cleanEmail = String(email || '').toLowerCase().trim();
      if (cleanEmail === 'admin@tourstk.com' && password === 'admin123456') {
        const mockAdmin = {
          _id: 'local_master_id',
          name: 'EZ Trails Sitakunda SuperAdmin',
          email: cleanEmail,
          role: 'superadmin',
          token: 'local_master_jwt_token',
        };
        this.setAuth(mockAdmin.token, mockAdmin);
        return { success: true, data: mockAdmin };
      }
      throw err;
    }
  },

  async verifyAuth() {
    if (!this.getToken()) return false;
    try {
      const res = await this.request('/auth/me', { method: 'GET' });
      return res.success;
    } catch (e) {
      this.clearAuth();
      return false;
    }
  },

  // =================== BOOKINGS ===================
  async createBooking(bookingData) {
    return await this.request('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  },

  async trackBooking(identifier) {
    return await this.request(`/bookings/track/${encodeURIComponent(identifier)}`, {
      method: 'GET',
    });
  },

  async getBookings(params = {}) {
    const query = new URLSearchParams(params).toString();
    return await this.request(`/bookings?${query}`, { method: 'GET', authRequired: true });
  },

  async updateBookingStatus(id, updateData) {
    return await this.request(`/bookings/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify(updateData),
      authRequired: true,
    });
  },

  async deleteBooking(id) {
    return await this.request(`/bookings/${id}`, {
      method: 'DELETE',
      authRequired: true,
    });
  },

  // =================== PACKAGES ===================
  async getPackages(params = {}) {
    const query = new URLSearchParams(params).toString();
    return await this.request(`/packages?${query}`, { method: 'GET' });
  },

  async getPackageById(id) {
    return await this.request(`/packages/${id}`, { method: 'GET' });
  },

  async createPackage(packageData) {
    return await this.request('/packages', {
      method: 'POST',
      body: JSON.stringify(packageData),
      authRequired: true,
    });
  },

  async updatePackage(id, packageData) {
    return await this.request(`/packages/${id}`, {
      method: 'PUT',
      body: JSON.stringify(packageData),
      authRequired: true,
    });
  },

  async deletePackage(id) {
    return await this.request(`/packages/${id}`, {
      method: 'DELETE',
      authRequired: true,
    });
  },

  // =================== DESTINATIONS ===================
  async getDestinations() {
    return await this.request('/destinations', { method: 'GET' });
  },

  async createDestination(data) {
    return await this.request('/destinations', {
      method: 'POST',
      body: JSON.stringify(data),
      authRequired: true,
    });
  },

  async updateDestination(id, data) {
    return await this.request(`/destinations/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      authRequired: true,
    });
  },

  async deleteDestination(id) {
    return await this.request(`/destinations/${id}`, {
      method: 'DELETE',
      authRequired: true,
    });
  },

  // =================== TOUR GUIDES ===================
  async getGuides() {
    return await this.request('/guides', { method: 'GET' });
  },

  async createGuide(data) {
    return await this.request('/guides', {
      method: 'POST',
      body: JSON.stringify(data),
      authRequired: true,
    });
  },

  async deleteGuide(id) {
    return await this.request(`/guides/${id}`, {
      method: 'DELETE',
      authRequired: true,
    });
  },

  // =================== REVIEWS ===================
  async getReviews() {
    return await this.request('/reviews', { method: 'GET' });
  },

  async createReview(data) {
    return await this.request('/reviews', {
      method: 'POST',
      body: JSON.stringify(data),
      authRequired: true,
    });
  },

  async deleteReview(id) {
    return await this.request(`/reviews/${id}`, {
      method: 'DELETE',
      authRequired: true,
    });
  },

  // =================== CUSTOM PLANNER REQUESTS ===================
  async submitCustomRequest(planData) {
    return await this.request('/custom-requests', {
      method: 'POST',
      body: JSON.stringify(planData),
    });
  },

  async createCustomRequest(planData) {
    return await this.submitCustomRequest(planData);
  },

  async getCustomRequests(params = {}) {
    const query = new URLSearchParams(params).toString();
    return await this.request(`/custom-requests?${query}`, { method: 'GET', authRequired: true });
  },

  async updateCustomRequest(id, updateData) {
    return await this.request(`/custom-requests/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateData),
      authRequired: true,
    });
  },

  // =================== CONTACT & INQUIRIES ===================
  async submitContact(contactData) {
    return await this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  },

  async getContactMessages() {
    return await this.request('/contact', { method: 'GET', authRequired: true });
  },

  // =================== ADMIN STATS & ANALYTICS ===================
  async getAdminStats() {
    return await this.request('/admin/stats', { method: 'GET', authRequired: true });
  },

  // =================== LIVE DATA SYNC & NORMALIZATION ===================
  normalizePackage(p) {
    if (!p) return null;
    return {
      id: p.packageId || p.id || (p._id ? p._id.toString() : ''),
      _id: p._id,
      packageId: p.packageId || p.id,
      name: p.title || p.name || 'Tour Package',
      title: p.title || p.name || 'Tour Package',
      bnTitle: p.bnTitle || p.bnName || '',
      tagline: p.tagline || p.shortDesc || '',
      shortDesc: p.tagline || p.shortDesc || '',
      category: p.category || p.duration || 'Standard Tour',
      duration: p.duration || '2 Days • 1 Night',
      days: p.days || 1,
      nights: p.nights || 0,
      price: Number(p.price) || 0,
      originalPrice: Number(p.originalPrice) || 0,
      badge: p.badge || 'Popular',
      difficulty: p.difficulty || 'Moderate',
      minTravelers: p.groupSize || p.minTravelers || 'Min 4 Travelers',
      groupSize: p.groupSize || p.minTravelers || 'Min 4 Travelers',
      image: p.image || 'images/spots/chandranath-hill.jpg',
      destinations: p.spots || p.destinations || [],
      spots: p.spots || p.destinations || [],
      included: p.inclusions || p.included || p.includesList || ['Transport', 'Accommodation', 'Meals', 'Guide'],
      inclusions: p.inclusions || p.included || p.includesList || ['Transport', 'Accommodation', 'Meals', 'Guide'],
      includesList: p.inclusions || p.included || p.includesList || ['Transport', 'Accommodation', 'Meals', 'Guide'],
      exclusions: p.exclusions || [],
      highlights: p.highlights || [],
      featured: !!p.featured,
      isActive: p.isActive !== false,
    };
  },

  async fetchAndSyncPackages() {
    try {
      const res = await this.getPackages();
      if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
        const normalized = res.data.map(p => this.normalizePackage(p));
        if (typeof window.TOURSTK !== 'undefined') {
          window.TOURSTK.packages = normalized;
        }
        window.dispatchEvent(new CustomEvent('tourstk:packages-updated', { detail: normalized }));
        return normalized;
      }
    } catch (e) {
      console.warn('[Tourstk Live Sync] Using local backup packages');
    }
    return (typeof window.TOURSTK !== 'undefined' && window.TOURSTK.packages) ? window.TOURSTK.packages : [];
  },

  // Auto-Sync Setup (Window focus & Visibility change)
  initLiveSync() {
    let lastSync = 0;
    const triggerSync = () => {
      const now = Date.now();
      if (now - lastSync > 4000) { // Throttle at 4s
        lastSync = now;
        this.fetchAndSyncPackages();
      }
    };

    window.addEventListener('focus', triggerSync);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') triggerSync();
    });

    // Initial background sync
    setTimeout(triggerSync, 500);
  }
};

// Expose globally
window.TourstkAPI = TourstkAPI;
if (typeof window !== 'undefined') {
  TourstkAPI.initLiveSync();
}
