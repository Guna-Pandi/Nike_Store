import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const CartCount = () => {
  return (
    <div className=" bg-white h-11 flex items-center justify-between w-full px-3 top-0 left-0 right-0 sticky">
      <div className=" flex items-center gap-3 "> 
        <div className=" grid items-center cursor-pointer ">
          <ChevronDoubleLeftIcon className=" w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
        </div>
        <div className=" grid items-center">
          <h1 className=" text-base font-medium text-slate-900">
            Your Cart <span className=" bg-theme-cart rounded font-normal text-slate-100 text-xs px-1 py-0.5">(Items)</span>
          </h1>
        </div>
      </div>
      <div className=" flex items-center ">
        <button type="button" className=" rounded bg-theme-cart active:scale90 p-0.5 ">
          <XMarkIcon className=" w-5 h-5 text-white stroke-[2]" />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
