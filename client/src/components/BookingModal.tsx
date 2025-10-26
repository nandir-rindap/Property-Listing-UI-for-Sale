import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  propertyTitle: string;
  monthlyPrice: number;
}

export default function BookingModal({ open, onOpenChange, propertyTitle, monthlyPrice }: BookingModalProps) {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const yearlyTotal = monthlyPrice * 12;

  const handleSubmit = (paymentType: 'now' | 'later') => {
    console.log('Booking request:', { name, email, phone, message, paymentType });
    toast({
      title: paymentType === 'now' ? "Processing Payment..." : "Booking Request Sent!",
      description: paymentType === 'now' 
        ? "You will be redirected to payment shortly." 
        : "The property owner will contact you for payment arrangement.",
    });
    onOpenChange(false);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Annual Booking Request</DialogTitle>
          <DialogDescription>
            {propertyTitle} - ₦{monthlyPrice.toLocaleString()}/month (₦{yearlyTotal.toLocaleString()}/year)
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-testid="input-booking-name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-booking-email"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                data-testid="input-booking-phone"
              />
            </div>
          </div>

          <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
            <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              All bookings are for a <strong>1-year lease period</strong>. Your move-in date will be scheduled after payment completion.
            </AlertDescription>
          </Alert>

          <div>
            <Label htmlFor="message">Message to Owner</Label>
            <Textarea
              id="message"
              placeholder="Tell the owner about yourself and why you're interested..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              data-testid="input-booking-message"
            />
          </div>

          <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertDescription className="text-amber-900 dark:text-amber-200">
              <div className="space-y-2">
                <p className="font-semibold">Identification Verification Required</p>
                <p className="text-sm">
                  Before you can complete your booking, you must upload a photo of one of the following valid identification documents:
                </p>
                <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                  <li>NIN Slip (National Identification Number)</li>
                  <li>Voter's Card</li>
                  <li>Driver's License</li>
                  <li>International Passport</li>
                  <li>Student ID Card</li>
                </ul>
                <p className="text-sm font-medium mt-2">
                  ID verification will be completed through your user profile before booking confirmation.
                </p>
              </div>
            </AlertDescription>
          </Alert>

          <div className="p-4 border rounded-lg bg-primary/5">
            <p className="text-sm font-medium mb-2">Booking Summary</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Rate:</span>
                <span className="font-medium">₦{monthlyPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-medium">1 Year (12 months)</span>
              </div>
              <div className="flex justify-between pt-2 border-t font-semibold">
                <span>Annual Total:</span>
                <span className="text-primary">₦{yearlyTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} data-testid="button-cancel-booking" className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button onClick={() => handleSubmit('later')} variant="secondary" data-testid="button-pay-later" className="w-full sm:w-auto">
            Pay Later
          </Button>
          <Button onClick={() => handleSubmit('now')} data-testid="button-pay-now" className="w-full sm:w-auto">
            Pay Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}