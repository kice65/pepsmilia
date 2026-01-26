import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", date: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Booking successful!");
        setFormData({ name: "", email: "", service: "", date: "" });
      } else setStatus(`Error: ${data.error}`);
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brandGray p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-brandBlue font-heading">
          Book a Service
        </h2>

        <label className="block mb-2 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandLightBlue"
        />

        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandLightBlue"
        />

        <label className="block mb-2 font-semibold">Service</label>
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandLightBlue"
        >
          <option value="">Select a service</option>
          <option value="Consultation">Consultation</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Other">Other</option>
        </select>

        <label className="block mb-2 font-semibold">Preferred Date</label>
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandLightBlue"
        />

        <button
          type="submit"
          className="w-full bg-brandLightBlue text-white py-2 rounded-lg hover:bg-brandBlue transition mb-4"
        >
          Book Now
        </button>

        {status && (
          <p className="flex items-center justify-center text-center text-green-600 font-semibold">
            {status.includes("successful") && <CheckCircleIcon className="w-5 h-5 mr-2" />}
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
