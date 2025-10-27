"use client";

import { useState } from "react";
import { Home, Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/images/logo.png" 
              alt="InTincity Homes" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold hidden sm:inline">InTincity Homes</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2">
              <span className={pathname === "/" ? "text-foreground" : "text-muted-foreground"}>
                Home
              </span>
            </Link>
            <Link href="/properties" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2">
              <span className={pathname === "/properties" ? "text-foreground" : "text-muted-foreground"}>
                Browse Properties
              </span>
            </Link>
            <Link href="/admin" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2">
              <span className={pathname === "/admin" ? "text-foreground" : "text-muted-foreground"}>
                Admin Dashboard
              </span>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/admin?tab=upload" className="hidden sm:block">
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
              >
                List Your Property
              </Button>
            </Link>
            
            <ThemeToggle />
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link 
                    href="/" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium hover-elevate active-elevate-2 rounded-md px-4 py-3"
                  >
                    <span className={pathname === "/" ? "text-foreground" : "text-muted-foreground"}>
                      Home
                    </span>
                  </Link>
                  <Link 
                    href="/properties" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium hover-elevate active-elevate-2 rounded-md px-4 py-3"
                  >
                    <span className={pathname === "/properties" ? "text-foreground" : "text-muted-foreground"}>
                      Browse Properties
                    </span>
                  </Link>
                  <Link 
                    href="/admin" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium hover-elevate active-elevate-2 rounded-md px-4 py-3"
                  >
                    <span className={pathname === "/admin" ? "text-foreground" : "text-muted-foreground"}>
                      Admin Dashboard
                    </span>
                  </Link>
                  <div className="border-t pt-4 mt-4">
                    <Link 
                      href="/admin?tab=upload" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block mb-3"
                    >
                      <Button 
                        variant="default" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
                      >
                        List Your Property
                      </Button>
                    </Link>
                    <Button variant="ghost" className="w-full justify-start" data-testid="button-account-mobile">
                      <User className="h-5 w-5 mr-2" />
                      Account
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            <Button variant="ghost" size="icon" className="hidden md:flex" data-testid="button-account">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}