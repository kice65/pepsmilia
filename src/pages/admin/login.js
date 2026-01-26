import { getCsrfToken } from "next-auth/react";

export default function Login({ csrfToken }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        method="post"
        action="/api/auth/callback/credentials"
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            name="username"
            type="text"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            name="password"
            type="password"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
