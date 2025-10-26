# InTincity Homes - Student Property Listing Platform

## Overview

InTincity Homes is a React-based web application that connects students with safe, affordable off-campus housing near the University of Jos, Plateau State, Nigeria. The platform enables property discovery, detailed listings, filtering, and booking functionality with a focus on student-friendly design and accessibility.

**Core Features:**
- Property browsing with advanced search and filtering
- Detailed property pages with image galleries
- Booking system with flexible payment options
- Admin dashboard for property management
- Responsive design optimized for mobile and desktop

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, configured for fast HMR (Hot Module Replacement)
- Wouter for client-side routing (lightweight alternative to React Router)

**UI Component System:**
- Shadcn UI component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (light/dark mode support)
- Typography: Inter for headings/UI, Open Sans for body text
- Component architecture follows atomic design principles with reusable UI primitives

**State Management:**
- TanStack Query (React Query) for server state management and data fetching
- Local component state with React hooks for UI state
- Custom hooks for shared logic (e.g., `useIsMobile`, `useToast`)

**Design System:**
- Consistent spacing primitives (2, 4, 6, 8, 12, 16, 20, 24px units)
- Responsive breakpoints (mobile-first approach)
- Custom color system with HSL values for better theme control
- Shadow and elevation system for visual hierarchy

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- HTTP server created via Node's built-in `http` module
- Custom middleware for request logging and JSON parsing

**Data Layer:**
- In-memory storage implementation (`MemStorage` class) for development
- Interface-based storage abstraction (`IStorage`) allowing easy swap to persistent storage
- Prepared for PostgreSQL integration via Drizzle ORM

**API Design:**
- RESTful API structure with `/api` prefix for all endpoints
- Request/response logging middleware for debugging
- Error handling with detailed status codes

**Development Tools:**
- TSX for TypeScript execution in development
- ESBuild for production bundling
- Vite integration for serving frontend in development

### Database Schema

**Current Schema (Drizzle ORM):**
- `users` table with UUID primary keys, username/password authentication
- Schema defined in shared directory for type safety across frontend/backend
- Zod schemas generated from Drizzle schemas for runtime validation

**Planned Extensions:**
- Properties table (title, location, price, amenities, images)
- Bookings table (user-property relationships, payment status)
- Reviews/ratings system

**ORM Configuration:**
- Drizzle configured for PostgreSQL dialect
- Migrations output to `./migrations` directory
- Connection via environment variable `DATABASE_URL`

### Authentication & Authorization

**Current Implementation:**
- Basic user schema with username/password fields
- Prepared for session-based authentication with `connect-pg-simple`
- No active authentication flow implemented yet (development phase)

**Planned Security:**
- Bcrypt for password hashing
- Session management with PostgreSQL session store
- Role-based access control (students vs. property owners/admins)

## External Dependencies

### Third-Party UI Libraries

- **Radix UI:** Comprehensive set of accessible, unstyled component primitives (dialogs, dropdowns, tooltips, etc.)
- **Embla Carousel:** Touch-friendly carousel for property image galleries
- **Lucide React:** Icon library for consistent iconography
- **date-fns:** Date manipulation and formatting utilities

### Styling & Theming

- **Tailwind CSS:** Utility-first CSS framework with PostCSS processing
- **class-variance-authority:** Type-safe variant API for component styling
- **clsx & tailwind-merge:** Conditional class name handling and deduplication

### Form Management

- **React Hook Form:** Performant form state management with validation
- **@hookform/resolvers:** Integration layer for validation schemas
- **Zod:** TypeScript-first schema validation for forms and API contracts

### Database & ORM

- **Drizzle ORM:** Type-safe SQL ORM for PostgreSQL
- **drizzle-zod:** Automatic Zod schema generation from Drizzle schemas
- **@neondatabase/serverless:** Neon Database serverless driver for PostgreSQL
- **Drizzle Kit:** CLI tool for migrations and database management

### Build & Development Tools

- **Vite:** Next-generation frontend build tool
- **@vitejs/plugin-react:** React support for Vite with Fast Refresh
- **TypeScript:** Static type checking across the entire codebase
- **ESBuild:** Fast JavaScript/TypeScript bundler for production server code
- **@replit/vite-plugin-*:** Replit-specific development tools (error overlay, cartographer, dev banner)

### Asset Management

- Stock images stored in `attached_assets/stock_images/` directory
- Logo and branding assets in `attached_assets/`
- Vite alias configured for `@assets` path resolution

### Session & Storage

- **connect-pg-simple:** PostgreSQL session store for Express sessions (dependency present, not yet implemented)

### State & Data Fetching

- **@tanstack/react-query:** Asynchronous state management, caching, and data synchronization
- Custom query client configuration with infinite stale time and disabled refetching