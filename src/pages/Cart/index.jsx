import React, { useEffect } from "react";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
import useTabSwitch from "../../hooks/useTabSwitch";
import { Tabs } from "../../components/Tabs";
import { AddressForm } from "../../components/AddressForm";
import { ProductSummary } from "../../components/ProductSummary";
import { StripeWrapper } from "../../components/PaymentForm";

const Cart = () => {
  const cart = useSelector(cartProducts);
  const tabs = ["Summary", "Delivery", "Payment"];
  const [currTab, handleTabSwitch] = useTabSwitch(tabs, "Summary");

  if (!cart || cart?.products?.length === 0) {
    return (
      <div className="bg-white h-full text-black flex  items-center justify-center p-4">
        <h1>Your cart is empty!!</h1>
      </div>
    );
  }

  return (
    <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currTab} />
      <div className={`tabs ${currTab !== "Summary" ? "hidden" : ""}`}>
        <ProductSummary />
        <div className="flex justify-end p-2">
          <Button
            variant="dark"
            className="flex items-center"
            onClick={() => handleTabSwitch("Delivery")}
          >
            <span className="mr-1">Next</span>
            <ArrowRightSvg />
          </Button>
        </div>
      </div>
      <div className={`tabs ${currTab !== "Delivery" ? "hidden" : ""}`}>
        <AddressForm onTabSwitch={handleTabSwitch} />
      </div>
      <div className={`tabs ${currTab !== "Payment" ? "hidden" : ""}`}>
        <StripeWrapper />
      </div>
    </div>
  );
};

export default Cart;
