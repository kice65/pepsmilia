import { getSession, signOut } from "next-auth/react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Dashboard({ bookings, session }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <button
        onClick={() => signOut({ callbackUrl: "/admin/login" })}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mb-6"
      >
        Logout
      </button>

      <h2 className="text-xl font-semibold mb-4">Bookings</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Service</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td className="border px-4 py-2">{b.name}</td>
              <td className="border px-4 py-2">{b.email}</td>
              <td className="border px-4 py-2">{b.service}</td>
              <td className="border px-4 py-2">{b.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: "/admin/login", permanent: false } };
  }

  const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  const bookings = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    date: doc.data().date || "",
  }));

  return { props: { session, bookings } };
}
