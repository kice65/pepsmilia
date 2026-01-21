import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  { title: "How to Get Your Study Permit for Canada", slug: "study-permit-canada" },
  { title: "Top Countries for Skilled Workers in 2026", slug: "skilled-worker-countries" },
  { title: "Step-by-Step USA Work Visa Guide", slug: "usa-work-visa-guide" },
  { title: "UK Immigration Options for Students", slug: "uk-immigration-students" },
  { title: "Permanent Residency Tips for Australia", slug: "australia-pr-tips" },
];

export default function Blogs() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.02 }} className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <Link href={`/blogs/${post.slug}`} className="text-blue-600">Read More →</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
