import { useState } from "react";
import PropertyUploadForm from "@/components/PropertyUploadForm";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Eye, MessageSquare, TrendingUp, MoreVertical, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// TODO: remove mock functionality
import bedroom1 from "@assets/stock_images/cozy_bedroom_interio_77d4ad42.jpg";
import kitchen1 from "@assets/stock_images/modern_kitchen_apart_a7bb1661.jpg";
import bedroom2 from "@assets/stock_images/cozy_bedroom_interio_c99d0ed3.jpg";

const mockProperties = [
  {
    id: '1',
    title: 'Modern Studio Apartment',
    address: '123 University Ave',
    type: 'Studio',
    price: 850,
    status: 'active',
    views: 234,
    inquiries: 12,
    image: bedroom1,
  },
  {
    id: '2',
    title: 'Spacious 1BR with Balcony',
    address: '456 Campus Rd',
    type: '1 Bedroom',
    price: 1200,
    status: 'active',
    views: 189,
    inquiries: 8,
    image: kitchen1,
  },
  {
    id: '3',
    title: 'Cozy Shared Room',
    address: '789 Student St',
    type: 'Shared',
    price: 550,
    status: 'inactive',
    views: 145,
    inquiries: 5,
    image: bedroom2,
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-4 md:py-8">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your property listings and bookings
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
              <TabsTrigger value="properties" data-testid="tab-properties">My Properties</TabsTrigger>
              <TabsTrigger value="upload" data-testid="tab-upload">Upload Property</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Total Properties</span>
                    <Home className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground mt-1">2 active listings</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Total Views</span>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-3xl font-bold">568</div>
                  <p className="text-xs text-green-600 mt-1">+12% from last month</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Inquiries</span>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-3xl font-bold">25</div>
                  <p className="text-xs text-green-600 mt-1">+8% from last month</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Revenue</span>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-3xl font-bold">$2,600</div>
                  <p className="text-xs text-muted-foreground mt-1">Per month</p>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <div>
                        <p className="font-medium">New inquiry for Modern Studio Apartment</p>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <div>
                        <p className="font-medium">Property viewed 15 times today</p>
                        <p className="text-sm text-muted-foreground">5 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <div>
                        <p className="font-medium">Booking request for Spacious 1BR</p>
                        <p className="text-sm text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="properties" className="space-y-6">
              <div className="space-y-4">
                {mockProperties.map((property) => (
                  <Card key={property.id} className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-24 h-24 rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{property.title}</h3>
                          <Badge variant={property.status === 'active' ? 'default' : 'secondary'}>
                            {property.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{property.address}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">
                            {property.type}
                          </span>
                          <span className="font-semibold">${property.price}/mo</span>
                          <span className="text-muted-foreground flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {property.views}
                          </span>
                          <span className="text-muted-foreground flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {property.inquiries}
                          </span>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" data-testid={`button-menu-${property.id}`}>
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem data-testid={`button-edit-${property.id}`}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive" data-testid={`button-delete-${property.id}`}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upload">
              <PropertyUploadForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}