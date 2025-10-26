import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Upload, X, Plus, Wifi, Car, Wind, Droplets, Home, Zap, Shield, Dog, Utensils, Waves, Tv, Dumbbell, Package } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const availableIcons = [
  { name: 'Wifi', icon: Wifi },
  { name: 'Car', icon: Car },
  { name: 'Wind', icon: Wind },
  { name: 'Droplets', icon: Droplets },
  { name: 'Home', icon: Home },
  { name: 'Zap', icon: Zap },
  { name: 'Shield', icon: Shield },
  { name: 'Dog', icon: Dog },
  { name: 'Utensils', icon: Utensils },
  { name: 'Waves', icon: Waves },
  { name: 'Tv', icon: Tv },
  { name: 'Dumbbell', icon: Dumbbell },
  { name: 'Package', icon: Package },
];

interface CustomAmenity {
  name: string;
  icon: string;
}

export default function PropertyUploadForm() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    roomType: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    deposit: "",
    description: "",
    amenities: [] as string[],
  });
  const [customAmenities, setCustomAmenities] = useState<CustomAmenity[]>([]);
  const [newAmenityName, setNewAmenityName] = useState("");
  const [newAmenityIcon, setNewAmenityIcon] = useState("Wifi");

  const handleSubmit = () => {
    console.log('Property submitted:', formData, 'Custom amenities:', customAmenities);
    toast({
      title: "Property Listed!",
      description: "Your property has been successfully added.",
    });
    setStep(1);
    setFormData({
      title: "",
      address: "",
      roomType: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      deposit: "",
      description: "",
      amenities: [],
    });
    setCustomAmenities([]);
  };

  const handleAddAmenity = () => {
    if (newAmenityName.trim()) {
      setCustomAmenities([...customAmenities, { name: newAmenityName, icon: newAmenityIcon }]);
      setNewAmenityName("");
      setNewAmenityIcon("Wifi");
    }
  };

  const handleRemoveAmenity = (index: number) => {
    setCustomAmenities(customAmenities.filter((_, i) => i !== index));
  };

  const handleAmenityToggle = (amenity: string, checked: boolean) => {
    setFormData({
      ...formData,
      amenities: checked
        ? [...formData.amenities, amenity]
        : formData.amenities.filter(a => a !== amenity)
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  s === step
                    ? "border-primary bg-primary text-primary-foreground"
                    : s < step
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-muted bg-background text-muted-foreground"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div className={`h-0.5 flex-1 mx-2 ${s < step ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            {step === 1 && "Property Details"}
            {step === 2 && "Photos & Amenities"}
            {step === 3 && "Pricing & Availability"}
          </h2>
        </div>
      </div>

      <Card className="p-6">
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Property Title</Label>
              <Input
                id="title"
                placeholder="e.g., Cozy Studio Near Campus"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                data-testid="input-title"
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="123 Main St, City, State"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                data-testid="input-address"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="roomType">Room Type</Label>
                <Select value={formData.roomType} onValueChange={(value) => setFormData({ ...formData, roomType: value })}>
                  <SelectTrigger id="roomType" data-testid="select-room-type">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1br">1 Bedroom</SelectItem>
                    <SelectItem value="2br">2 Bedroom</SelectItem>
                    <SelectItem value="shared">Shared</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Input
                  id="bedrooms"
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                  data-testid="input-bedrooms"
                />
              </div>
              <div>
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Input
                  id="bathrooms"
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                  data-testid="input-bathrooms"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your property..."
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                data-testid="input-description"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <Label>Property Photos</Label>
              <div className="mt-2 border-2 border-dashed rounded-lg p-8 text-center hover-elevate active-elevate-2">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG up to 10MB
                </p>
                <Button variant="outline" className="mt-4" data-testid="button-upload-photos">
                  Choose Files
                </Button>
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Standard Amenities</Label>
              <div className="grid grid-cols-2 gap-3">
                {['WiFi', 'Parking', 'Laundry', 'Furnished', 'Pet-friendly', 'Utilities Included', 'Air Conditioning', 'Heating'].map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox
                      id={`amenity-${amenity}`}
                      checked={formData.amenities.includes(amenity)}
                      onCheckedChange={(checked) => handleAmenityToggle(amenity, checked as boolean)}
                      data-testid={`checkbox-amenity-${amenity.toLowerCase().replace(' ', '-')}`}
                    />
                    <label
                      htmlFor={`amenity-${amenity}`}
                      className="text-sm font-medium leading-none"
                    >
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 border-t pt-6">
              <Label className="mb-3 block">Custom Amenities</Label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="Amenity name (e.g., Pool, Gym)"
                    value={newAmenityName}
                    onChange={(e) => setNewAmenityName(e.target.value)}
                    data-testid="input-custom-amenity-name"
                  />
                </div>
                <div className="w-32">
                  <Select value={newAmenityIcon} onValueChange={setNewAmenityIcon}>
                    <SelectTrigger data-testid="select-amenity-icon">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {availableIcons.map((icon) => (
                        <SelectItem key={icon.name} value={icon.name}>
                          <div className="flex items-center gap-2">
                            <icon.icon className="h-4 w-4" />
                            <span>{icon.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleAddAmenity}
                  data-testid="button-add-amenity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {customAmenities.length > 0 && (
                <div className="space-y-2 mt-3">
                  {customAmenities.map((amenity, index) => {
                    const IconComponent = availableIcons.find(i => i.name === amenity.icon)?.icon || Wifi;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 border rounded-md bg-muted/30"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{amenity.name}</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveAmenity(index)}
                          data-testid={`button-remove-amenity-${index}`}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Monthly Rent (₦)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="850000"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  data-testid="input-price"
                />
              </div>
              <div>
                <Label htmlFor="deposit">Security Deposit (₦)</Label>
                <Input
                  id="deposit"
                  type="number"
                  placeholder="850000"
                  value={formData.deposit}
                  onChange={(e) => setFormData({ ...formData, deposit: e.target.value })}
                  data-testid="input-deposit"
                />
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg mt-6">
              <h3 className="font-semibold mb-3">Property Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Title:</span>
                  <span className="font-medium">{formData.title || "Not set"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Address:</span>
                  <span className="font-medium">{formData.address || "Not set"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">{formData.roomType || "Not set"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Rent:</span>
                  <span className="font-medium">₦{formData.price ? Number(formData.price).toLocaleString() : "0"}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6 pt-6 border-t gap-3">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            data-testid="button-previous"
          >
            Previous
          </Button>
          {step < 3 ? (
            <Button
              onClick={() => setStep(Math.min(3, step + 1))}
              data-testid="button-next"
            >
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} data-testid="button-submit">
              Publish Property
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}