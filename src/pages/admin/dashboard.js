import { getSession, signOut } from "next-auth/react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Dashboard({ bookings, session }) {
  return (
    <div className="min-h-screen p-8 bg-brandGray">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-brandBlue font-heading">Admin Dashboard</h1>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="bg-brandRed text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border bg-white rounded-xl shadow-lg">
          <thead className="bg-brandLightBlue text-left">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Service</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-blue-50">
                <td className="border px-4 py-2">{b.name}</td>
                <td className="border px-4 py-2">{b.email}</td>
                <td className="border px-4 py-2">{b.service}</td>
                <td className="border px-4 py-2">{b.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) return { redirect: { destination: "/admin/login", permanent: false } };

  const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  const bookings = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    date: doc.data().date || "",
  }));

  return { props: { session, bookings } };
}
