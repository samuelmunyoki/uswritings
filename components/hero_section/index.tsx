import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const HeroSection = () => {
  const [pages, setPages] = useState<number>(0);

  const increasePages = () => {
    setPages((prevPages) => prevPages + 1);
  };

  const decreasePages = () => {
    setPages((prevPages) => (prevPages > 0 ? prevPages - 1 : 0));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setPages(value);
    } else if (event.target.value === "") {
      setPages(0); // Reset to 0 if the input is cleared
    }
  };

  return (
    <>
      {/* New section with two divs splitting the width */}
      <div className="flex flex-col lg:flex-row flex-grow bg-[#1e1d2b] ">
        {/* First new div with Blue Background occupying 70% on large screens and full width on medium and small screens */}
        <div
          className="bg-[#1e1d2b] w-full lg:w-9/12 min-w-full lg:min-w-[768px] max-w-[980px] order-1 lg:order-1"
          style={{
            height: "calc(80vh)", // Set height to leave 20vh below
            backgroundImage:
              "url('https://ukwritings.com/assets/header-bg-6e4025a81c26db055558179481139a1dca2efa53d0900777ed1f647db4cd4e00.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full flex flex-col justify-center w-[450px] lg:ml-44 text-[18px] md:text-[40px] text-left ml-4 lg:m-0 gap-y-2 md:leading-[50px]">
            <p className="text-white">
              NEED THE BEST
              <span className="font-extrabold pt-3 text-2xl md:text-[40px]">
                <br />
                ESSAY HELP IN
                <br />
                THE US?
              </span>
            </p>
            <p className="text-white text-md md:text-lg font-medium py-3 w-[280px] md:w-full">
              LET OUR TRUSTED WRITING SERVICE DO YOUR ESSAY FOR YOU!
            </p>
            <div className="flex m-0 p-0 gap-x-3">
              <Image
                alt="Badge"
                src="https://ukwritings.com/assets/badge_charges2-e063e12f64521284ccf7ea7fe0c8d784befeb750d56a477281bdc2d39a737aa1.svg"
                width={138}
                height={30}
                className="object-contain h-[30px] w-[138px] md:w-[160px] -ml-2"
              />
              <Image
                alt="Badge"
                src="https://ukwritings.com/assets/badge_guarantee2-046a57f24763ce42c41b3015e1fc8a9fb837bdbebed5082ef89157c1137f7883.svg"
                width={138}
                height={30}
                className="object-contain h-[30px] w-[138px] md:w-[160px]"
              />
            </div>
          </div>
        </div>

        {/* Second new div with Pink Background occupying 30% on large screens and full width on medium and small screens */}
        <div className="lg:mr-44 w-full lg:w-4/12 order-2 lg:order-2">
          {/* Optional content inside the pink div */}
          <div className="h-full flex flex-col text-left mt-14">
            <h3 className="text-white font-semibold pl-6 pt-4 text-center lg:text-left">
              PLACE AN ORDER
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
              <div className="ml-6 gap-y-4">
                <div className="flex flex-col  hover:bg-[#65657028] hover:border-[2px] hover:border-[#6e6e7a] border-b-[2px] border-[#6e6e7a]  w-full px-3 pt-1 pb-0 mb-0 mt-3">
                  <p className="text-[#656570] text-[11px]">TYPE OF SERVICE</p>
                  <Select>
                    <SelectTrigger className="w-full text-white border-none uppercase px-0 mx-0">
                      <SelectValue
                        placeholder="WRITING INCL. CALCULATIONS"
                        className="text-white uppercase "
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1e1d2b] text-white/50 font-light rounded-none  h-48  overflow-x-hidden">
                      <SelectItem value="ty-1">
                        Dissertation/Thesis services
                      </SelectItem>
                      <SelectItem value="ty-2">
                        Writing incl. calculations
                      </SelectItem>
                      <SelectItem value="ty-3">Admission services</SelectItem>
                      <SelectItem value="ty-4">
                        Math/Physics/Economis/Statistics Problems
                      </SelectItem>
                      <SelectItem value="ty-5">
                        Multiple choice questions
                      </SelectItem>
                      <SelectItem value="ty-6">Editing</SelectItem>
                      <SelectItem value="ty-7">Proofreading</SelectItem>
                      <SelectItem value="ty-8">Rewriting</SelectItem>
                      <SelectItem value="ty-9">Copywriting</SelectItem>
                      <SelectItem value="ty-10">Resume/CV services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col  hover:bg-[#65657028] hover:border-[2px] hover:border-[#6e6e7a] border-b-[2px] border-[#6e6e7a]  w-full px-3 pt-1 pb-0 mb-0 mt-3">
                  <p className="text-[#656570] text-[11px]">TYPE OF PAPER</p>
                  <Select>
                    <SelectTrigger className="w-full text-white border-none px-0 mx-0 uppercase">
                      <SelectValue placeholder="RESEARCH PAPER" className="" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1e1d2b] text-white/50 font-light rounded-none h-48  overflow-x-hidden">
                      <SelectItem value="rty-1">Calculation</SelectItem>
                      <SelectItem value="rty-2">Proof</SelectItem>
                      <SelectItem value="rty-3">Research</SelectItem>
                      <SelectItem value="rty-4">Equation</SelectItem>
                      <SelectItem value="rty-5">Optimization</SelectItem>
                      <SelectItem value="rty-6">Math Modelling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col  hover:bg-[#65657028] hover:border-[2px] hover:border-[#6e6e7a] border-b-[2px] border-[#6e6e7a]  w-full px-3 pt-1 pb-0 mb-0 mt-3">
                  <p className="text-[#656570] text-[11px]">
                    NUMBER OF PAGES / WORDS
                  </p>
                  <div className="py-2 flex justify-between">
                    <div className="text-white text-sm">PAGES / WORDS</div>
                    <div className="flex text-white text-sm w-36 justify-between items-center">
                      <div onClick={decreasePages} className="cursor-pointer">
                        -
                      </div>
                      <input
                        type="number"
                        value={pages}
                        onChange={handleInputChange}
                        min="0"
                        className="w-12 text-center bg-transparent text-white outline-none border-none overflow-hidden"
                      />
                      <div onClick={increasePages} className="cursor-pointer">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-6 gap-y-4">
                <div className="flex flex-col  hover:bg-[#65657028] hover:border-[2px] hover:border-[#6e6e7a] border-b-[2px] border-[#6e6e7a]  w-full px-3 pt-1 pb-0 mb-0 mt-3">
                  <p className="text-[#656570] text-[11px]">ACADEMIC LEVEL</p>
                  <Select>
                    <SelectTrigger className="w-full uppercase text-white border-none px-0 mx-0">
                      <SelectValue placeholder="GCSE/A LEVEL" className="" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1e1d2b] text-white/50 font-light rounded-none h-48  overflow-x-hidden">
                      <SelectItem value="acrty-1">GCSE / A LEVEL</SelectItem>
                      <SelectItem value="acrty-2">HNC / HND</SelectItem>
                      <SelectItem value="acrty-3">Undergraduate</SelectItem>
                      <SelectItem value="acrty-4">Master's</SelectItem>
                      <SelectItem value="acrty-5">Doctoral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col  hover:bg-[#65657028] hover:border-[2px] hover:border-[#6e6e7a] border-b-[2px] border-[#6e6e7a]  w-full px-3 pt-1 pb-0 mb-0 mt-3">
                  <p className="text-[#656570] text-[11px]">URGENCY</p>
                  <Select>
                    <SelectTrigger className="w-full text-white uppercase border-none px-0 mx-0">
                      <SelectValue placeholder="14 DAYS" className="" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1e1d2b] text-white/50 font-light rounded-none h-48  overflow-x-hidden">
                      <SelectItem value="hr-1">12 hours</SelectItem>
                      <SelectItem value="hr-2">18 hours</SelectItem>
                      <SelectItem value="hr-3">24 hours</SelectItem>
                      <SelectItem value="hr-4">48 hours</SelectItem>
                      <SelectItem value="hr-5">3 days</SelectItem>
                      <SelectItem value="hr-6">4 days</SelectItem>
                      <SelectItem value="hr-7">5 days</SelectItem>
                      <SelectItem value="hr-8">6 days</SelectItem>
                      <SelectItem value="hr-9">7 days</SelectItem>
                      <SelectItem value="hr-10">10 days</SelectItem>
                      <SelectItem value="hr-11">14 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col   w-full px-3 pt-1 pb-0 mb-0 my-3">
                  <p className="text-[#656570] text-[11px]">
                    Price per page: <span className="text-white">£9.99</span>
                  </p>
                  <div className="flex items-baseline text-2lg lg:text-2xl text-white font-bold">
                    Total price:{" "}
                    <span className="font-extrabold">&nbsp; £ </span>
                    <span className="font-extrabold text-3xl">&nbsp;8</span>
                    <span className="font-extrabold text-2xl">.39</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start my-3 ">
              <div className="flex items-center justify-center ml-6 my-3 cursor-pointer text-white h-12 w-[230px]  rounded-[3px] font-bold text-sm transition-all duration-300  bg-gradient-to-b from-[#ffd74b] to-[#ffb71a]">
                ORDER NOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
