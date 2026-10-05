import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from './Button';
import { COLORS, ROUTES } from './constants';
import './App.css';

// Pages
const HomePage: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold" style={{ color: COLORS.primary }}>🍕 Enatega</h1>
        </div>
        <nav className="flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
          <Link to="/restaurants" className="text-gray-700 hover:text-primary">Restaurants</Link>
          <Link to="/orders" className="text-gray-700 hover:text-primary">Orders</Link>
          <Link to="/profile" className="text-gray-700 hover:text-primary">Profile</Link>
        </nav>
        <Link to="/cart">
          <Button variant="primary" size="md">🛒 Cart</Button>
        </Link>
      </div>
    </header>

    {/* Hero Section */}
    <section className="py-16 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-5xl font-bold mb-4 text-gray-900">Food Delivery Made Easy</h2>
      <p className="text-xl text-gray-600 mb-8">Order from your favorite restaurants and get delivered within minutes</p>
      <div className="flex gap-4 justify-center">
        <Button variant="primary" size="lg">Order Now</Button>
        <Button variant="outline" size="lg">Learn More</Button>
      </div>
    </section>

    {/* Featured Restaurants */}
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold mb-8">Popular Restaurants</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-5xl">🍔</span>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">Restaurant {id}</h4>
              <p className="text-gray-600 mb-3">Fast Food • Delivery 20-30 min</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">⭐ 4.5</span>
                <Button variant="primary" size="sm">View Menu</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 Enatega. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

const RestaurantsPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">All Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4">
            <div className="h-32 bg-gray-300 rounded mb-3"></div>
            <h3 className="font-bold mb-2">Restaurant {i + 1}</h3>
            <p className="text-sm text-gray-600">⭐ 4.5 • Delivery 30 min</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CartPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <p className="text-gray-600 mb-4">Your cart is empty</p>
        <Link to="/restaurants">
          <Button variant="primary" size="md">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  </div>
);

const OrdersPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Your Orders</h2>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <p className="text-gray-600">No orders yet</p>
      </div>
    </div>
  </div>
);

const ProfilePage: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Your Profile</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" value="user@example.com" disabled />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Phone</label>
          <input type="tel" className="w-full border rounded px-3 py-2" value="+1234567890" disabled />
        </div>
        <Button variant="primary" size="md" fullWidth>Update Profile</Button>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
