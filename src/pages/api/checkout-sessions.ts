import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
apiVersion: "2025-12-15.clover" as const,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, message } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Consultation Booking", description: message },
            unit_amount: 5000,
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
