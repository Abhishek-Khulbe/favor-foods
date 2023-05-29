import React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as ArrowRightSvg } from "../assets/icons/arrow-right-long-svgrepo-com.svg";
import Button from "./elements/Button";
import { useDispatch } from "react-redux";
import { setAddress } from "../stores/userInfo/addressSlice";

export const AddressForm = ({ onTabSwitch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setAddress(data));
    onTabSwitch("Payment");
  };

  return (
    <form
      className="md:w-2/3 md:mx-auto px-3 pt-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="pt-4 text-2xl md:text-center">Address for the delivery</h3>
      <div className="mb-4">
        <label
          for="streetAddress"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Street Address
        </label>
        <input
          {...register("address", { required: true })}
          type="text"
          className="w-full px-3 py-2 mb-3 text-sm loading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="streetAdress"
          placeholder="Street Address"
        />
        {errors.address && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label
            for="city"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            City
          </label>
          <input
            {...register("city")}
            type="text"
            className="w-full px-3 py-2 mb-3 text-sm loading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="city"
            placeholder="City"
          />
        </div>
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label
            for="state"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            State
          </label>
          <input
            {...register("state")}
            type="text"
            className="w-full px-3 py-2 mb-3 text-sm loading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="state"
            placeholder="State"
          />
        </div>
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label
            for="country"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Country
          </label>
          <input
            {...register("country")}
            type="text"
            className="w-full px-3 py-2 mb-3 text-sm loading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="country"
            placeholder="Country"
          />
        </div>
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label
            for="postalCode"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Postal Code
          </label>
          <input
            {...register("postalCode")}
            type="text"
            className="w-full px-3 py-2 mb-3 text-sm loading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="postal code"
            placeholder="Postal Code"
          />
        </div>
      </div>
      <div className="flex justify-end p-2">
        <Button variant="dark" className="flex items-center" type="submit">
          <span className="mr-1">Next</span>
          <ArrowRightSvg />
        </Button>
      </div>
    </form>
  );
};
