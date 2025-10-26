import { Home, Menu, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">StudentStay</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2">
              <span className={location === "/" ? "text-foreground" : "text-muted-foreground"}>
                Home
              </span>
            </Link>
            <Link href="/properties" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2">
              <span className={location === "/properties" ? "text-foreground" : "text-muted-foreground"}>
                Browse Properties
              </span>
            </Link>
            <Link href="/admin" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2">
              <span className={location === "/admin" ? "text-foreground" : "text-muted-foreground"}>
                Admin Dashboard
              </span>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex" data-testid="button-account">
              <User className="h-5 w-5" />
            </Button>
            <Button asChild className="hidden md:flex" data-testid="button-post-property">
              <Link href="/admin">
                <Plus className="h-4 w-4 mr-2" />
                Post Property
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}