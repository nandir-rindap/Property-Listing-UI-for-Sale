import { Home, Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = () => {
    console.log('Newsletter subscription:', email);
    setEmail("");
  };

  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Home className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">InTincity Homes</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting students with safe, affordable off-campus housing near universities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Properties</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/properties" className="hover:text-foreground">
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link href="/properties?type=studio" className="hover:text-foreground">
                  Studios
                </Link>
              </li>
              <li>
                <Link href="/properties?type=shared" className="hover:text-foreground">
                  Shared Rooms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@studentstay.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Get updates on new properties
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-newsletter"
              />
              <Button onClick={handleNewsletter} data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 InTincity Homes. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" data-testid="button-facebook">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-instagram">
              <Instagram className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}