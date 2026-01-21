"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const snapshot = await getDocs(collection(db, "bookings"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Booking) }));
      setBookings(data);
      setLoading(false);
    };
    fetchBookings();
  }, []);

  const markPaid = async (id: string) => {
    const bookingRef = doc(db, "bookings", id);
    await updateDoc(bookingRef, { paid: true });
    setBookings(prev => prev.map(b => (b.id === id ? { ...b, paid: true } : b)));
  };

  if (loading) return <p className="text-center mt-10">Loading bookings...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Message</th>
            <th className="border px-4 py-2">Paid</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{b.name}</td>
              <td className="border px-4 py-2">{b.email}</td>
              <td className="border px-4 py-2">{b.message}</td>
              <td className="border px-4 py-2">{b.paid ? "✅" : "❌"}</td>
              <td className="border px-4 py-2">
                {!b.paid && (
                  <button onClick={() => markPaid(b.id)} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                    Mark Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
