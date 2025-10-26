import PropertyCard from '../PropertyCard';
import bedroomImage from '@assets/stock_images/cozy_bedroom_interio_77d4ad42.jpg';

export default function PropertyCardExample() {
  const mockProperty = {
    id: '1',
    title: 'Cozy Studio Near Campus',
    location: 'Downtown',
    distance: '0.5 mi from University',
    price: 850,
    roomType: 'Studio',
    bedrooms: 1,
    bathrooms: 1,
    image: bedroomImage,
    amenities: ['WiFi', 'Parking', 'Furnished'],
    available: true,
  };

  return (
    <div className="p-8 max-w-sm">
      <PropertyCard property={mockProperty} />
    </div>
  );
}