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
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  propertyTitle: string;
  monthlyPrice: number;
}

export default function BookingModal({ open, onOpenChange, propertyTitle, monthlyPrice }: BookingModalProps) {
  const { toast } = useToast();
  const [moveInDate, setMoveInDate] = useState<Date>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [idType, setIdType] = useState("");
  const [idFile, setIdFile] = useState<File | null>(null);
  
  const yearlyTotal = monthlyPrice * 12;

  const handleSubmit = (paymentType: 'now' | 'later') => {
    if (!idFile || !idType) {
      toast({
        title: "Missing Information",
        description: "Please upload your identification document to proceed.",
        variant: "destructive",
      });
      return;
    }
    
    console.log('Booking request:', { name, email, phone, message, moveInDate, idType, idFile, paymentType });
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
    setMoveInDate(undefined);
    setIdType("");
    setIdFile(null);
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

          <div>
            <Label>Preferred Move-in Date</Label>
            <div className="mt-2 border rounded-lg p-3">
              <Calendar
                mode="single"
                selected={moveInDate}
                onSelect={setMoveInDate}
                className="rounded-md"
                disabled={(date) => date < new Date()}
              />
            </div>
          </div>

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

          <div className="space-y-3 p-4 border rounded-lg bg-muted/50">
            <div className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              <Label className="text-base font-semibold">Identification Verification Required</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Please upload a photo of one of the following identification documents to proceed with booking:
            </p>
            <div>
              <Label htmlFor="id-type">ID Type</Label>
              <Select value={idType} onValueChange={setIdType}>
                <SelectTrigger id="id-type" data-testid="select-id-type">
                  <SelectValue placeholder="Select ID type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nin">NIN Slip</SelectItem>
                  <SelectItem value="voters_card">Voter's Card</SelectItem>
                  <SelectItem value="drivers_license">Driver's License</SelectItem>
                  <SelectItem value="passport">International Passport</SelectItem>
                  <SelectItem value="student_id">Student ID Card</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="id-upload">Upload ID Document</Label>
              <Input
                id="id-upload"
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setIdFile(e.target.files?.[0] || null)}
                data-testid="input-id-upload"
                className="cursor-pointer"
              />
              {idFile && (
                <p className="text-sm text-green-600 mt-1">
                  ✓ {idFile.name} uploaded
                </p>
              )}
            </div>
          </div>

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