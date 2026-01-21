"use client";

import { useState } from "react";
import { db } from "../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { stripePromise } from "../utils/stripe";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function BookingForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"" | "loading" | "success" | "error">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Save to Firestore
      await addDoc(collection(db, "bookings"), { ...form, createdAt: serverTimestamp(), paid: false });

      // Send EmailJS
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        form as Record<string, unknown>,
        process.env.EMAILJS_PUBLIC_KEY!
      );

      // Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) {
        setStatus("error");
        return;
      }

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      const checkoutResult = await stripe.redirectToCheckout({ sessionId: data.id });
      if (checkoutResult?.error) throw checkoutResult.error;

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-4 max-w-md mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={form.name}
        onChange={handleChange}
        className="p-3 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={handleChange}
        className="p-3 border rounded"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        value={form.message}
        onChange={handleChange}
        className="p-3 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white p-3 rounded">
        {status === "loading" ? "Processing..." : "Book & Pay"}
      </button>
      {status === "error" && <p className="text-red-500 mt-2">Error, please try again.</p>}
      {status === "success" && <p className="text-green-500 mt-2">Booking saved! Redirecting to payment...</p>}
    </form>
  );
}
