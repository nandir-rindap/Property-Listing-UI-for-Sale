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
import { useToast } from "@/hooks/use-toast";

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

  const handleSubmit = () => {
    console.log('Booking request:', { name, email, phone, message, moveInDate });
    toast({
      title: "Booking Request Sent!",
      description: "The property owner will contact you soon.",
    });
    onOpenChange(false);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setMoveInDate(undefined);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request to Book</DialogTitle>
          <DialogDescription>
            {propertyTitle} - ${monthlyPrice}/month
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
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} data-testid="button-cancel-booking">
            Cancel
          </Button>
          <Button onClick={handleSubmit} data-testid="button-submit-booking">
            Send Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}