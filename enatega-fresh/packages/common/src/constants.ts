// Design System Constants
export const COLORS = {
  primary: '#75d04b',
  primaryDark: '#659a3b',
  primaryLight: '#a8e681',
  secondary: '#ff6b47',
  background: '#ffffff',
  backgroundAlt: '#f5f5f5',
  text: '#333333',
  textLight: '#999999',
  border: '#e0e0e0',
  success: '#4caf50',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
};

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};

export const FONTS = {
  family: 'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
  sizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '32px',
  },
};

export const BREAKPOINTS = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};

// API endpoints
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
export const WS_URL = process.env.REACT_APP_WS_URL || 'ws://localhost:4000';

// Navigation routes
export const ROUTES = {
  // Customer app
  HOME: '/',
  SEARCH: '/search',
  RESTAURANTS: '/restaurants',
  RESTAURANT_DETAIL: '/restaurant/:id',
  MENU: '/menu/:restaurantId',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ORDERS: '/orders',
  ORDER_DETAIL: '/orders/:id',
  PROFILE: '/profile',
  ADDRESSES: '/addresses',
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',

  // Admin app
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_RESTAURANTS: '/admin/restaurants',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_RIDERS: '/admin/riders',
  ADMIN_USERS: '/admin/users',
  ADMIN_ANALYTICS: '/admin/analytics',
  ADMIN_SETTINGS: '/admin/settings',
};

// Local storage keys
export const STORAGE_KEYS = {
  USER: 'enatega_user',
  TOKEN: 'enatega_token',
  CART: 'enatega_cart',
  PREFERENCES: 'enatega_preferences',
  LOCATION: 'enatega_location',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  DEFAULT_PAGE: 1,
};

// Order status
export const ORDER_STATUS = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  PREPARING: 'PREPARING',
  READY: 'READY',
  ONTHEWAY: 'ONTHEWAY',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
};

// Payment methods
export const PAYMENT_METHODS = {
  CARD: 'CARD',
  WALLET: 'WALLET',
  CASH: 'CASH',
  PAYPAL: 'PAYPAL',
  STRIPE: 'STRIPE',
};

export default {
  COLORS,
  SPACING,
  FONTS,
  BREAKPOINTS,
  ROUTES,
  STORAGE_KEYS,
  ORDER_STATUS,
  PAYMENT_METHODS,
};
