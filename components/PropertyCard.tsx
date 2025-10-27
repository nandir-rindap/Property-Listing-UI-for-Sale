"use client";

import { MapPin, Bed, Bath, Wifi, Car, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export interface Property {
  id: string;
  title: string;
  location: string;
  distance: string;
  price: number;
  roomType: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  amenities: string[];
  available: boolean;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 group" data-testid={`card-property-${property.id}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm hover:bg-white"
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
            console.log('Favorite toggled', property.id);
          }}
          data-testid={`button-favorite-${property.id}`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
        {property.available && (
          <Badge className="absolute top-2 left-2 bg-green-600 text-white">
            Available Now
          </Badge>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold mb-1 line-clamp-1" data-testid={`text-title-${property.id}`}>
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{property.location}</span>
            <span>•</span>
            <span>{property.distance}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms} bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms} bath</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          {property.amenities.includes('WiFi') && (
            <Badge variant="secondary" className="text-xs">
              <Wifi className="h-3 w-3 mr-1" />
              WiFi
            </Badge>
          )}
          {property.amenities.includes('Parking') && (
            <Badge variant="secondary" className="text-xs">
              <Car className="h-3 w-3 mr-1" />
              Parking
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold" data-testid={`text-price-${property.id}`}>
              ₦{(property.price * 12).toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">/year</span>
          </div>
          <Button asChild size="sm" data-testid={`button-view-${property.id}`}>
            <Link href={`/property/${property.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}