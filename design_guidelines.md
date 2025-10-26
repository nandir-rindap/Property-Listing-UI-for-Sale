# Student Property Listing Platform - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Airbnb (property discovery), Zillow (search/filtering), and Booking.com (booking flow) while maintaining a student-friendly, accessible aesthetic.

**Design Principles**:
- Trust-building through transparency and clear property information
- Student-first affordability indicators and university proximity
- Visual clarity with high-quality property imagery
- Efficient search and comparison workflows

---

## Typography System

**Font Stack**: 
- Primary: Inter (Google Fonts) - Headings and UI elements
- Secondary: Open Sans (Google Fonts) - Body text and descriptions

**Hierarchy**:
- H1: text-5xl md:text-6xl, font-bold (Hero headlines)
- H2: text-3xl md:text-4xl, font-semibold (Section titles, property names)
- H3: text-2xl, font-semibold (Card headers, subsection titles)
- H4: text-xl, font-medium (Property features, amenities categories)
- Body Large: text-lg (Property descriptions, important info)
- Body: text-base (Standard content, listings)
- Small: text-sm (Metadata, secondary info, labels)
- Tiny: text-xs (Captions, timestamps)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Tight spacing: p-2, gap-2 (dense information, tags)
- Standard: p-4, gap-4, m-4 (cards, form elements)
- Generous: p-8, gap-8 (section padding, major separations)
- Hero/Major sections: py-16 md:py-24, px-4 md:px-8

**Container Widths**:
- Max content width: max-w-7xl mx-auto
- Property cards grid: max-w-6xl mx-auto
- Detail pages: max-w-5xl mx-auto
- Forms: max-w-2xl

---

## Component Library

### Navigation
**Primary Header** (Sticky):
- Logo (left), Search bar (center), Sign In/Post Property buttons (right)
- Height: h-16 md:h-20
- Includes location dropdown, price filter quick access
- Mobile: Hamburger menu with slide-out drawer

**Admin Dashboard Navigation**:
- Vertical sidebar (w-64) with dashboard, properties, bookings, analytics sections
- Collapsible on mobile to hamburger icon

### Property Cards
**Grid Layout**: 
- Desktop: grid-cols-3 (listing page)
- Tablet: grid-cols-2
- Mobile: grid-cols-1
- Gap: gap-6

**Card Structure**:
- Image carousel (aspect-ratio-4/3) with property photos
- Wishlist heart icon (top-right overlay on image)
- Property title (text-lg font-semibold)
- Location with distance from university (text-sm with map pin icon)
- Key amenities (3-4 icons: WiFi, parking, furnished, utilities)
- Price badge (text-2xl font-bold) with /month indicator
- Room type tag (Studio/1BR/Shared)
- "Available Now" or date badge
- Quick view and Book Now buttons

### Search & Filters
**Filter Sidebar** (Desktop: w-72, sticky):
- Price range slider (min/max with live update)
- Distance from university (dropdown with 0.5mi, 1mi, 2mi, 5mi options)
- Room type checkboxes (Studio, 1BR, 2BR, Shared)
- Amenities multi-select (WiFi, Parking, Laundry, Furnished, Pet-friendly, etc.)
- Availability calendar picker
- "Apply Filters" and "Clear All" buttons

**Mobile Filters**:
- Bottom sheet modal triggered by "Filters" button
- Scrollable filter sections with same options

### Property Detail Page
**Hero Section**:
- Large image gallery (60% width on desktop)
- Main image with thumbnail grid below (4-5 visible)
- "View all photos" button overlay (opens lightbox modal)
- Image gallery on left, booking card on right (sticky)

**Content Layout**:
- Property title and location (with Google Maps link)
- Host/landlord info card with avatar, name, response rate
- Quick facts grid (2-column): Bedrooms, Bathrooms, Square footage, Available from
- Amenities section (grid-cols-2 md:grid-cols-3 with icons)
- Description (max-w-prose)
- Location map (embedded, h-96)
- Similar properties carousel at bottom

**Booking Card** (Sticky on desktop):
- Price prominently displayed (text-4xl)
- Date picker (check-in/out)
- Guest counter
- Total price calculation
- "Request to Book" primary button
- "Contact Owner" secondary button
- Response time indicator

### Admin Dashboard
**Property Upload Form**:
- Multi-step wizard (3 steps: Details, Photos, Pricing)
- Step indicator at top
- Property details: Address autocomplete, room type, beds/baths
- Photo uploader with drag-and-drop zone (displays Unsplash images)
- Amenities checklist (comprehensive list)
- Pricing section: Monthly rent, deposit, utilities included toggle
- Availability calendar
- Preview mode before publishing

**Properties Management Table**:
- Columns: Thumbnail, Address, Type, Price, Status, Views, Inquiries, Actions
- Sortable headers
- Quick actions: Edit, Deactivate, Delete (icon buttons)
- Pagination at bottom

### Forms & Inputs
**Text Inputs**:
- Height: h-12
- Border: border rounded-lg
- Focus state with ring
- Label above (text-sm font-medium)
- Helper text below (text-xs)

**Buttons**:
- Primary: px-6 py-3, rounded-lg, font-semibold
- Secondary: Same size with outline variant
- Small: px-4 py-2
- Icon buttons: p-2 with hover state

**Hero Image Buttons** (for overlays):
- Background blur effect (backdrop-blur-sm bg-white/30)
- No hover/active states - button component handles its own interactions

### Modals & Overlays
**Photo Lightbox**:
- Full-screen overlay with navigation arrows
- Close button (top-right)
- Thumbnail strip at bottom
- Swipe gestures on mobile

**Booking Request Modal**:
- Center-aligned, max-w-lg
- Guest details form
- Message to owner textarea
- Submit button

---

## Images Strategy

### Hero Section - Homepage
**Large Hero Image**: Full-width hero (h-screen md:h-[600px]) featuring vibrant student housing imagery from Unsplash
- Search: "modern apartment interior student housing"
- Overlay: Gradient backdrop (from-black/50 to-transparent)
- Centered search interface with headline "Find Your Perfect Student Home"

### Property Listings
**Property Cards**: Each card uses 1 primary Unsplash image (aspect-ratio-4/3)
- Search queries: "apartment living room", "bedroom interior", "modern kitchen", "student apartment"
- Images should show well-lit, furnished spaces

### Property Detail Pages
**Gallery**: 6-8 Unsplash images per property
- Hero image: Property exterior or most attractive room
- Additional: Living room, bedroom, kitchen, bathroom, amenities, exterior views

### Admin Dashboard
**Empty States**: Illustration or icon-based empty state for new accounts
- "Upload your first property" with upload icon

### About Us / Marketing Pages
**Team Section**: Professional stock photos or abstract imagery (not critical for MVP)
**Trust Badges**: Icons for verified listings, secure payments, 24/7 support

---

## Page-Specific Layouts

### Homepage
1. **Hero Section** (full-width, h-[600px]): Large hero image with search bar overlay, headline, subheadline
2. **Featured Properties** (py-16): Grid of 6 property cards with "View All" button
3. **How It Works** (py-16, bg-gray-50): 3-column grid with icons, titles, descriptions
4. **Student Benefits** (py-16): 2-column alternating image-text sections highlighting affordability, location, safety
5. **Testimonials** (py-12): Carousel with student reviews, photos, university names
6. **CTA Section** (py-20): Bold call-to-action for property owners to list
7. **Footer**: 4-column layout - About, Properties, Support, Social links + newsletter signup

### Listing Page
- Sticky filters sidebar (left, w-72 on desktop)
- Results grid (right, flex-1)
- Map toggle view option
- Sort dropdown (Price, Distance, Newest)
- Results count and active filters chips at top

### Property Detail Page
- Image gallery + booking card layout (60/40 split on desktop)
- Stacked sections: Overview, Amenities, Location map, Reviews, Similar properties
- Sticky booking card throughout scroll

### Admin Dashboard
- Sidebar navigation (left, w-64)
- Main content area (right, flex-1)
- Top bar with notifications, profile
- Dashboard: Stats cards (4-column grid), recent activity, charts

---

## Accessibility & Usability

- All interactive elements have focus states with ring-2
- Form inputs include visible labels and error states
- Sufficient contrast ratios for text (WCAG AA minimum)
- Icon buttons include aria-labels
- Keyboard navigation fully supported
- Touch targets minimum 44x44px on mobile
- Loading states for async operations (skeleton screens)

---

## Animations

**Use Sparingly**:
- Smooth page transitions (fade-in on route changes)
- Card hover lift effect (subtle translate-y)
- Filter sidebar slide-in/out on mobile
- Image gallery transitions (crossfade)
- No parallax, no scroll-triggered animations, no excessive motion