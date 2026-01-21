"use client";

import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Booking {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: any;
  paid: boolean;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const snapshot = await getDocs(collection(db, "bookings"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Booking[];
      setBookings(data);
    };
    fetchBookings();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Bookings</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Message</th>
            <th className="p-2 border">Paid</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.id}>
              <td className="p-2 border">{b.name}</td>
              <td className="p-2 border">{b.email}</td>
              <td className="p-2 border">{b.message}</td>
              <td className="p-2 border">{b.paid ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
