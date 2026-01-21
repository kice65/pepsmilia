"use client";
import { useEffect, useState } from "react";

export default function WhatsAppChat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000); // show after 2s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/15551234567?text=Hello%20Pepsmilia!%20I%20have%20a%20question"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6 mr-2" />
      Chat
    </a>
  );
}
