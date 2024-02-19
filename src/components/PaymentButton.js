import React from "react";
import { BudPayButton, closeBudPayPaymentModal } from "budpay-react-v2";

// Define the configuration for BudPay
const config = {
  api_key: "sk_live_*******************", // Replace with your secret key
  reference: "", // Please replace with a reference you generated, or remove the line entirely so our API will generate one for you
  email: "maryadams@gmail.com",
  amount: "100",
  first_name: "Mary",
  last_name: "Adams",
  currency: "NGN", // Use GHS for Ghana Cedis or USD for US Dollars
};

// Merge the custom configuration with the default configuration
const budPayConfig = {
  ...config,
  text: "Pay with BudPay",
  btnSize: "medium", // small, medium, large
  callback_url: "https://marystore.com/",
  callback: function (response) {
    closeBudPayPaymentModal(); // this will close the modal programmatically
    // this happens after the payment is completed successfully if callback_url is not provided
    alert(
      "Payment complete! Reference: " +
        response.reference +
        ", Status: " +
        response.status
    );
  },
  onClose: function (response) {
    console.log(response);
    alert("Transaction was not completed, window closed.");
  },
};

// Define the PaymentButton component
function PaymentButton() {
  return (
    <>
      <BudPayButton {...budPayConfig} />
    </>
  );
}

// Export the PaymentButton component
export default PaymentButton;
