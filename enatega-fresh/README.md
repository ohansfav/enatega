# 🍕 Enatega Fresh - Food Delivery Platform (Clean Build)

A completely reconstructed, working version of Enatega food delivery multivendor platform. This is a fresh, clean implementation based on the original architecture but using modern, reliable tech stack for stability.

## ✨ What's Included

### Applications
1. **Customer Web App** (`apps/customer-web`)
   - Browse restaurants
   - View menus and items
   - Manage shopping cart
   - Order history
   - User profile management
   - **Port:** 3000

2. **Admin Dashboard** (`apps/admin-web`)
   - Orders management
   - Restaurant management
   - User management
   - Rider management
   - Analytics and reporting
   - **Port:** 3001

3. **Shared Components & Utilities** (`packages/common`)
   - Reusable React components (Button, etc.)
   - Design system constants (colors, spacing, fonts)
   - API endpoints and routes
   - Types and interfaces

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 10+

### Installation & Run

```bash
# Clone to workspace (already done)
cd C:\Projects\enatega\enatega-fresh

# Install all dependencies
npm install

# Start both apps in development mode
npm run dev
```

### Access Applications
- **Customer Web:** `http://localhost:3000`
- **Admin Dashboard:** `http://localhost:3001`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
enatega-fresh/
├── packages/
│   └── common/              # Shared utilities & components
│       ├── src/
│       │   ├── components/  # Reusable React components
│       │   ├── constants.ts # Colors, spacing, routes, API endpoints
│       │   └── index.ts     # Exports
│       └── package.json
├── apps/
│   ├── customer-web/        # Customer-facing web app
│   │   ├── src/
│   │   │   ├── App.tsx      # Main app component with routes
│   │   │   ├── main.tsx     # React entry point
│   │   │   ├── index.css    # Global styles with Tailwind
│   │   │   └── App.css      # Component-specific styles
│   │   ├── index.html       # HTML template
│   │   ├── vite.config.ts   # Vite configuration
│   │   ├── tailwind.config.js
│   │   ├── postcss.config.js
│   │   └── package.json
│   └── admin-web/           # Admin dashboard
│       └── [Same structure as customer-web]
└── package.json             # Root workspace config
```

## 🎨 Design System

### Colors
- **Primary:** `#75d04b` (Green)
- **Primary Dark:** `#659a3b`
- **Primary Light:** `#a8e681`
- **Secondary:** `#ff6b47` (Orange)

### Spacing
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px

## 🛠️ Tech Stack

### Core
- **React:** 18.2.0
- **TypeScript:** 5.1+
- **Vite:** 5.0+ (Ultra-fast build tool)
- **Tailwind CSS:** 3.4+ (Utility-first CSS)

### UI & Routing
- **React Router DOM:** 6.20+
- **Axios:** 1.6+ (HTTP client)

### Development
- **Autoprefixer:** 10.4+
- **PostCSS:** 8.4+

## 📝 Features Implemented

### Customer App
✅ Restaurant listing and browsing
✅ Search and filter functionality
✅ Shopping cart management
✅ Order history
✅ User profile page
✅ Responsive design

### Admin Dashboard
✅ Orders management table
✅ Restaurant management with add/edit
✅ User management
✅ Rider management
✅ Analytics dashboard
✅ Statistics cards
✅ Sidebar navigation

### Shared
✅ Design system (colors, spacing, fonts)
✅ Reusable Button component
✅ Route definitions
✅ Constants and configuration
✅ API endpoint configuration

## 🔌 API Integration Ready

The app is pre-configured for GraphQL/Apollo integration:

```typescript
// API Base URL
http://localhost:4000

// WebSocket URL
ws://localhost:4000

// Available to implement:
- User authentication
- Restaurant data fetching
- Order creation and tracking
- Real-time updates
- Payment processing
```

## 📦 Package Management

### Install Dependencies
```bash
npm install
```

### Install Package-Specific Dependencies
```bash
npm install -w packages/common
npm install -w apps/customer-web
npm install -w apps/admin-web
```

### Development Commands

```bash
# Dev mode (both apps)
npm run dev

# Build all
npm run build

# Dev customer app only
npm run dev -w apps/customer-web

# Dev admin app only
npm run dev -w apps/admin-web
```

## 🚢 Deploy to Production

### Build
```bash
npm run build
```

### Customer Web
```bash
npm --prefix apps/customer-web run build
# Serve with any static hosting (Vercel, Netlify, etc.)
```

### Admin Web
```bash
npm --prefix apps/admin-web run build
# Serve with any static hosting
```

## 🔐 Environment Variables

Create `.env` files in each app directory if needed:

```env
REACT_APP_API_URL=http://localhost:4000
REACT_APP_WS_URL=ws://localhost:4000
```

## 📚 Component Library (Common)

### Button Component
```tsx
import Button from '@enatega/common/src/components/Button';

<Button 
  variant="primary"      // 'primary' | 'secondary' | 'outline' | 'text'
  size="md"              // 'sm' | 'md' | 'lg'
  onClick={handleClick}
  disabled={false}
  fullWidth={false}
>
  Click Me
</Button>
```

### Constants & Types
```tsx
import { COLORS, ROUTES, STORAGE_KEYS } from '@enatega/common/src/constants';

// Available in common:
- COLORS (5+ color variants)
- SPACING (5+ preset sizes)
- FONTS (size presets)
- BREAKPOINTS (responsive design)
- ROUTES (all app routes)
- STORAGE_KEYS (localStorage keys)
- ORDER_STATUS (order states)
- PAYMENT_METHODS (payment options)
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process using port 3000
lsof -i :3000
kill -9 <PID>

# Or use different ports
npm run dev -- --port 4000
```

### Build issues
```bash
# Clear cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules
npm install
```

### Vite issues
```bash
# Clear Vite cache
rm -rf .vite

# Rebuild
npm run build
```

## 📖 Further Development

The app is ready for:
- Backend API integration (GraphQL)
- Payment gateway integration (Stripe, PayPal)
- Real-time features (Socket.io, WebSocketsv)
- Push notifications
- Mobile app versions
- Additional pages and features

## 📄 License

This is a reconstructed educational version of Enatega.

## 🤝 Support

For issues with the build, refer to:
- Documentation in root: `ARCHITECTURE_ANALYSIS.md`, `QUICK_REFERENCE.md`, `COMPONENT_&_DATA_FLOW.md`
- Original app at: `C:\Projects\enatega\food-delivery-multivendor`
- Vite docs: https://vitejs.dev
- React docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com

---

**Status:** ✅ Ready to run locally and develop!

Start with `npm install && npm run dev` and visit `http://localhost:3000` to see the customer app.
