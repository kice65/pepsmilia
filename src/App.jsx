import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Canada from "./pages/Canada.jsx";
import UK from "./pages/UK.jsx";
import USA from "./pages/USA.jsx";
import Australia from "./pages/Australia.jsx";
import Schengen from "./pages/Schengen.jsx";

import React from "react";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div>
      <BookingForm />
    </div>
  );
}




export default function App() {
  return (
    <div>

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-12 py-6">
        <h1 className="font-bold text-xl">PEPSMILIA</h1>

        <nav className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Testimonials</a>
          <a href="#">Blogs</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="flex gap-3">
          <button className="border px-4 py-1 rounded-full">Login</button>
          <button className="border px-4 py-1 rounded-full">Register</button>

          <a
  href="https://wa.me/2347038696763"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg"
>
  💬
</a>

        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center px-12 py-20 gap-12">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold">I’m Perpetua</h2>
          <p className="mt-2 text-lg">Your Trusted Immigration Consultant</p>

          <p className="mt-6 leading-relaxed">
            We guide you through every step of your immigration journey,
            from consultation to documentation and submission.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="border px-6 py-2 rounded-full">
              Explore Services
            </button>
            <button className="bg-accent px-6 py-2 rounded-full">
              Book Consultation
            </button>
          </div>
        </div>

        <img
          src="/hero.png"
          alt="Consultant"
          className="w-80 rounded-xl"
        />
      </section>

      {/* SERVICES */}
      <section className="px-12 py-20 text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2">
          Comprehensive immigration solutions tailored to your needs
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {[
            ["School Search", "Find the perfect institution"],
            ["Work Permit", "Get the paperwork done"],
            ["Permanent Residency", "Your pathway to settlement"],
            ["Visa Services", "Choose the right destination"]
          ].map(([title, desc]) => (
            <div
              key={title}
              className="border-2 border-accent rounded-xl p-6 text-left bg-white/5"
            >
              <h3 className="font-bold text-xl">{title}</h3>
              <p className="mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-12 py-20 text-center">
        <h2 className="text-3xl font-bold">Testimonial</h2>

        <div className="mt-10 bg-black/60 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="text-left">
            <p>
              “I’m grateful for the smooth and stress-free process.
              My dream to study in Canada became a reality.”
            </p>
            <p className="mt-4 font-semibold">
              Stephanie, CEO of Digitech
            </p>
          </div>

          <img
            src="/testimonial.png"
            className="w-40 rounded-full"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-12 py-12 bg-blue-900 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Ready to Start your Journey</h2>
        <button className="bg-accent px-6 py-2 rounded-full">
          Book Consultation
        </button>
      </section>

      {/* FOOTER */}
      <footer className="px-12 py-16 text-sm">
        <div className="grid md:grid-cols-4 gap-8">
          <h3 className="font-bold">PEPSMILIA</h3>

          <div>
            <h4 className="font-semibold mb-2">Menu</h4>
            <p>Home</p>
            <p>Blog</p>
            <p>Testimonials</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <p>School Search</p>
            <p>Study Visa</p>
            <p>Work Permit</p>
            <p>Permanent Residency</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Account</h4>
            <p>Login</p>
            <p>Register</p>
          </div>
        </div>

        <p className="text-center mt-10">
          perpetualchidera@gmail.com <br />
          © 2025 Pepsmilia Consult
        </p>
      </footer>

    </div>
  );
}
