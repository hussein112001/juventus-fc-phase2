import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/">
            <a className="text-2xl font-bold hover:text-accent transition-colors">
              Juventus FC
            </a>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-2">
            <Link href="/">
              <a>
                <Button
                  variant={isActive("/") ? "default" : "ghost"}
                  className={isActive("/") ? "bg-accent text-primary" : "text-primary-foreground hover:text-accent"}
                >
                  Home
                </Button>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <Button
                  variant={isActive("/about") ? "default" : "ghost"}
                  className={isActive("/about") ? "bg-accent text-primary" : "text-primary-foreground hover:text-accent"}
                >
                  About
                </Button>
              </a>
            </Link>
            <Link href="/squad">
              <a>
                <Button
                  variant={isActive("/squad") ? "default" : "ghost"}
                  className={isActive("/squad") ? "bg-accent text-primary" : "text-primary-foreground hover:text-accent"}
                >
                  Squad
                </Button>
              </a>
            </Link>
            <Link href="/trophies">
              <a>
                <Button
                  variant={isActive("/trophies") ? "default" : "ghost"}
                  className={isActive("/trophies") ? "bg-accent text-primary" : "text-primary-foreground hover:text-accent"}
                >
                  Trophies
                </Button>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <Button
                  variant={isActive("/contact") ? "default" : "ghost"}
                  className={isActive("/contact") ? "bg-accent text-primary" : "text-primary-foreground hover:text-accent"}
                >
                  Contact
                </Button>
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-primary-foreground">
              ☰
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex flex-col gap-2 mt-4 border-t border-primary-foreground/20 pt-4">
          <Link href="/">
            <a>
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className="w-full justify-start"
              >
                Home
              </Button>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Button
                variant={isActive("/about") ? "default" : "ghost"}
                className="w-full justify-start"
              >
                About
              </Button>
            </a>
          </Link>
          <Link href="/squad">
            <a>
              <Button
                variant={isActive("/squad") ? "default" : "ghost"}
                className="w-full justify-start"
              >
                Squad
              </Button>
            </a>
          </Link>
          <Link href="/trophies">
            <a>
              <Button
                variant={isActive("/trophies") ? "default" : "ghost"}
                className="w-full justify-start"
              >
                Trophies
              </Button>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <Button
                variant={isActive("/contact") ? "default" : "ghost"}
                className="w-full justify-start"
              >
                Contact
              </Button>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
