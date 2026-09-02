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

  // =================== ROOMS & ACCOMMODATIONS ===================
  async getRooms(params = {}) {
    const query = new URLSearchParams(params).toString();
    return await this.request(`/rooms?${query}`, { method: 'GET' });
  },

  async getRoom(id) {
    return await this.request(`/rooms/${id}`, { method: 'GET' });
  },

  async createRoom(data) {
    return await this.request('/rooms', {
      method: 'POST',
      body: JSON.stringify(data),
      authRequired: true,
    });
  },

  async updateRoom(id, data) {
    return await this.request(`/rooms/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      authRequired: true,
    });
  },

  async deleteRoom(id) {
    return await this.request(`/rooms/${id}`, {
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

  // =================== IMAGE UPLOAD ===================
  async uploadImage(file, folder = 'tourstk') {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);
    const token = this.getToken();
    try {
      const res = await fetch(`${this.baseUrl}/upload`, {
        method: 'POST',
        headers: {
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        },
        body: formData,
      });
      return await res.json();
    } catch (err) {
      console.error('Upload failed:', err);
      return { success: false, message: err.message };
    }
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

  async updateGuide(id, data) {
    return await this.request(`/guides/${id}`, {
      method: 'PUT',
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
  channel: null,

  getChannel() {
    if (!this.channel && typeof BroadcastChannel !== 'undefined') {
      try {
        this.channel = new BroadcastChannel('tourstk_live_sync_channel');
        this.channel.onmessage = (event) => {
          if (event && event.data) {
            this.handleLiveSyncMessage(event.data);
          }
        };
      } catch (e) {
        this.channel = null;
      }
    }
    return this.channel;
  },

  broadcastChange(type, data = {}) {
    const payload = { type, data, timestamp: Date.now() };
    const ch = this.getChannel();
    if (ch) {
      try {
        ch.postMessage(payload);
      } catch (e) {}
    }
    try {
      localStorage.setItem('tourstk_sync_event', JSON.stringify(payload));
    } catch (e) {}
    // Trigger locally in current window as well
    this.handleLiveSyncMessage(payload, true);
  },

  handleLiveSyncMessage(payload, isLocal = false) {
    if (!payload || !payload.type) return;
    const { type, data } = payload;

    switch (type) {
      case 'PACKAGE_UPDATED':
        this.fetchAndSyncPackages();
        break;
      case 'DESTINATION_UPDATED':
        this.fetchAndSyncDestinations();
        break;
      case 'ROOM_UPDATED':
        this.fetchAndSyncRooms();
        break;
      case 'REVIEW_UPDATED':
      case 'REVIEW_CREATED':
        this.fetchAndSyncReviews();
        window.dispatchEvent(new CustomEvent('tourstk:review-created', { detail: data }));
        break;
      case 'BOOKING_CREATED':
        window.dispatchEvent(new CustomEvent('tourstk:booking-created', { detail: data }));
        window.dispatchEvent(new CustomEvent('tourstk:bookings-updated', { detail: data }));
        break;
      case 'BOOKING_UPDATED':
        window.dispatchEvent(new CustomEvent('tourstk:bookings-updated', { detail: data }));
        break;
      case 'CUSTOM_REQUEST_CREATED':
        window.dispatchEvent(new CustomEvent('tourstk:custom-request-created', { detail: data }));
        break;
      case 'REFRESH_ALL':
        this.fetchAllLive();
        break;
    }
  },

  // 1. PACKAGES NORMALIZER & SYNC
  normalizePackage(p) {
    if (!p) return null;
    return {
      id: p.packageId || p.id || (p._id ? p._id.toString() : ''),
      _id: p._id,
      packageId: p.packageId || p.id,
      name: p.title || p.name || 'Tour Package',
      title: p.title || p.name || 'Tour Package',
      bnTitle: p.bnTitle || p.bnName || '',
      bnName: p.bnTitle || p.bnName || '',
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
        const normalized = res.data.map(p => this.normalizePackage(p)).filter(Boolean);
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

  // 2. DESTINATIONS NORMALIZER & SYNC
  normalizeDestination(d) {
    if (!d) return null;
    const sId = d.destinationId || d.id || (d._id ? d._id.toString() : '');
    return {
      _id: d._id,
      id: sId,
      destinationId: sId,
      name: d.name || 'Sitakunda Destination',
      bnName: d.bnName || '',
      category: d.category || 'Hills & Peaks',
      categoryIcon: d.categoryIcon || (
        d.category === 'Beaches & Coastlines' ? 'beach_access' :
        d.category === 'Waterfalls & Springs' ? 'water_drop' :
        d.category === 'Lakes & Valleys' ? 'kayaking' : 'terrain'
      ),
      difficulty: d.difficulty || 'Moderate',
      elevation: d.elevation || 'Scenic Trail',
      duration: d.duration || 'Day Trip',
      bestTime: d.bestTime || 'Morning & Sunset',
      lat: Number(d.lat) || 22.6,
      lng: Number(d.lng) || 91.65,
      image: d.image || 'images/spots/chandranath-hill.jpg',
      fallbackImage: d.fallbackImage || d.image || 'images/spots/chandranath-hill.jpg',
      gallery: Array.isArray(d.gallery) && d.gallery.length > 0 ? d.gallery : [
        { type: 'image', src: d.image || 'images/spots/chandranath-hill.jpg', thumb: d.image || 'images/spots/chandranath-hill.jpg', label: 'Main View' }
      ],
      shortDesc: d.shortDesc || '',
      description: d.description || d.shortDesc || '',
      tags: Array.isArray(d.tags) && d.tags.length > 0 ? d.tags : ['Sitakunda', 'Tourism'],
      thingsToDo: Array.isArray(d.thingsToDo) && d.thingsToDo.length > 0 ? d.thingsToDo : ['Sightseeing', 'Photography'],
      tips: Array.isArray(d.tips) && d.tips.length > 0 ? d.tips : ['Carry water', 'Wear trekking shoes'],
      isActive: d.isActive !== false,
    };
  },

  async fetchAndSyncDestinations() {
    try {
      const res = await this.getDestinations();
      if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
        const normalized = res.data.map(d => this.normalizeDestination(d)).filter(Boolean);
        if (typeof window.TOURSTK !== 'undefined') {
          window.TOURSTK.destinations = normalized;
        }
        window.dispatchEvent(new CustomEvent('tourstk:destinations-updated', { detail: normalized }));
        return normalized;
      }
    } catch (e) {
      console.warn('[Tourstk Live Sync] Using local backup destinations');
    }
    return (typeof window.TOURSTK !== 'undefined' && window.TOURSTK.destinations) ? window.TOURSTK.destinations : [];
  },

  // 3. ROOMS / ACCOMMODATION NORMALIZER & SYNC
  normalizeRoom(r) {
    if (!r) return null;
    const key = r.slug || r._id || (r.name ? r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'room');
    return {
      _id: r._id,
      id: r._id || key,
      slug: r.slug || key,
      key: key,
      name: r.name || 'Accommodation Room',
      bnName: r.bnName || '',
      category: r.category || 'Standard Cottage',
      pricePerRoom: Number(r.pricePerRoom) || 0,
      badge: r.badge || ((Number(r.pricePerRoom) || 0) > 0 ? `+৳${r.pricePerRoom} / Room` : 'Package Included (৳0)'),
      bnBadge: r.bnBadge || ((Number(r.pricePerRoom) || 0) > 0 ? `+৳${r.pricePerRoom} / রুম` : 'প্যাকেজে অন্তর্ভুক্ত (৳০)'),
      subtitle: r.subtitle || 'Sitakunda Tour Accommodation',
      bnSubtitle: r.bnSubtitle || '',
      desc: r.desc || '',
      bnDesc: r.bnDesc || '',
      image: r.image || 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&auto=format&fit=crop&q=80',
      photos: Array.isArray(r.photos) && r.photos.length > 0 ? r.photos : [r.image],
      amenities: Array.isArray(r.amenities) ? r.amenities : [],
      bnAmenities: Array.isArray(r.bnAmenities) ? r.bnAmenities : (Array.isArray(r.amenities) ? r.amenities : []),
      bedOptions: Array.isArray(r.bedOptions) ? r.bedOptions : [],
      maxGuestsPerRoom: Number(r.maxGuestsPerRoom) || 3,
      totalRoomsAvailable: Number(r.totalRoomsAvailable) || 10,
      isAvailable: r.isAvailable !== false,
      sortOrder: Number(r.sortOrder) || 0,
    };
  },

  async fetchAndSyncRooms() {
    try {
      const res = await this.getRooms();
      if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
        const normalized = res.data.map(r => this.normalizeRoom(r)).filter(Boolean);
        window.TOURSTK_ROOMS = normalized;
        if (typeof window.TOURSTK !== 'undefined') {
          window.TOURSTK.accommodations = normalized;
        }
        window.dispatchEvent(new CustomEvent('tourstk:rooms-updated', { detail: normalized }));
        return normalized;
      }
    } catch (e) {
      console.warn('[Tourstk Live Sync] Using local backup rooms');
    }
    return window.TOURSTK_ROOMS || [];
  },

  // 4. REVIEWS NORMALIZER & SYNC
  normalizeReview(r) {
    if (!r) return null;
    const name = r.customerName || r.name || 'Verified Traveler';
    return {
      _id: r._id,
      id: r._id || Math.random().toString(),
      name: name,
      customerName: name,
      package: r.tourPackage || r.package || 'Sitakunda Adventure Tour',
      tourPackage: r.tourPackage || r.package || 'Sitakunda Adventure Tour',
      rating: Number(r.rating) || 5,
      text: r.reviewText || r.text || '',
      reviewText: r.reviewText || r.text || '',
      role: r.role || 'Verified Traveler',
      initials: name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
      createdAt: r.createdAt || new Date().toISOString(),
      isApproved: r.isApproved !== false,
    };
  },

  async fetchAndSyncReviews() {
    try {
      const res = await this.getReviews();
      if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
        const normalized = res.data.map(r => this.normalizeReview(r)).filter(Boolean);
        if (typeof window.TOURSTK !== 'undefined') {
          window.TOURSTK.reviews = normalized;
        }
        window.dispatchEvent(new CustomEvent('tourstk:reviews-updated', { detail: normalized }));
        return normalized;
      }
    } catch (e) {
      console.warn('[Tourstk Live Sync] Using local backup reviews');
    }
    return (typeof window.TOURSTK !== 'undefined' && window.TOURSTK.reviews) ? window.TOURSTK.reviews : [];
  },

  // Synchronize all core data from database
  async fetchAllLive() {
    return await Promise.all([
      this.fetchAndSyncPackages(),
      this.fetchAndSyncDestinations(),
      this.fetchAndSyncRooms(),
      this.fetchAndSyncReviews(),
    ]);
  },

  // Auto-Sync Setup (BroadcastChannel + Storage Event + Heartbeat Poller)
  initLiveSync() {
    // 1. Initialize BroadcastChannel
    this.getChannel();

    // 2. Storage event listener (cross-window/iframe fallback)
    window.addEventListener('storage', (e) => {
      if (e.key === 'tourstk_sync_event' && e.newValue) {
        try {
          const payload = JSON.parse(e.newValue);
          this.handleLiveSyncMessage(payload);
        } catch (err) {}
      }
    });

    // 3. Heartbeat & visibility trigger
    let lastSync = 0;
    const triggerSync = () => {
      const now = Date.now();
      if (now - lastSync > 3500) { // Throttle at 3.5s
        lastSync = now;
        this.fetchAllLive();
      }
    };

    window.addEventListener('focus', triggerSync);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') triggerSync();
    });

    // Initial background sync
    setTimeout(triggerSync, 300);

    // Periodic light poller every 12 seconds
    setInterval(() => {
      if (document.visibilityState === 'visible') {
        triggerSync();
      }
    }, 12000);
  }
};

// Expose globally
window.TourstkAPI = TourstkAPI;
if (typeof window !== 'undefined') {
  TourstkAPI.initLiveSync();
}
