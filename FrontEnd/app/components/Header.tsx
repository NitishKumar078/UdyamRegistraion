// app/components/Header.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  type: "link" | "dropdown";
  items?: string[];
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { name: "Home", href: "/", type: "link" },
    { name: "NIC Code", href: "/nic-code", type: "link" },
    {
      name: "Useful Documents",
      href: "#",
      type: "dropdown",
      items: [
        "Important",
        "Udyam Registration Benefits",
        "Site Highlights",

        "Circulars & Orders",
        "Udyam Registration Sample form",
        "Udyam Registration Bulletin",
        "Metadata Compliance",
      ],
    },
    {
      name: "Print / Verify",
      href: "#",
      type: "dropdown",
      items: ["Print Certificate", "Verify Registration", "Download Documents"],
    },
    {
      name: "Update Details",
      href: "#",
      type: "dropdown",
      items: ["Update Basic Info", "Update Bank Details", "Update Activities"],
    },
    {
      name: "Login",
      href: "#",
      type: "dropdown",
      items: ["Applicant Login", "Admin Login", "Officer Login"],
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (openDropdown) setOpenDropdown(null);
  };

  // Close dropdown on outside click (for desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#4638c7] shadow-lg sticky top-0 z-50">
      {/* Top section with logo and title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <Link
              href="/"
              className="text-white hover:opacity-90 transition-opacity flex items-center space-x-3"
            >
              <div className="flex-shrink-0">
                <Image
                  src="/MINISTRY_NAME.webp"
                  alt="Logo"
                  width={300}
                  height={56.453}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Header */}
          <div
            className="hidden lg:flex items-center space-x-1"
            ref={dropdownRef}
          >
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() =>
                  item.type === "dropdown" && setOpenDropdown(item.name)
                }
                onMouseLeave={() =>
                  item.type === "dropdown" && setOpenDropdown(null)
                }
              >
                {item.type === "link" ? (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-white underline-animate transition-colors duration-200 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className="flex items-center px-3 py-2 text-white underline-animate transition-colors duration-200 text-sm font-medium"
                      aria-expanded={openDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === item.name && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-100 overflow-hidden">
                        <div className="py-2">
                          {item.items?.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:bg-white hover:bg-opacity-10 p-2 rounded-md transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-purple-800 border-t border-purple-500 shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1 max-w-7xl mx-auto">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.type === "link" ? (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-white hover:bg-white hover:bg-opacity-10 rounded-md transition-colors duration-200 text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown((prev) =>
                          prev === `mobile-${item.name}`
                            ? null
                            : `mobile-${item.name}`
                        )
                      }
                      className="flex items-center justify-between w-full px-3 py-2 text-white hover:bg-white hover:bg-opacity-10 rounded-md transition-colors duration-200 text-base font-medium"
                      aria-expanded={openDropdown === `mobile-${item.name}`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openDropdown === `mobile-${item.name}`
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown Items */}
                    {openDropdown === `mobile-${item.name}` && (
                      <div className="pl-4 space-y-1 mt-1 bg-purple-900 bg-opacity-50 rounded-md ml-2 mr-2">
                        {item.items?.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-3 py-2 text-white text-sm hover:bg-white hover:bg-opacity-10 rounded-md transition-colors duration-200"
                            onClick={() => {
                              setOpenDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
