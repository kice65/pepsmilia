"use client";
import { useState } from "react";
import { db } from "../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "emailjs-com";
import { stripePromise } from "../utils/stripe";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "bookings"), { ...form, createdAt: serverTimestamp(), paid: false });
      await emailjs.send(process.env.EMAILJS_SERVICE_ID!, process.env.EMAILJS_TEMPLATE_ID!, form, process.env.EMAILJS_PUBLIC_KEY);
      
      const stripe = await stripePromise;
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form }),
      });
      const data = await res.json();
      await stripe?.redirectToCheckout({ sessionId: data.id });

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-4 max-w-md mx-auto">
      <input type="text" name="name" placeholder="Name" required value={form.name} onChange={handleChange} className="p-3 border rounded"/>
      <input type="email" name="email" placeholder="Email" required value={form.email} onChange={handleChange} className="p-3 border rounded"/>
      <textarea name="message" placeholder="Message" required value={form.message} onChange={handleChange} className="p-3 border rounded"/>
      <button type="submit" className="bg-blue-600 text-white p-3 rounded">{status === "loading" ? "Processing..." : "Book & Pay"}</button>
      {status === "error" && <p className="text-red-500">Error, try again</p>}
      {status === "success" && <p className="text-green-500">Booking saved! Redirecting to payment...</p>}
    </form>
  );
}
