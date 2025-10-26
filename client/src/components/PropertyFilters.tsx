import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface PropertyFiltersProps {
  onFiltersChange?: (filters: any) => void;
}

export default function PropertyFilters({ onFiltersChange }: PropertyFiltersProps) {
  const [priceRange, setPriceRange] = useState([500, 2000]);
  const [distance, setDistance] = useState("5");
  const [roomTypes, setRoomTypes] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);

  const handleRoomTypeChange = (type: string, checked: boolean) => {
    const updated = checked 
      ? [...roomTypes, type]
      : roomTypes.filter(t => t !== type);
    setRoomTypes(updated);
    console.log('Room types updated:', updated);
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const updated = checked
      ? [...amenities, amenity]
      : amenities.filter(a => a !== amenity);
    setAmenities(updated);
    console.log('Amenities updated:', updated);
  };

  const handleApplyFilters = () => {
    const filters = { priceRange, distance, roomTypes, amenities };
    console.log('Applying filters:', filters);
    onFiltersChange?.(filters);
  };

  const handleClearFilters = () => {
    setPriceRange([500, 2000]);
    setDistance("5");
    setRoomTypes([]);
    setAmenities([]);
    console.log('Filters cleared');
  };

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
      </div>

      <div className="space-y-2">
        <Label>Price Range</Label>
        <div className="pt-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={3000}
            step={50}
            className="mb-2"
            data-testid="slider-price"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="distance">Distance from University</Label>
        <Select value={distance} onValueChange={setDistance}>
          <SelectTrigger id="distance" data-testid="select-distance">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0.5">Within 0.5 miles</SelectItem>
            <SelectItem value="1">Within 1 mile</SelectItem>
            <SelectItem value="2">Within 2 miles</SelectItem>
            <SelectItem value="5">Within 5 miles</SelectItem>
            <SelectItem value="any">Any distance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label>Room Type</Label>
        {['Studio', '1 Bedroom', '2 Bedroom', 'Shared'].map((type) => (
          <div key={type} className="flex items-center space-x-2">
            <Checkbox
              id={type}
              checked={roomTypes.includes(type)}
              onCheckedChange={(checked) => handleRoomTypeChange(type, checked as boolean)}
              data-testid={`checkbox-${type.toLowerCase().replace(' ', '-')}`}
            />
            <label
              htmlFor={type}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {type}
            </label>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <Label>Amenities</Label>
        {['WiFi', 'Parking', 'Laundry', 'Furnished', 'Pet-friendly', 'Utilities Included'].map((amenity) => (
          <div key={amenity} className="flex items-center space-x-2">
            <Checkbox
              id={amenity}
              checked={amenities.includes(amenity)}
              onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
              data-testid={`checkbox-${amenity.toLowerCase().replace(' ', '-')}`}
            />
            <label
              htmlFor={amenity}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {amenity}
            </label>
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-4">
        <Button onClick={handleApplyFilters} className="flex-1" data-testid="button-apply-filters">
          Apply Filters
        </Button>
        <Button onClick={handleClearFilters} variant="outline" className="flex-1" data-testid="button-clear-filters">
          Clear All
        </Button>
      </div>
    </Card>
  );
}