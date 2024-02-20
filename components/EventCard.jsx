import Image from "next/image";
import React from "react";

const EventCard = () => {
  return (
    <div className="w-full h-full bg-[#1B2C4F] rounded-[30px] py-[20px] px-[25px]">
      {/** icon and text */}
      <div className="flex space-x-[12px]">
        <div className="w-[30px] h-[22px] rounded-[15px] bg-[#409BEE] flex items-center justify-center">
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5H12M12 5L8.15 1M12 5L8.15 9"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <h2 className="w-[136px] h-[22px] font-manrope font-bold text-[16px] leading-[21.86px] text-[#CCCCCC]">
          Upcoming Events
        </h2>
      </div>

      <div className="flex mt-[10px] space-x-[25px]">
        {/** left (circular image) */}
        <div className="w-[79px] h-[79px] relative">
          <div className="w-[79px] h-[79px] border-[4px] border-[#ABEFEB] rounded-full"></div>
            <div className="w-[56.43px] h-[56.43px] absolute overflow-hidden top-3 left-3 rounded-full border-[1px] bg-[#ABEFEB] border-solid border-[#000000]">
              <Image
                src='/eventImage.png'
                alt='image'
                width={47.02}
                height={58.2}
                className="mt-[8px] ml-[4px]"
              />
            </div>
        </div>

        {/** text right */}
        <div className="">
          <h2 className="w-[100px] h-[27px] font-manrope font-bold text-[20px] leading-[27.32px] text-[#FFFFFF]">
            Aliza Shah
          </h2>
          <div className="flex space-x-[10px] mt-[2px] mb-[10px]">
            <span>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 13.6C9.48521 13.6 10.9096 13.01 11.9598 11.9598C13.01 10.9096 13.6 9.48521 13.6 8C13.6 6.51479 13.01 5.0904 11.9598 4.0402C10.9096 2.99 9.48521 2.4 8 2.4C6.51479 2.4 5.09041 2.99 4.0402 4.0402C2.99 5.0904 2.4 6.51479 2.4 8C2.4 9.48521 2.99 10.9096 4.0402 11.9598C5.09041 13.01 6.51479 13.6 8 13.6Z"
                  fill="white"
                />
                <path d="M3.1 1L1 3.1L3.1 1Z" fill="white" />
                <path d="M15 3.1L12.9 1L15 3.1Z" fill="white" />
                <path d="M3.8 12.2L2.4 13.6L3.8 12.2Z" fill="white" />
                <path d="M12.2 12.2L13.6 13.6L12.2 12.2Z" fill="white" />
                <path d="M8 5.2V8L9.4 9.4" fill="white" />
                <path
                  d="M3.1 1L1 3.1M15 3.1L12.9 1M3.8 12.2L2.4 13.6M12.2 12.2L13.6 13.6M8 5.2V8L9.4 9.4M8 13.6C9.48521 13.6 10.9096 13.01 11.9598 11.9598C13.01 10.9096 13.6 9.48521 13.6 8C13.6 6.51479 13.01 5.09041 11.9598 4.0402C10.9096 2.99 9.48521 2.4 8 2.4C6.51479 2.4 5.09041 2.99 4.0402 4.0402C2.99 5.09041 2.4 6.51479 2.4 8C2.4 9.48521 2.99 10.9096 4.0402 11.9598C5.09041 13.01 6.51479 13.6 8 13.6Z"
                  stroke="#929292"
                  stroke-width="1.33826"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="w-[93px] h-[16px] font-manrope font-medium text-[12px] leading-[16.39px] text-[#DCDCDC]">
              08:00-09:00 AM
            </h2>
          </div>
          <div className="w-[125px] h-[25px] rounded-[10px] bg-[#2C3A58] flex items-center justify-center">
            <h2 className="w-[100px] h-[16px] font-manrope font-medium text-[12px] leading-[16.39px] text-[#DCDCDC]">
              Visited 7 days ago
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
