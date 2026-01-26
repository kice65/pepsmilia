import { motion } from "framer-motion";

export default function Testimonials() {
  const data = [
    {
      name: "Stephanie, CEO Digitech",
      message:
        "The team guided me from school selection to study permit approval, making my dream to study in Canada a reality.",
    },
    {
      name: "James, Student",
      message: "Smooth and stress-free process. Highly recommend Pepsmilia Consult!",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {data.map((t, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-white rounded-xl shadow-md"
        >
          <p className="text-gray-700 mb-2">"{t.message}"</p>
          <h4 className="font-bold">{t.name}</h4>
        </motion.div>
      ))}
    </div>
  );
}
