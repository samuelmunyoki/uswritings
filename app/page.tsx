"use client";

import Image from "next/image";
import HeroSection from "@/components/hero_section";
import Navbar from "@/components/navbar";
import Ratings from "@/components/ratings";
import Reviews from "@/components/reviews";
import PaymentCard from "@/components/payment_card";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-screen overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <HeroSection />
        <Ratings />
      </div>
      <Reviews />
      <div className="bg-[#FCFCFE] w-full px-2 md:px-8 lg:px-44 py-[30px] flex flex-col justify-end items-center lg:flex-row lg:items-center lg:justify-between gap-y-3 relative">
        <div className="flex flex-col lg:flex-row text-center lg:text-left text-2xl  font-light">
          {/* For non-large devices, display as separate lines */}
          <div className="block lg:hidden">
            <span>LOOKING FOR THE BEST&nbsp;</span>
            <div className="flex items-center justify-center lg:justify-start">
              ESSAY HELP IN US?
              <span>
                <Image
                  alt=""
                  src="/assets/blue-flag.svg"
                  width={15}
                  height={15}
                  className="object-cover ml-1"
                />
              </span>
            </div>
          </div>
          {/* For large devices, display as a single line */}
          <div className="hidden lg:flex items-center">
            <span>LOOKING FOR THE BEST ESSAY HELP IN US?&nbsp;</span>
            <Image
              alt=""
              src="/assets/blue-flag.svg"
              width={15}
              height={15}
              className="object-cover ml-1"
            />
          </div>
        </div>
        <div className="flex items-center justify-center cursor-pointer text-white h-[50px] w-[220px] rounded-[3px] font-bold text-[15px] transition-all duration-300 bg-gradient-to-b from-[#ffd74b] to-[#ffb71a]">
          ORDER NOW
        </div>
        {/* Stamp Image */}
        <div
          className="absolute left-1/2 lg:left-[11rem] transform -translate-x-1/2 lg:translate-x-0 mt-4"
          style={{
            width: "100px",
            height: "100px",
            backgroundImage: "url('/assets/stamp.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="flex flex-col w-full px-2 md:px-8 lg:px-44 bg-white">
        <div className="font-light text-xl w-full text-left lg:text-center my-8  px-2 md:px-8 lg:px-0 ">
          HOW CAN <span className="font-extrabold">&nbsp;WE HELP&nbsp;</span>
          STUDENTS?
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center  px-2 md:px-8 lg:px-0 w-full">
          <div className="w-full md:w-1/2 font-light text-sm tracking-wide leading-8">
            <p>
              You are a student and you have no time. Indeed, time is a limited
              and valuable resource and there are so many things you won’t find
              a better occasion to do. We walked in those shoes, too, and that’s
              why UK Writings was launched. We are those hours lacking so badly
              in your schedule.
            </p>
            <p className="py-1">
              We name ourselves UK Writings because we know the insides of the
              UK educational system and can best cater to its requirements. We
              also keep in mind that every instructor has their own expectations
              of what a well-written project is so we do everything possible to
              meet all the instructions. We will appreciate your involvement in
              the research and writing process as we strongly believe in the
              power of cooperation. Alternatively, we have a large pool of
              resources to use in case you can’t provide materials for the given
              topic.
            </p>
            <p className="py-1">
              You can contact us any day and hour since our amazing team is
              available 24/7. Scroll to get to know us better!
            </p>
          </div>
          <div
            className="w-full md:w-1/2 flex items-center justify-center"
            style={{
              backgroundImage:
                'url("https://ukwritings.com/assets/we_help-ef5c4072fa184d0939e562a1d41bd430c38cc7b460bf81592618a7edb79b2ba5.webp")',
              backgroundSize: "fit",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "400px", // Set a minimum height for the background image to be visible
            }}
          />
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-100 mb-3 text-[#383945]"></div>
      <div className="bg-white w-full grid grid-cols-1 lg:grid-cols-[30%_70%]  px-2 md:px-8 lg:px-44 py-[80px] ">
        <div className=" w-full flex flex-col items-center">
          {/* Title and Image  */}
          <div className="flex flex-col  md:flex-row lg:flex-col items-start md:items-end lg:items-start justify-evenly w-full">
            {/* Title */}
            <div className="flex  flex-col lg:flex-row text-center lg:text-left text-2xl  font-light">
              {/* For non-large devices, display as separate lines */}
              <div className="hidden lg:flex lg:flex-col ">
                <span>GUARANTEED&nbsp;</span>
                <div className="font-extrabold">FEATURES</div>
              </div>
              {/* For large devices, display as a single line */}
              <div className="flex w-full justify-center text-center lg:hidden">
                GUARANTEED
                <span className="font-extrabold">&nbsp;FEATURES</span>
              </div>
            </div>

            {/* Image */}
            <div className="w-full flex justify-center md:justify-end p-0 m-0">
              <Image
                alt=""
                src="https://ukwritings.com/assets/features-d1dd3caf1fa67dc881c9cc599ab49a19ac1e208a5051a2725e6b7f6e09226888.png"
                width={336}
                height={111}
                className="object-cover my-0 lg:my-2"
              />
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-200 mt-3"></div>
          <div className="flex flex-col md:flex-row  lg:flex-col w-full lg:justify-between pr-3">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-0 w-full border-gray-200">
              {/* Item 1 */}
              <div className="flex flex-row items-center border-b-[1px] border-gray-200 md:border-b-0 lg:border-b-[1px] lg:border-gray-200 py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-bold text-base">Limitless Amendments</div>
              </div>
              <div className="flex flex-row items-center border-b-[1px] border-gray-200 md:border-b-0 lg:border-b-[1px] lg:border-gray-200 py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-bold text-base">Bibliography</div>
              </div>
              <div className="flex flex-row items-center border-b-[1px] border-gray-200 md:border-b-0 lg:border-b-[1px] lg:border-gray-200 py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-bold text-base">Outline</div>
              </div>
              <div className="flex flex-row items-center border-b-[1px] border-gray-200 md:border-b-0 lg:border-b-[1px] lg:border-gray-200 py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-bold text-base">Title Page</div>
              </div>
              <div className="flex flex-row items-center border-b-[1px] border-gray-200 md:border-b-0 lg:border-b-[1px] lg:border-gray-200 py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-bold text-base">Formatting</div>
              </div>
              <div className="flex flex-row items-center border-b-[1px] border-gray-200 md:border-b-0 lg:border-b-[1px] lg:border-gray-200 py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-bold text-base">Plagiarism Report</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[300px] lg:w-full text-lg text-blue-500 font-extrabold mt-8 border border-[#2B87F5] bg-[rgba(43,135,245,0.1)] flex items-center justify-center h-[52px] px-9 text-nowrap">
            GET ALL&nbsp;{" "}
            <span className="text-black font-light">THESE FEATURES</span>
          </div>
        </div>
        <div className="bg w-full ">
          <div className="flex w-full text-left text-2xl py-5 text-[#383945]">
            OUR
            <span className="font-extrabold">&nbsp;SAMPLES</span>
          </div>
          <div className="w-full h-[600px] flex flex-col gap-y-3 lg:ml-7">
            <div className="flex flex-row bg-[#FCFCFE] w-full p-8">
              {/* Image of paper */}

              <Image
                alt=""
                src="https://ukwritings.com/assets/samples_doc-042213c5b1d8dfeb0f835096985b45d84c431008fc23bc95af3940dbe3077f9e.jpg"
                width={167}
                height={217}
                className="object-cover hidden md:block"
              />
              <div className="flex flex-col ml-4 w-full">
                <div className="flex flex-row items-center">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/document-414-38ac4f251bb01d59c2e8f3e7623bf443966b0b8404f5e227938d96918b14a0d2.svg"
                    width={51}
                    height={69}
                    className="object-cover  md:hidden mr-3"
                  />
                  {/* ?Title and Subtitle */}
                  <div className="flex flex-col ">
                    <div className="font-bold text-lg">
                      Integrated Marketing Communication
                    </div>
                    <div className="font-bold text-sm text-gray-300">
                      #Term Paper
                    </div>
                  </div>
                </div>

                {/* 2 columns */}
                <div className="flex flex-row w-full py-3">
                  <div className="w-full flex flex-col gap-y-3">
                    <div className="text-sm font-light">
                      Number of pages&nbsp;
                      <span className="text-sm font-bold">5</span>
                    </div>
                    <div className="text-sm font-light">
                      Urgency&nbsp;
                      <span className="text-sm font-bold">7 days</span>
                    </div>
                    <div className="text-sm font-light">
                      Academic&nbsp;
                      <span className="text-sm font-bold">Master's</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-y-3">
                    <div className="text-sm font-light">
                      Subject area&nbsp;
                      <span className="text-sm font-bold">Management</span>
                    </div>
                    <div className="text-sm font-light">
                      Style&nbsp;<span className="text-sm font-bold">Havard</span>
                    </div>
                    <div className="text-sm font-light">
                      Number of references&nbsp;
                      <span className="text-sm font-bold">12</span>
                    </div>
                  </div>
                </div>
                {/* Order place */}
                <div className="w-full text-xs md:text-lg h-14 bg-white flex items-center justify-center border border-gray-300">
                  <div className="flex items-center text-nowrap justify-evenly w-full">
                    <span className="font-extrabold text-blue-600 text-underline">
                      ORDER PAPER&nbsp;
                    </span>{" "}
                    LIKE THIS FOR ONLY{" "}
                    <span className="font-extrabold">&nbsp; £97.29</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row bg-[#FCFCFE] w-full p-8">
              {/* Image of paper */}

              <Image
                alt=""
                src="https://ukwritings.com/assets/samples_doc-042213c5b1d8dfeb0f835096985b45d84c431008fc23bc95af3940dbe3077f9e.jpg"
                width={167}
                height={217}
                className="object-cover hidden md:block"
              />
              <div className="flex flex-col ml-4 w-full">
                <div className="flex flex-row items-center">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/document-414-38ac4f251bb01d59c2e8f3e7623bf443966b0b8404f5e227938d96918b14a0d2.svg"
                    width={51}
                    height={69}
                    className="object-cover  md:hidden mr-3"
                  />
                  {/* ?Title and Subtitle */}
                  <div className="flex flex-col ">
                    <div className="font-bold text-lg">
                      IT Strategic Planning
                    </div>
                    <div className="font-bold text-sm text-gray-300">
                      #Term Paper
                    </div>
                  </div>
                </div>

                {/* 2 columns */}
                <div className="flex flex-row w-full py-3">
                  <div className="w-full flex flex-col gap-y-3">
                    <div className="text-sm font-light">
                      Number of pages&nbsp;
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <div className="text-sm font-light">
                      Urgency&nbsp;
                      <span className="text-sm font-bold">3 days</span>
                    </div>
                    <div className="text-sm font-light">
                      Academic&nbsp;
                      <span className="text-sm font-bold">Master's</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-y-3">
                    <div className="text-sm font-light">
                      Subject area&nbsp;
                      <span className="text-sm font-bold">IT</span>
                    </div>
                    <div className="text-sm font-light">
                      Style&nbsp;<span className="text-sm font-bold">APA</span>
                    </div>
                    <div className="text-sm font-light">
                      Number of references&nbsp;
                      <span className="text-sm font-bold">4</span>
                    </div>
                  </div>
                </div>
                {/* Order place */}
                <div className="w-full text-xs md:text-lg h-14 bg-white flex items-center justify-center border border-gray-300">
                  <div className="flex items-center text-nowrap justify-evenly w-full">
                    <span className="font-extrabold text-blue-600 text-underline">
                      ORDER PAPER&nbsp;
                    </span>{" "}
                    LIKE THIS FOR ONLY{" "}
                    <span className="font-extrabold">&nbsp; £96.52</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="w-full flex flex-col lg:flex-row px-2 md:px-8 lg:px-44">
        {/* Pink section - Takes full height, scrolls with the page */}
        <div className="w-full lg:w-[70%]  pr-10 pt-16  flex flex-col">
          <h1 className="font-bold text-[22px]  text-gray-800 pb-5">
            THE BEST ESSAY WRITING SERVICE IN THE US
          </h1>
          <div className="w-full font-light text-sm tracking-wide leading-8">
            <p className="py-2">
              We created a dynamic and flexible system that allows students from
              all over the UK and beyond to find an expert to do their tiresome
              writing assignments. The writers in our team are certified
              professionals, each holding a degree in one or more of the
              subjects listed in the order form. We cooperate with former
              students of the UK universities to better understand the needs of
              our clients and the demands of the educational system. So whenever
              you turn to us with whatever writing-related emergency, there is
              always someone to help yo
            </p>
            <p className="py-2">
              We are proud to have students from London, Manchester, Glasgow,
              Belfast, Cardiff, Dublin, Bristol, Coventry and Brighton among our
              friends and loyal customers.
            </p>
            <p className="py-2">
              With us, you get effective and timely help and win the
              twin-advantage of being excellent in both academic and personal
              life.
            </p>
          </div>
          <div className="flex flex-row items-center font-bold text-[22px] my-5 text-gray-800 leading-7 py-5">
            <Image
              alt=""
              src="https://ukwritings.com/assets/folder_img-450fad152152102d018c757f9f90fb95ed5302932e7bcd27218d3df947d5e1e4.svg"
              width={55}
              height={52}
              className="object-cover mr-3"
            />
            The Types of Papers and<br></br>
            Subjects We Cover
          </div>
          <div className="w-full font-light text-sm tracking-wide leading-8">
            <p className="py-2">
              Here is the list of top popular subjects we get orders for. Find
              yours or contact us if you seek an online essay help with
              something not listed here. Remember, thoughts and imagination are
              the only real limits to one’s possibilities:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  English Language
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base">Literature</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  History
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base">Geography</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base">Psychology</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  Sociology
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base">Religion</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base">Science</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base">
                  Mathematics and Statictis
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base">Art</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  Medicine and Nursing
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">Law</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  Business Studies
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  Finance
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  Economic
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  Marketing
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">HRM</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  Management
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base ">Engineering</div>
              </div>
            </div>
          </div>

          <div className="w-full font-light text-sm tracking-wide leading-8">
            <p className="py-2">
              We can help with any paper type. Here is the list of most
              requested ones. If you don’t see the one you need, please contact
              us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  Dissertations
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit "
                  />
                </div>
                <div className="font-light text-base">
                  Thesis proposals and writing
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base text-blue-500">
                  Admission Essays
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base">Argumentative essays</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base">
                  Cause and effect essays
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base  ">Literary critiques</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base ">Personal Essays</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base ">Descritive Essays</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base  ">Lab reports</div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit h-[10px] w-[10px]"
                  />
                </div>
                <div className="font-light text-base ">
                  Mathematical and scientific calculations, data analysis and
                  theoretical essays
                </div>
              </div>
              <div className="flex flex-row items-center  py-4">
                <div className="mr-2 bg-lime-50 rounded-full p-2 h-[10px] w-[10px]">
                  <Image
                    alt=""
                    src="https://ukwritings.com/assets/icon_choose-8d318f9ec9d48eb4cc35072e35ad189cc7759eef3e6edb7cf199695115d9aecd.svg"
                    width={10}
                    height={10}
                    className="object-fit"
                  />
                </div>
                <div className="font-light text-base ">Case studies</div>
              </div>
            </div>
          </div>
          <div className="w-full font-light text-sm tracking-wide leading-8">
            <p className="py-2">
              Personalisation is another word for what we do. All papers are
              written from scratch, there are no templates and we regularly
              update our library to ensure a unique text every time.
            </p>
          </div>
          <div className="flex flex-row items-center font-bold text-[22px] my-5 text-gray-800 leading-7 py-5">
            <Image
              alt=""
              src="https://ukwritings.com/assets/writer_img-5d7f84a5acdbf919e1fc599b9e0782d06c840e6278d3ecd4091bf7b9e25ee271.svg"
              width={55}
              height={52}
              className="object-cover mr-3"
            />
            Meet Our Writers
          </div>
          <div className="w-full font-light text-sm tracking-wide leading-8">
            <p className="py-2">
              Time to meet the people behind the UK Writings logo! Our writers
              are the engine running our system and also the ones that you, dear
              clients, talk to most frequently here. So we treat the process of
              writer assigning with the utmost care.
            </p>
            <p className="py-2">
              Everyone within our UK essay writing team is an expert in their
              chosen field and they have the corresponding credentials to prove
              it. We give priority to writers originating from the UK. All the
              candidates pass our English test that puts a special emphasis on
              grammar and spelling as well as a text’s integrity and
              readability. The freshmen who successfully completed the test and
              verifications start their internal probation upon completion of
              which they get to work with the clients.
            </p>
            <p className="py-2">
              As of today we have delivered dozens of thousands of excellent
              papers to students from the UK and beyond. Well, you must have
              already checked the customers’ reviews, have you not?
            </p>
          </div>
          <div className="flex flex-row items-center font-bold text-[22px] my-5 text-gray-800 leading-7 py-5">
            <Image
              alt=""
              src="https://ukwritings.com/assets/support_img-0883987a39de18e98b3e6eba4bc4ef08bb85d28d7fccd68d4c9f7083b2524603.svg"
              width={55}
              height={52}
              className="object-cover mr-3"
            />
            Continuous Support – We Are<br></br>
            Here When You Need Us!
          </div>
          <div className="w-full font-light text-sm tracking-wide leading-8">
            <p className="py-2">
              While your writer might not be able to answer you instantly, our
              fantastic support team is online 24/7 all year round. One of the
              agents will hear you out and offer an effective solution or
              suggest actionable advice. They are the first place to go if you
              have trouble placing an order or want to know your order status.
              Need to discuss your existing order? Looking for something that is
              not listed on the website and/or in the order form? Interested in
              the working process? Don’t hesitate to get in touch using phone or
              live chat.
            </p>
          </div>
        </div>
        {/* Payment Card */}
        <PaymentCard />
      </div>
      <div className="w-full bg-[#16151f] mt-16 flex flex-col px-2 md:px-8 lg:px-44 py-10">
        <div className="flex flex-col gap-y-4 lg:flex-row w-full lg:gap-x-14">
          <div className="flex flex-col gap-y-4  lg:flex-row  w-full lg:justify-between">
            <div className="flex flex-row text-white text-sm items-center">
              <Image
                alt="Menu"
                src="https://ukwritings.com/assets/phone_footer-8321de5abfae5494d878cff3f8563a7f73fbf9c33ae66b0936fbfb9993fffcb3.svg"
                width={14}
                height={14}
                className="object-fit mr-2 p-0  "
              />
              +254 759 439032
            </div>
            <div className="flex flex-row text-white text-sm items-center ">
              <Image
                alt="Menu"
                src="https://ukwritings.com/assets/mail_footer-b6a2112c6e80fcde7456a0ce9634eb8978a21280b64206dcfc67ee13d48e5d35.svg"
                width={14}
                height={14}
                className="object-fit mr-2 p-0  "
              />
              info@mail.com
            </div>
          </div>
          <div className="flex flex-col gap-y-4  lg:flex-row w-full lg:justify-between">
            <div className="font-bold text-gray-500">Terms of Use</div>
            <div className="font-bold text-gray-500">Money Back Guarantee</div>
            <div className="font-bold text-gray-500">Cookie Policy</div>
          </div>
        </div>
        <div className="w-full flex justify-center h-[1px] bg-lime-200/25 my-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between">
          <div className="flex flex-col gap-y-3 text-gray-200/50">
            <div className="text-sm font-light">Write My Essay</div>
            <div className="text-sm font-light">Write My Dissertation</div>
            <div className="text-sm font-light">Assignment Writer</div>
            <div className="text-sm font-light">Law Essay</div>
            <div className="text-sm font-light">MBA Essay</div>
            <div className="text-sm font-light">MRM Essay</div>
          </div>
          <div className="flex flex-col gap-y-3 text-gray-200/50">
            <div className="text-sm font-light">Buy Essay</div>
            <div className="text-sm font-light">Assignment Help</div>
            <div className="text-sm font-light">Cheap Assignment</div>
            <div className="text-sm font-light">Do My Coursework</div>
            <div className="text-sm font-light">English Essay</div>
            <div className="text-sm font-light">Economic Essay</div>
          </div>
          <div className="flex flex-col gap-y-3 text-gray-200/50">
            <div className="text-sm font-light">Custom Essay</div>
            <div className="text-sm font-light">PhD Writers</div>
            <div className="text-sm font-light">Buy Assignment</div>
            <div className="text-sm font-light">Coursework Help</div>
            <div className="text-sm font-light">Nursing Essay</div>
            <div className="text-sm font-light">Finance Essay</div>
          </div>
          <div className="flex flex-col gap-y-3 text-gray-200/50">
            <div className="text-sm font-light">Buy Disseration</div>
            <div className="text-sm font-light">Dissertation Help</div>
            <div className="text-sm font-light">Personal Statement Help</div>
            <div className="text-sm font-light">Law Essay</div>
            <div className="text-sm font-light">History Essay</div>
            <div className="text-sm font-light">Sociology Essay</div>
          </div>
        </div>
      </div>
    </>
  );
}
