"use client";
import { useState } from "react";

export default function VisaChecker() {
  const [country, setCountry] = useState("");
  const [purpose, setPurpose] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    // Simplified logic. Replace with real AI API later.
    if (country && purpose) {
      if (purpose === "study" && country === "Canada") {
        setResult("✅ Likely eligible for a study permit.");
      } else if (purpose === "work" && country === "Canada") {
        setResult("✅ Likely eligible for a work permit.");
      } else {
        setResult("⚠️ Please consult our expert for eligibility.");
      }
    } else {
      setResult("Please select both country and purpose.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto my-6">
      <h2 className="text-2xl font-bold mb-4">Visa Eligibility Checker</h2>
      <select value={country} onChange={e => setCountry(e.target.value)} className="p-2 border rounded w-full mb-4">
        <option value="">Select Country</option>
        <option value="Canada">Canada</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
      <select value={purpose} onChange={e => setPurpose(e.target.value)} className="p-2 border rounded w-full mb-4">
        <option value="">Select Purpose</option>
        <option value="study">Study</option>
        <option value="work">Work</option>
        <option value="tourist">Tourist</option>
      </select>
      <button onClick={handleCheck} className="bg-blue-600 text-white p-2 rounded w-full">Check Eligibility</button>
      {result && <p className="mt-4 text-gray-700 font-semibold">{result}</p>}
    </div>
  );
}
