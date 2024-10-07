"use client"

import React from 'react'
import Image from "next/image";

const Ratings = () => {
  return (
    <div className="overflow-x-hidden bg-[#FCFCFE] w-full lg:h-[20vh] flex items-center justify-center order-3 lg:order-3 px-2 md:px-8 lg:px-44 overflow-hidden ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly w-full mt-3">
            <div className="flex flex-col">
              <div className="md:my-10  flex flex-row items-center justify-start md:justify-between">
                <div className="flex items-center ">
                  <Image
                    src="https://ukwritings.com/assets/sitejabber-d025f653ee3dc4707c9902e20852e2ef5e4a58a3574a66468cba7e8ad9139f97.svg"
                    alt="High rating"
                    height={90}
                    width={90}
                    className="object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-md">Sitejabber</p>
                    <div className="flex">
                      <h3 className="flex items-center font-extrabold text-[#383945] text-xl">
                        4.8/5
                        <span>
                          <Image
                            src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                            alt="High rating"
                            height={18}
                            width={18}
                            className="object-cover"
                          />
                        </span>
                        <span>
                          <Image
                            src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                            alt="High rating"
                            height={18}
                            width={18}
                            className="object-cover"
                          />
                        </span>
                        <span>
                          <Image
                            src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                            alt="High rating"
                            height={18}
                            width={18}
                            className="object-cover"
                          />
                        </span>
                        <span>
                          <Image
                            src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                            alt="High rating"
                            height={18}
                            width={18}
                            className="object-cover"
                          />
                        </span>
                        <span>
                          <Image
                            src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                            alt="High rating"
                            height={18}
                            width={18}
                            className="object-cover"
                          />
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="h-[60%] w-[1px] bg-gray-200 hidden md:flex lg:hidden"></div>
              </div>

              <div className="h-[1px] bg-gray-200 w-full lg:hidden"></div>
            </div>

            <div className="flex flex-col">
              <div className="ml-6 md:ml-10 md:my-10  flex flex-row items-center justify-start md:justify-between">
                <div className="flex items-center ">
                  <Image
                    src="https://ukwritings.com/assets/writers_online-b377f769f138b6e98f1d069ae69449c4d014263e86e7035b1d18413d0693c46e.svg"
                    alt="High rating"
                    height={90}
                    width={90}
                    className="object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-md">Writers online</p>
                    <div className="flex">
                      <h3 className="flex items-center font-extrabold text-[#383945]   text-xl">
                        828
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-gray-200 w-full px-10  lg:hidden"></div>
            </div>

            <div className="flex flex-col">
              <div className="md:my-10  flex flex-row items-center justify-start md:justify-between">
                <div className="flex items-center ">
                  <Image
                    src="https://ukwritings.com/assets/guarantee-cd11e1e23067cd3eabd31733c78a0f097d91f7aa5028897e2bae254e221b405a.svg"
                    alt="High rating"
                    height={90}
                    width={90}
                    className="object-cover"
                  />
                  <div className="flex flex-col">
                    <p>Originality quarantee</p>
                    <div className="flex">
                      <h3 className="flex items-center font-extrabold text-[#383945]   text-xl">
                        100%
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="h-[60%] w-[1px] bg-gray-200 hidden md:flex lg:hidden"></div>
              </div>

              <div className="h-[1px] bg-gray-200 w-full px-10  md:hidden"></div>
            </div>

            <div className="md:ml-10 md:my-10  flex flex-row items-center">
              <Image
                src="https://ukwritings.com/assets/customer_support-6e557a88d8f39d76b42943a614a1bf10c2a028d6e6e89f78ad93ad2c223b1ae0.svg"
                alt="High rating"
                height={90}
                width={90}
                className="object-cover"
              />
              <div className="flex flex-col">
                <p>Customer Support</p>
                <div className="flex">
                  <h3 className="flex items-center font-extrabold text-[#383945]  text-xl">
                    24/7
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Ratings