"use client";

import { useState } from "react";
import PropertyCard, { type Property } from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Studio Apartment',
    location: 'Rayfield, Jos',
    distance: '0.3 mi from Unijos',
    price: 850,
    roomType: 'Studio',
    bedrooms: 1,
    bathrooms: 1,
    image: '/images/cozy_bedroom_interio_77d4ad42.jpg',
    amenities: ['WiFi', 'Parking', 'Furnished'],
    available: true,
  },
  {
    id: '2',
    title: 'Spacious 1BR with Balcony',
    location: 'Bauchi Road, Jos',
    distance: '0.5 mi from Unijos',
    price: 1200,
    roomType: '1 Bedroom',
    bedrooms: 1,
    bathrooms: 1,
    image: '/images/modern_kitchen_apart_a7bb1661.jpg',
    amenities: ['WiFi', 'Parking'],
    available: true,
  },
  {
    id: '3',
    title: 'Cozy Shared Room',
    location: 'Angwan Rogo, Jos',
    distance: '0.8 mi from Unijos',
    price: 550,
    roomType: 'Shared',
    bedrooms: 1,
    bathrooms: 1,
    image: '/images/cozy_bedroom_interio_c99d0ed3.jpg',
    amenities: ['WiFi', 'Furnished'],
    available: false,
  },
  {
    id: '4',
    title: 'Luxury 2BR Apartment',
    location: 'Vom Road, Jos',
    distance: '1.2 mi from Unijos',
    price: 1650,
    roomType: '2 Bedroom',
    bedrooms: 2,
    bathrooms: 2,
    image: '/images/modern_kitchen_apart_7439e746.jpg',
    amenities: ['WiFi', 'Parking', 'Furnished'],
    available: true,
  },
  {
    id: '5',
    title: 'Affordable Studio',
    location: 'Zaria Road, Jos',
    distance: '0.6 mi from Unijos',
    price: 750,
    roomType: 'Studio',
    bedrooms: 1,
    bathrooms: 1,
    image: '/images/cozy_bedroom_interio_f806479a.jpg',
    amenities: ['WiFi'],
    available: true,
  },
  {
    id: '6',
    title: 'Premium Apartment Complex',
    location: 'Plateau, Jos',
    distance: '0.4 mi from Unijos',
    price: 1400,
    roomType: '1 Bedroom',
    bedrooms: 1,
    bathrooms: 1,
    image: '/images/apartment_building_e_1eafe140.jpg',
    amenities: ['WiFi', 'Parking', 'Furnished'],
    available: true,
  },
  {
    id: '7',
    title: 'Student Housing Complex',
    location: 'Bukuru, Jos',
    distance: '0.7 mi from Unijos',
    price: 950,
    roomType: '1 Bedroom',
    bedrooms: 1,
    bathrooms: 1,
    image: '/images/apartment_building_e_521b87c3.jpg',
    amenities: ['WiFi', 'Furnished'],
    available: true,
  },
  {
    id: '8',
    title: 'Bright Living Space',
    location: 'Jos Main Market Area',
    distance: '1.0 mi from Unijos',
    price: 1100,
    roomType: 'Studio',
    bedrooms: 1,
    bathrooms: 1,
    image: '/images/modern_student_apart_14fceb4a.jpg',
    amenities: ['WiFi', 'Parking', 'Furnished'],
    available: true,
  },
];

export default function Properties() {
  const [sortBy, setSortBy] = useState("newest");
  const [properties] = useState(mockProperties);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-4 md:py-8">
          <div className="mb-4 md:mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Available Properties</h1>
            <p className="text-muted-foreground">
              {properties.length} properties available near University of Jos
            </p>
          </div>

          <div className="flex items-center justify-between mb-6 gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden" data-testid="button-filters-mobile">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <PropertyFilters />
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40" data-testid="select-sort">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-8">
            <aside className="hidden md:block w-72 flex-shrink-0">
              <div className="sticky top-24">
                <PropertyFilters />
              </div>
            </aside>

            <main className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
