"use client";

import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    console.log('Search triggered', { location, priceRange });
  };

  return (
    <div className="relative h-[450px] md:h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/modern_student_apart_14fceb4a.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-3 md:mb-4">
            Find Your Perfect Student Home
          </h1>
          <p className="text-base md:text-xl text-white/90">
            Safe, affordable off-campus housing near University of Jos, Plateau State
          </p>
        </div>

        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-xl">
          <div className="flex flex-col md:flex-row gap-2 md:gap-3">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Enter location in Jos, Plateau State" 
                className="pl-10 h-12"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                data-testid="input-location"
              />
            </div>
            <div className="flex-1">
              <Input 
                placeholder="Max price per month" 
                type="number"
                className="h-12"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                data-testid="input-price"
              />
            </div>
            <Button size="lg" className="h-12 px-8" onClick={handleSearch} data-testid="button-search">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}