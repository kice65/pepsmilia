import BookingForm from "../components/BookingForm";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="bg-blue-900 text-white py-20 text-center">
        <motion.h1 initial={{ y:-50, opacity:0 }} animate={{ y:0, opacity:1 }} className="text-5xl font-bold mb-4">
          I’m Perpetua – Your Trusted Immigration Consultant
        </motion.h1>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }} className="text-xl mb-6">
          We guide you through every step of your immigration journey, from expert consultation to document preparation and submission.
        </motion.p>
      </section>

      <section id="services" className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["School Search", "Work Permit", "Permanent Residency", "Visa Services", "Flight Booking"].map((service, idx) => (
            <motion.div key={idx} whileHover={{ scale:1.05 }} className="p-6 bg-white rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">Expert guidance to help you achieve {service.toLowerCase()} success.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <Testimonials />
      </section>

      <section id="booking" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Book a Consultation</h2>
        <BookingForm />
      </section>
    </>
  );
}
