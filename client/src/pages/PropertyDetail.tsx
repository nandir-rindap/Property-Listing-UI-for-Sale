import { useState } from "react";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  Wifi,
  Car,
  Wind,
  Droplets,
  Home,
  MessageCircle,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "wouter";

// TODO: remove mock functionality
import bedroom1 from "@assets/stock_images/cozy_bedroom_interio_77d4ad42.jpg";
import bedroom2 from "@assets/stock_images/cozy_bedroom_interio_c99d0ed3.jpg";
import bedroom3 from "@assets/stock_images/cozy_bedroom_interio_f806479a.jpg";
import kitchen1 from "@assets/stock_images/modern_kitchen_apart_a7bb1661.jpg";
import kitchen2 from "@assets/stock_images/modern_kitchen_apart_7439e746.jpg";
import bathroom from "@assets/stock_images/bathroom_interior_mo_0c6a3058.jpg";

const mockProperty = {
  id: '1',
  title: 'Modern Studio Apartment',
  location: 'Downtown District',
  address: '123 University Ave, Campus City, CA 12345',
  distance: '0.3 mi from University',
  price: 850,
  deposit: 850,
  roomType: 'Studio',
  bedrooms: 1,
  bathrooms: 1,
  sqft: 450,
  images: [bedroom1, kitchen1, bedroom2, kitchen2, bedroom3, bathroom],
  amenities: [
    { name: 'WiFi', icon: Wifi },
    { name: 'Parking', icon: Car },
    { name: 'Air Conditioning', icon: Wind },
    { name: 'Heating', icon: Droplets },
    { name: 'Furnished', icon: Home },
  ],
  description: 'Beautiful modern studio apartment perfect for students. Features a spacious layout with large windows providing plenty of natural light. The unit comes fully furnished with a comfortable bed, desk, and kitchenette. Located in the heart of the student district, you\'ll be walking distance to campus, restaurants, and entertainment.',
  available: true,
  availableFrom: 'August 1, 2025',
  owner: {
    name: 'Sarah Johnson',
    responseTime: '< 1 hour',
    responseRate: '98%',
  }
};

export default function PropertyDetail() {
  const [, params] = useRoute("/property/:id");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === mockProperty.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? mockProperty.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-4 md:py-8">
          <div className="mb-4 md:mb-6">
            <Link href="/properties" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to listings
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4 md:mb-6">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3 md:mb-4 group bg-muted">
                  <img
                    src={mockProperty.images[currentImageIndex]}
                    alt={mockProperty.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={prevImage}
                    data-testid="button-prev-image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={nextImage}
                    data-testid="button-next-image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {mockProperty.images.length}
                  </div>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                  {mockProperty.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-video rounded-md overflow-hidden border-2 transition-all hover-elevate bg-muted ${
                        index === currentImageIndex
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                      data-testid={`button-thumbnail-${index}`}
                    >
                      <img
                        src={image}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{mockProperty.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{mockProperty.address}</span>
                    <span>•</span>
                    <span>{mockProperty.distance}</span>
                  </div>
                </div>

                <Card className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Bedrooms</div>
                      <div className="flex items-center gap-2">
                        <Bed className="h-5 w-5" />
                        <span className="text-lg font-semibold">{mockProperty.bedrooms}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Bathrooms</div>
                      <div className="flex items-center gap-2">
                        <Bath className="h-5 w-5" />
                        <span className="text-lg font-semibold">{mockProperty.bathrooms}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Square Feet</div>
                      <div className="flex items-center gap-2">
                        <Maximize className="h-5 w-5" />
                        <span className="text-lg font-semibold">{mockProperty.sqft}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Available From</div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span className="text-sm font-semibold">Aug 1</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {mockProperty.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {mockProperty.amenities.map((amenity) => (
                      <div key={amenity.name} className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <amenity.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-1">
                    ${mockProperty.price}
                    <span className="text-lg text-muted-foreground font-normal">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ${mockProperty.deposit} security deposit
                  </div>
                </div>

                {mockProperty.available && (
                  <Badge className="mb-4 bg-green-600 text-white">
                    Available {mockProperty.availableFrom}
                  </Badge>
                )}

                <div className="space-y-3">
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => setBookingOpen(true)}
                    data-testid="button-request-booking"
                  >
                    Request to Book
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    data-testid="button-contact-owner"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Owner
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">Property Owner</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {mockProperty.owner.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{mockProperty.owner.name}</div>
                      <div className="text-sm text-muted-foreground">Property Owner</div>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response time:</span>
                      <span className="font-medium">{mockProperty.owner.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response rate:</span>
                      <span className="font-medium">{mockProperty.owner.responseRate}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        propertyTitle={mockProperty.title}
        monthlyPrice={mockProperty.price}
      />

      <Footer />
    </div>
  );
}