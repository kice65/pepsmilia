import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

export default function PayButton() {
  const handlePay = async () => {
    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "PRICE_ID_FROM_STRIPE",
          quantity: 1
        }
      ],
      mode: "payment",
      successUrl: window.location.origin + "/success",
      cancelUrl: window.location.origin + "/cancel"
    });
  };

  return (
    <button
      onClick={handlePay}
      className="bg-accent px-6 py-2 rounded-full"
    >
      Pay & Book Consultation
    </button>
  );
}
