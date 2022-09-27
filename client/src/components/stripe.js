import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const totalPrice = price * 100;
  const publicKey =""
    

  const onToken = (_token) => {
    alert("Purchase completed successfully!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Roupa LTD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/M8B.svg"
      description={`Your total is £${price}`}
      amount={totalPrice}
      panelLabel="Purchase Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripCheckoutButton;
