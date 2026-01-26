import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, service, date } = req.body;

      const docRef = await addDoc(collection(db, "bookings"), {
        name,
        email,
        service,
        date,
        createdAt: serverTimestamp(),
      });

      res.status(200).json({ message: "Booking saved!", id: docRef.id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
