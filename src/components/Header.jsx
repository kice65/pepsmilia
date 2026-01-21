"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">PEPSMILIA</h1>
        <nav className={`flex gap-4 md:flex ${menuOpen ? "block" : "hidden md:flex"}`}>
          <Link href="#home">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#booking">Booking</Link>
          <Link href="#blogs">Blogs</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#login">Login</Link>
          <Link href="#register">Register</Link>
        </nav>
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 h-0.5 bg-white my-1"></div>
          <div className="w-6 h-0.5 bg-white my-1"></div>
          <div className="w-6 h-0.5 bg-white my-1"></div>
        </div>
      </div>
    </header>
  );
}
