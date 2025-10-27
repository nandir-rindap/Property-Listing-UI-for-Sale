"use client";

import Hero from "@/components/Hero";
import PropertyCard, { type Property } from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, MapPin, DollarSign } from "lucide-react";

import bedroom1 from "@assets/stock_images/cozy_bedroom_interio_77d4ad42.jpg";
import bedroom2 from "@assets/stock_images/cozy_bedroom_interio_c99d0ed3.jpg";
import bedroom3 from "@assets/stock_images/cozy_bedroom_interio_f806479a.jpg";
import kitchen1 from "@assets/stock_images/modern_kitchen_apart_a7bb1661.jpg";
import kitchen2 from "@assets/stock_images/modern_kitchen_apart_7439e746.jpg";
import apartment1 from "@assets/stock_images/apartment_building_e_1eafe140.jpg";

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
    image: bedroom1,
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
    image: kitchen1,
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
    image: bedroom2,
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
    image: kitchen2,
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
    image: bedroom3,
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
    image: apartment1,
    amenities: ['WiFi', 'Parking', 'Furnished'],
    available: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <section className="py-8 md:py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">
                Handpicked listings near University of Jos
              </p>
            </div>
            <Button asChild variant="outline" data-testid="button-view-all">
              <Link href="/properties">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose InTincity Homes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p className="text-muted-foreground">
                All properties are thoroughly verified for safety and quality standards
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Near Campus</h3>
              <p className="text-muted-foreground">
                Find housing within walking distance or a short commute to your university
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
              <p className="text-muted-foreground">
                Student-friendly pricing with transparent costs and no hidden fees
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
            Join thousands of students who found their ideal accommodation through InTincity Homes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-browse-properties">
              <Link href="/properties">
                Browse Properties
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-list-property">
              <Link href="/admin">
                List Your Property
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
