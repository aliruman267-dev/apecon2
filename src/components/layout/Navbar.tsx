import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { getServicesForNavbar } from "@/data/services";
import apeconLogo from "@/assets/apecon-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const serviceLinks = getServicesForNavbar();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: serviceLinks
    },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md nav-shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={apeconLogo} 
              alt="Apecon Security" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button 
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                      isActive(link.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(link.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <div 
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="bg-background rounded-lg shadow-lg border border-border p-2 min-w-[220px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:03337723292" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              0333 772 3292
            </a>
            <Button variant="hero" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block text-base font-medium transition-colors hover:text-primary ${
                      isActive(link.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="tel:03337723292" className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
                  <Phone className="h-4 w-4" />
                  0333 772 3292
                </a>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
