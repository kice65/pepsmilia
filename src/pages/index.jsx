import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import BookingForm from "../components/BookingForm";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    "School Search",
    "Work Permit",
    "Permanent Residency",
    "Visa Services",
    "Flight Booking",
  ];

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 md:px-20">

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mt-12 md:mt-24 gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Book Your Services Online Effortlessly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-700 mb-8"
          >
            Schedule appointments, manage bookings, and explore services all in one platform.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <Link
              href="/book"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center shadow-lg transition duration-300"
            >
              Book Now <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <Image
            src="/hero-image.jpg"
            alt="Online booking illustration"
            width={500}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-lg text-center transition-transform duration-300"
            >
              {/* Service Icon */}
              <Image
                src={`/icons/${service.toLowerCase().replace(/ /g, '-')}.png`}
                alt={service}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />

              {/* Service Name */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service}</h3>

              {/* Service Description */}
              <p className="text-gray-600">
                Expert guidance to help you achieve {service.toLowerCase()} success.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-20 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Testimonials</h2>
        <Testimonials />
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 w-full max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">Book a Consultation</h2>
        <BookingForm />
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 text-gray-500 text-sm text-center border-t border-gray-200 w-full">
        © {new Date().getFullYear()} Pepsmilia. All rights reserved.
      </footer>

    </main>
  );
}
