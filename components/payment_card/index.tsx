import React from "react";
import Image from "next/image";

const PaymentCard = () => {
  return (
    <div className="w-full lg:w-[357px] sticky pt-16 top-0 lg:h-[642px] z-10 mb-3">
      <div className="w-full px-5 mx-2 shadow-[0_0_9px_rgba(217,222,237,0.39)] rounded-[10px] lg:h-[642px]  flex flex-col">
        <div className=" font-bold text-[18px] text-center w-full text-gray-800 py-3">
          The Best Price Offers You've Seen
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col md:justify-between md:gap-x-10 w-full">
          <div className="flex flex-col w-full gap-y-3">
            <div className=" font-bold text-[14px] text-left w-full text-gray-800 py-2">
              Best paper prices
            </div>
            <div className="flex flex-row justify-between ">
              <div className="text-[14px] font-light">
                Academic paper writing
              </div>
              <div className="text-[14px] font-light">£9.99</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="text-[14px] font-light">Dissertation</div>
              <div className="text-[14px] font-light">£15.99</div>
            </div>
            <div className="flex flex-row justify-between ">
              <div className="text-[14px] font-light">Editing</div>
              <div className="text-[14px] font-light">£6.99</div>
            </div>
            <div className="flex flex-row justify-between ">
              <div className="text-[14px] font-light">Pxroofreading</div>
              <div className="text-[14px] font-light">£2.99</div>
            </div>
            <div className="flex flex-row justify-between ">
              <div className="text-[14px] font-light">Rewriting</div>
              <div className="text-[14px] font-light">£8.99</div>
            </div>
            <div className="flex flex-row justify-between ">
              <div className="text-[14px] font-light">Copywriting</div>
              <div className="text-[14px] font-light">£21.99</div>
            </div>
          </div>
          <div className="flex flex-col w-full ">
            <div className=" font-bold text-[14px] text-left w-full text-gray-800 lg:py-3">
              Security & Payments
            </div>
            <div className="flex m-0 p-0 gap-x-5 my-2 mr-3">
              <Image
                alt="Menu"
                src="https://ukwritings.com/assets/badge_charges2-e063e12f64521284ccf7ea7fe0c8d784befeb750d56a477281bdc2d39a737aa1.svg"
                width={138}
                height={30}
                className="object-fit h-[30px] w-[138px] md:w-[160px] -ml-2 p-0 "
              />
              <Image
                alt="Menu"
                src="https://ukwritings.com/assets/badge_guarantee2-046a57f24763ce42c41b3015e1fc8a9fb837bdbebed5082ef89157c1137f7883.svg"
                width={138}
                height={30}
                className="object-fit h-[30px] w-[138px] md:w-[160px] m-0 p-0  "
              />
            </div>
            <p className="w-full font-light text-sm tracking-wide leading-6">
              UKwritings guarantee the privacy of all the customers and never
              share their personal information with third parties. For more
              details read our Privacy Policy.
            </p>
            <div className="w-full font-extrabold my-3 border border-[#2B87F5]   bg-[rgba(43,135,245,0.1)] flex items-center justify-center h-[42px] ">
              PAYPAL
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[230px] h-[55px] flex items-center justify-center cursor-pointer text-white my-3 rounded-[3px] font-bold text-[15px] transition-all duration-300 bg-gradient-to-b from-[#ffd74b] to-[#ffb71a]">
            ORDER NOW
          </div>
        </div>
      </div>
      {/* Purple section content */}
    </div>
  );
};

export default PaymentCard;
