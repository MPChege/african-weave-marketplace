
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, CreditCard, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Account = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-chen-sand/50 flex items-center justify-center">
                    <User className="text-chen-brown" />
                  </div>
                  <div>
                    <CardTitle>Jane Doe</CardTitle>
                    <CardDescription>jane.doe@example.com</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col border-t">
                  <AccountMenuItem 
                    href="/account" 
                    icon={<User size={18} />} 
                    label="Account Information" 
                    active 
                  />
                  <AccountMenuItem 
                    href="/orders" 
                    icon={<Package size={18} />} 
                    label="My Orders" 
                  />
                  <AccountMenuItem 
                    href="/wishlist" 
                    icon={<Heart size={18} />} 
                    label="Wishlist" 
                  />
                  <AccountMenuItem 
                    href="/payment-methods" 
                    icon={<CreditCard size={18} />} 
                    label="Payment Methods" 
                  />
                  <AccountMenuItem 
                    href="/" 
                    icon={<LogOut size={18} />} 
                    label="Sign Out" 
                    className="text-destructive"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Account Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-serif font-semibold mb-8">Account Settings</h1>
            
            <Tabs defaultValue="profile">
              <TabsList className="mb-8">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="address">Addresses</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                          <input
                            type="text"
                            id="firstName"
                            defaultValue="Jane"
                            className="w-full px-3 py-2 border rounded-md"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                          <input
                            type="text"
                            id="lastName"
                            defaultValue="Doe"
                            className="w-full px-3 py-2 border rounded-md"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <input
                            type="email"
                            id="email"
                            defaultValue="jane.doe@example.com"
                            className="w-full px-3 py-2 border rounded-md"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            defaultValue="+1 (555) 123-4567"
                            className="w-full px-3 py-2 border rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button type="submit">Save Changes</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="address">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Addresses</CardTitle>
                    <CardDescription>Manage your shipping and billing addresses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="inline-block bg-chen-sand/30 text-chen-brown text-xs font-medium px-2 py-1 rounded mb-2">
                              Default Address
                            </span>
                            <h3 className="font-medium">Home</h3>
                          </div>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-destructive">Delete</Button>
                          </div>
                        </div>
                        <p className="text-sm">Jane Doe</p>
                        <p className="text-sm">123 Main Street</p>
                        <p className="text-sm">Apt 4B</p>
                        <p className="text-sm">New York, NY 10001</p>
                        <p className="text-sm">United States</p>
                        <p className="text-sm">+1 (555) 123-4567</p>
                      </div>
                      
                      <Button variant="outline">
                        Add New Address
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how we contact you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Order Updates</h3>
                          <p className="text-sm text-muted-foreground">Receive notifications about your orders</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-chen-brown"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Promotional Emails</h3>
                          <p className="text-sm text-muted-foreground">Receive emails about new products and offers</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-chen-brown"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">SMS Notifications</h3>
                          <p className="text-sm text-muted-foreground">Receive text message updates about your orders</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-chen-brown"></div>
                        </label>
                      </div>
                      
                      <Button>Save Preferences</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const AccountMenuItem = ({ 
  href, 
  icon, 
  label, 
  active = false,
  className = ""
}: { 
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  className?: string;
}) => (
  <Link
    to={href}
    className={`flex items-center gap-3 px-6 py-3 hover:bg-chen-sand/10 transition-colors ${active ? 'bg-chen-sand/20' : ''} ${className}`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default Account;
