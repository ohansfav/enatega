import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from './Button';
import { COLORS, ORDER_STATUS } from './constants';
import './App.css';

// Dashboard Page
const Dashboard: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600 mb-2">Total Orders</p>
      <h3 className="text-3xl font-bold">1,234</h3>
      <p className="text-green-600 text-sm mt-2">+12.5% this month</p>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600 mb-2">Revenue</p>
      <h3 className="text-3xl font-bold">$45.2K</h3>
      <p className="text-green-600 text-sm mt-2">+8.2% this month</p>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600 mb-2">Active Riders</p>
      <h3 className="text-3xl font-bold">24</h3>
      <p className="text-amber-600 text-sm mt-2">Online now</p>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600 mb-2">Restaurants</p>
      <h3 className="text-3xl font-bold">56</h3>
      <p className="text-green-600 text-sm mt-2">+3 this month</p>
    </div>
  </div>
);

// Orders Management
const OrdersManagement: React.FC = () => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6 border-b">
      <h3 className="text-2xl font-bold">Orders</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Order ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Customer</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Restaurant</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((id) => (
            <tr key={id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">ORD-{String(1000 + id).padStart(5, '0')}</td>
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">Burger House</td>
              <td className="px-6 py-4">$24.99</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  id % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {id % 2 === 0 ? 'Delivered' : 'Preparing'}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-primary hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Restaurants Management
const RestaurantsManagement: React.FC = () => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6 border-b flex justify-between items-center">
      <h3 className="text-2xl font-bold">Restaurants</h3>
      <Button variant="primary" size="md">+ Add Restaurant</Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {[1, 2, 3, 4].map((id) => (
        <div key={id} className="border rounded-lg p-4">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-300 rounded"></div>
            <div className="flex-1">
              <h4 className="font-bold">Restaurant {id}</h4>
              <p className="text-sm text-gray-600">Fast Food</p>
              <p className="text-sm text-green-600">Active</p>
            </div>
            <div>
              <Button variant="text" size="sm">Edit</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Users Management
const UsersManagement: React.FC = () => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6 border-b">
      <h3 className="text-2xl font-bold">Users</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Phone</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Orders</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((id) => (
            <tr key={id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">User {id}</td>
              <td className="px-6 py-4">user{id}@example.com</td>
              <td className="px-6 py-4">+1 555-000{id}</td>
              <td className="px-6 py-4">{12 + id}</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Riders Management
const RidersManagement: React.FC = () => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6 border-b">
      <h3 className="text-2xl font-bold">Riders</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {[1, 2, 3, 4].map((id) => (
        <div key={id} className="border rounded-lg p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="flex-1">
              <h4 className="font-bold">Rider {id}</h4>
              <p className="text-sm text-gray-600">Bike • 34 deliveries</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Online</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Analytics
const Analytics: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-bold mb-4">Orders This Month</h3>
      <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded flex items-center justify-center">
        <p className="text-gray-600">📊 Chart visualization would go here</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">Top Restaurants</h3>
        <div className="space-y-2">
          {['Burger House', 'Pizza Palace', 'Sushi Corner'].map((name, i) => (
            <div key={i} className="flex justify-between items-center pb-2 border-b">
              <span>{name}</span>
              <span className="font-bold">{234 - i * 50} orders</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">Revenue by Source</h3>
        <div className="space-y-2">
          {['Online Payments', 'Cash on Delivery', 'Wallet'].map((name, i) => (
            <div key={i} className="flex justify-between items-center pb-2 border-b">
              <span>{name}</span>
              <span className="font-bold">${(15 + i * 5)}K</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('dashboard');

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-6">
          <h1 className="text-2xl font-bold mb-8" style={{ color: COLORS.primary }}>
            🍕 Enatega Admin
          </h1>
          <nav className="space-y-4">
            <Link
              to="/dashboard"
              onClick={() => setActiveSection('dashboard')}
              className={`block px-4 py-2 rounded ${activeSection === 'dashboard' ? 'bg-primary text-white' : 'hover:bg-gray-800'}`}
            >
              📊 Dashboard
            </Link>
            <Link
              to="/orders"
              onClick={() => setActiveSection('orders')}
              className={`block px-4 py-2 rounded ${activeSection === 'orders' ? 'bg-primary text-white' : 'hover:bg-gray-800'}`}
            >
              📦 Orders
            </Link>
            <Link
              to="/restaurants"
              onClick={() => setActiveSection('restaurants')}
              className={`block px-4 py-2 rounded ${activeSection === 'restaurants' ? 'bg-primary text-white' : 'hover:bg-gray-800'}`}
            >
              🏪 Restaurants
            </Link>
            <Link
              to="/users"
              onClick={() => setActiveSection('users')}
              className={`block px-4 py-2 rounded ${activeSection === 'users' ? 'bg-primary text-white' : 'hover:bg-gray-800'}`}
            >
              👥 Users
            </Link>
            <Link
              to="/riders"
              onClick={() => setActiveSection('riders')}
              className={`block px-4 py-2 rounded ${activeSection === 'riders' ? 'bg-primary text-white' : 'hover:bg-gray-800'}`}
            >
              🏍️ Riders
            </Link>
            <Link
              to="/analytics"
              onClick={() => setActiveSection('analytics')}
              className={`block px-4 py-2 rounded ${activeSection === 'analytics' ? 'bg-primary text-white' : 'hover:bg-gray-800'}`}
            >
              📈 Analytics
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            <Routes>
              <Route path="/" element={
                <>
                  <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
                  <Dashboard />
                </>
              } />
              <Route path="/dashboard" element={
                <>
                  <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
                  <Dashboard />
                </>
              } />
              <Route path="/orders" element={
                <>
                  <h2 className="text-3xl font-bold mb-6">Orders Management</h2>
                  <OrdersManagement />
                </>
              } />
              <Route path="/restaurants" element={
                <>
                  <h2 className="text-3xl font-bold mb-6">Restaurants Management</h2>
                  <RestaurantsManagement />
                </>
              } />
              <Route path="/users" element={
                <>
                  <h2 className="text-3xl font-bold mb-6">Users Management</h2>
                  <UsersManagement />
                </>
              } />
              <Route path="/riders" element={
                <>
                  <h2 className="text-3xl font-bold mb-6">Riders Management</h2>
                  <RidersManagement />
                </>
              } />
              <Route path="/analytics" element={
                <>
                  <h2 className="text-3xl font-bold mb-6">Analytics</h2>
                  <Analytics />
                </>
              } />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
