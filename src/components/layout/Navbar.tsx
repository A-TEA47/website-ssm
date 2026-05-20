"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Government", href: "/government" },
  { name: "Career", href: "/career" },
  { name: "SSM Academy", href: "/ssm-academy" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "glass-effect border-b border-border shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent border-b border-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex flex-col group">
            <span className="sr-only">Security Systems Management</span>
            <span className="text-xl font-bold tracking-tight text-foreground uppercase heading-premium transition-colors group-hover:text-purple-main">
              SSM Inc.
            </span>
            <span className="text-[10px] text-gradient-purple font-bold tracking-widest uppercase">
              Security Systems Management
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted hover:text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-5 xl:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-all duration-200 relative py-1",
                  isActive 
                    ? "text-purple-main after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-purple" 
                    : "text-muted hover:text-foreground after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-purple hover:after:w-full after:transition-all after:duration-300"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4 xl:gap-6">
          <a href="tel:5103639189" className="text-sm font-semibold leading-6 text-foreground flex items-center gap-2 hover:text-purple-main transition-colors whitespace-nowrap">
            <Phone className="w-4 h-4 text-purple-main" />
            (510) 363-9189
          </a>
          <Button asChild variant="primary" size="sm" className="whitespace-nowrap">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-surface px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold tracking-tight text-foreground uppercase heading-premium">
                  SSM Inc.
                </span>
                <span className="block text-[9px] text-gradient-purple font-bold tracking-widest uppercase">
                  Security Systems Management
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted hover:bg-surface-hover hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 flex flex-col gap-4">
                  <a href="tel:5103639189" className="text-base font-semibold leading-6 text-foreground flex items-center gap-2">
                    <Phone className="w-5 h-5 text-purple-main" />
                    (510) 363-9189
                  </a>
                  <Button asChild variant="primary" className="w-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                  <div className="flex justify-center mt-2">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


