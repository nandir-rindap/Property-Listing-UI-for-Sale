"use client";

import { useState } from "react";
import PropertyUploadForm from "@/components/PropertyUploadForm";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Eye, MessageSquare, TrendingUp, MoreVertical, Edit, Trash2, Users, DollarSign, Image as ImageIcon, Star, AlertCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// TODO: remove mock functionality
import bedroom1 from "@assets/stock_images/cozy_bedroom_interio_77d4ad42.jpg";
import kitchen1 from "@assets/stock_images/modern_kitchen_apart_a7bb1661.jpg";
import bedroom2 from "@assets/stock_images/cozy_bedroom_interio_c99d0ed3.jpg";

const mockProperties = [
  {
    id: '1',
    title: 'Modern Studio Apartment',
    address: '123 Rayfield Road, Jos',
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
    address: '456 Bauchi Road, Jos',
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
    address: '789 Angwan Rogo, Jos',
    type: 'Shared',
    price: 550,
    status: 'inactive',
    views: 145,
    inquiries: 5,
    image: bedroom2,
  },
];

const mockUsers = [
  { id: '1', name: 'Chidinma Okafor', email: 'chidinma@unijos.edu.ng', username: 'chidinma23', role: 'user', joined: '2024-01-15' },
  { id: '2', name: 'Ibrahim Mohammed', email: 'ibrahim@unijos.edu.ng', username: 'ibrahim_m', role: 'user', joined: '2024-02-10' },
  { id: '3', name: 'Blessing Yakubu', email: 'blessing@unijos.edu.ng', username: 'blessing_y', role: 'user', joined: '2024-03-05' },
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
            <TabsList className="flex-wrap h-auto">
              <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
              <TabsTrigger value="users" data-testid="tab-users">
                <Users className="h-4 w-4 mr-2" />
                Users
              </TabsTrigger>
              <TabsTrigger value="properties" data-testid="tab-properties">My Properties</TabsTrigger>
              <TabsTrigger value="pricing" data-testid="tab-pricing">
                <DollarSign className="h-4 w-4 mr-2" />
                Pricing
              </TabsTrigger>
              <TabsTrigger value="images" data-testid="tab-images">
                <ImageIcon className="h-4 w-4 mr-2" />
                Images
              </TabsTrigger>
              <TabsTrigger value="featured" data-testid="tab-featured">
                <Star className="h-4 w-4 mr-2" />
                Featured
              </TabsTrigger>
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
                  <div className="text-3xl font-bold">₦2,600,000</div>
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

            <TabsContent value="users" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">User Management</h3>
                <div className="space-y-4">
                  {mockUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-xs text-muted-foreground">@{user.username}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                        <span className="text-sm text-muted-foreground">Joined {user.joined}</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" data-testid={`button-user-menu-${user.id}`}>
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Change Role</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Suspend User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
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
                          <span className="font-semibold">₦{property.price.toLocaleString()}/mo</span>
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

            <TabsContent value="pricing" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Pricing Management</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Base Price (Studio)</label>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">₦750 - ₦1,200</span>
                        <Badge variant="outline">per month</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">1 Bedroom</label>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">₦950 - ₦1,650</span>
                        <Badge variant="outline">per month</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Shared Room</label>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">₦450 - ₦650</span>
                        <Badge variant="outline">per month</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Service Charge</label>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">10%</span>
                        <Badge variant="outline">commission</Badge>
                      </div>
                    </div>
                  </div>
                  <Button data-testid="button-update-pricing">Update Pricing Structure</Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Pay Later Options</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Set reservation fees for customers who choose to pay later
                </p>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="pay-later-24h">24 Hours Reservation Fee</Label>
                      <div className="flex items-center gap-3">
                        <div className="relative flex-1">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₦</span>
                          <Input
                            id="pay-later-24h"
                            type="number"
                            defaultValue="1000"
                            className="pl-8"
                            data-testid="input-pay-later-24h"
                          />
                        </div>
                        <Badge variant="outline" className="whitespace-nowrap">reservation fee</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Fee charged when customer selects 24-hour payment option
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="pay-later-48h">48 Hours Reservation Fee</Label>
                      <div className="flex items-center gap-3">
                        <div className="relative flex-1">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₦</span>
                          <Input
                            id="pay-later-48h"
                            type="number"
                            defaultValue="2000"
                            className="pl-8"
                            data-testid="input-pay-later-48h"
                          />
                        </div>
                        <Badge variant="outline" className="whitespace-nowrap">reservation fee</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Fee charged when customer selects 48-hour payment option
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                          How Pay Later Works
                        </p>
                        <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1 list-disc list-inside">
                          <li>Customer pays the reservation fee immediately</li>
                          <li>Full payment must be completed within the selected timeframe</li>
                          <li>Reservation fee is deducted from the total annual rent</li>
                          <li>If payment is not completed on time, reservation fee is forfeited</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button data-testid="button-update-pay-later">Save Pay Later Settings</Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="images" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Image Management</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {mockProperties.map((property) => (
                    <div key={property.id} className="relative group">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        className="w-full aspect-video object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center gap-2">
                        <Button size="icon" variant="secondary" data-testid={`button-edit-image-${property.id}`}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="destructive" data-testid={`button-delete-image-${property.id}`}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{property.title}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-4" data-testid="button-upload-images">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Upload More Images
                </Button>
              </Card>
            </TabsContent>

            <TabsContent value="featured" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Featured Properties Management</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage which properties appear as featured on the homepage
                </p>
                <div className="space-y-3">
                  {mockProperties.map((property) => (
                    <div key={property.id} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <img 
                          src={property.image} 
                          alt={property.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                          <p className="font-medium">{property.title}</p>
                          <p className="text-sm text-muted-foreground">{property.address}</p>
                        </div>
                      </div>
                      <Button 
                        variant={property.id === '1' || property.id === '2' ? 'default' : 'outline'}
                        size="sm"
                        data-testid={`button-toggle-featured-${property.id}`}
                      >
                        <Star className="h-4 w-4 mr-2" />
                        {property.id === '1' || property.id === '2' ? 'Featured' : 'Set as Featured'}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
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