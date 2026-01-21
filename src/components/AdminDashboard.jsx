import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      setBookings(querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    };
    fetchData();
  }, []);

  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      <div className="grid gap-4">
        {bookings.map(b => (
          <div key={b.id} className="bg-white/10 p-4 rounded-xl">
            <p><strong>Name:</strong> {b.name}</p>
            <p><strong>Email:</strong> {b.email}</p>
            <p><strong>Message:</strong> {b.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
