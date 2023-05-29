import React from "react";
import { Alert } from "../../components/elements/Alert";

const PaymentSuccess = () => {
  return (
    <div className="max-w-lg mx-auto p-4 my-28">
      <Alert variant="success">Your payment was successful.</Alert>
    </div>
  );
};

export default PaymentSuccess;
