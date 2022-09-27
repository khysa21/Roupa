import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const totalPrice = price * 100;
  const publicKey ="pk_test_51GuslRIBNethBXyvGHJxL6cxvcl2Zbpg8k2TvPdumlaYterjS5YdmvSypMZMsihIno9KmSqKxOV4dMl8qtVa4w5C00QK8Dyuom"

  return (
    <StripeCheckout
      label="Pay Now"
      name="Roupa LTD"
      billingAddress
      shippingAddress
      // url="../../server/images/pexels-sebastiaan-stam-1097456.jpg"
      description={`Your total is £${price}`}
      amount={totalPrice}
      panelLabel="Purchase Now"
      stripeKey={publicKey}
    />
  );
};

export default StripCheckoutButton;
