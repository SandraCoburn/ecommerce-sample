import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  //Value in cents
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51INRXCBUuSZTHHRBYx13KFQGXgDjQax0llsz61CQD1sqbaywem37Zw40Dc6MCXbj7xmbsj6PxpY6SXdJQa6U2b6T001u1lEB0Y';

  //Backend should process payments
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecommerce Sample Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
