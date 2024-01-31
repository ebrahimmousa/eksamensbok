const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripeSecretKey);

module.exports = {
  placeOrder: async (ctx) => {
    const { cartItems } = ctx.request.body;

    try {
      const totalAmount = calculateTotalAmount(cartItems);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalAmount,
        currency: "sek", 
        description: "Order payment",
      });

      ctx.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error("Error creating PaymentIntent:", error);
      ctx.send({ success: false, error: "Error creating PaymentIntent" });
    }
  },
};

function calculateTotalAmount(cartItems) {
  
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.attributes.productPrice * item.quantity,
    0
  );

  return totalAmount;
}
