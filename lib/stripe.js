import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY, // server-side only
  {
    apiVersion: "2022-11-15",
  }
);
