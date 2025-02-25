
'use client'
import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from 'next/image'

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Acerca de Nosotros", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Servicios", href: "#services" },
  { name: "Contacto", href: "#pricing" },

];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const cn=(...inputs: ClassValue[])=> {
    return twMerge(clsx(inputs));}

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="text-primary text-2xl font-bold px-[50px]">
              <Image src="/images/logo.png" width="100" height="100" alt="MD Servicios & Proyectos" className="h-12" />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden",
            isOpen ? "block" : "hidden"
          )}
        >
          <div className="pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
