"use client";

import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar = () => {
  const { user } = useUser();
  console.log(user);
  
  // State to manage the visibility of the div
  const [isDivOpen, setIsDivOpen] = useState(false);

  const [image, setImage] = useState("");

  const inputRef = useRef(null);

  const router = useRouter();

  const signOut = () => {
    router.push('/')
  }

  // Function to toggle the visibility of the div
  const toggleDiv = () => {
    setIsDivOpen(!isDivOpen);
  };

  const handleImage = () => {
    inputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div className="h-full w-full relative flex flex-col items-center">
      {/** logo */}
      <div className="overflow-hidden flex space-x-[5px]">
        {image ? (
          <Image
            src={URL.createObjectURL(image)}
            alt="update-logo"
            width={35}
            height={35}
          />
        ) : (
          <Image src="/logoImage.png" alt="logo" width={35} height={35} />
        )}

        {user ? (
          <div
            className="cursor-pointer w-[20px] h-[20px] hover:bg-[#2C3A58] rounded-md flex items-center justify-center"
            onClick={toggleDiv}
          >
            <IoMdArrowDropdown className="text-[#FFFFFF]" />
          </div>
        ) : null}
      </div>

      {/* Conditional rendering of the div based on the state (to update logo) */}
      {isDivOpen && (
        <div className="bg-[#2C3A58] w-[100px] h-[25px] rounded-[3px] flex items-center justify-center text-white z-10 absolute left-[40px] top-[25px] font-manrope text-xs font-semibold">
          {/* Content of the div */}
          <h2
            className="w-[80px] h-[18px] hover:text-gray-300 cursor-pointer px-[1px]"
            onClick={handleImage}
          >
            Update Logo
          </h2>
          <input
            type="file"
            ref={inputRef}
            onChange={handleChange}
            style={{ display: "none" }}
          />
        </div>
      )}

      {/** menu items */}
      <div className="mt-[70px] space-y-[10px]">
        <div className="rounded-[20px] bg-[#2C3A58] w-[60px] h-[60px] flex items-center justify-center cursor-pointer">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 19.75V12.35C8 11.7899 8 11.5099 8.109 11.296C8.20487 11.1078 8.35785 10.9549 8.54601 10.859C8.75993 10.75 9.03995 10.75 9.6 10.75H12.4C12.9601 10.75 13.2401 10.75 13.454 10.859C13.6422 10.9549 13.7951 11.1078 13.891 11.296C14 11.5099 14 11.7899 14 12.35V19.75M1 8.25L10.04 1.47C10.3843 1.21181 10.5564 1.08271 10.7454 1.03294C10.9123 0.989018 11.0877 0.989018 11.2546 1.03295C11.4436 1.08271 11.6157 1.21181 11.96 1.47L21 8.25M3 6.75V16.55C3 17.6701 3 18.2302 3.21799 18.658C3.40974 19.0343 3.7157 19.3403 4.09202 19.532C4.51985 19.75 5.0799 19.75 6.2 19.75H15.8C16.9201 19.75 17.4802 19.75 17.908 19.532C18.2843 19.3403 18.5903 19.0343 18.782 18.658C19 18.2302 19 17.6701 19 16.55V6.75L12.92 2.19C12.2315 1.67361 11.8872 1.41542 11.5091 1.31589C11.1754 1.22804 10.8246 1.22804 10.4909 1.31589C10.1128 1.41542 9.76852 1.67361 9.08 2.19L3 6.75Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="rounded-[20px] hover:bg-[#2C3A58] w-[60px] h-[60px] flex items-center justify-center cursor-pointer">
          <svg
            width="18"
            height="23"
            viewBox="0 0 18 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 2.01953V6.15007C11 6.71012 11 6.99015 11.109 7.20406C11.2049 7.39222 11.3578 7.5452 11.546 7.64108C11.7599 7.75007 12.0399 7.75007 12.6 7.75007H16.7305M13 12.75H5M13 16.75H5M7 8.75H5M11 1.75H5.8C4.11984 1.75 3.27976 1.75 2.63803 2.07698C2.07354 2.3646 1.6146 2.82354 1.32698 3.38803C1 4.02976 1 4.86984 1 6.55V16.95C1 18.6302 1 19.4702 1.32698 20.112C1.6146 20.6765 2.07354 21.1354 2.63803 21.423C3.27976 21.75 4.11984 21.75 5.8 21.75H12.2C13.8802 21.75 14.7202 21.75 15.362 21.423C15.9265 21.1354 16.3854 20.6765 16.673 20.112C17 19.4702 17 18.6302 17 16.95V7.75L11 1.75Z"
              stroke="#CCCCCC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="rounded-[20px] hover:bg-[#2C3A58] w-[60px] h-[60px] flex items-center justify-center cursor-pointer">
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2104 15.6249C19.5742 17.1294 18.5792 18.4551 17.3123 19.4862C16.0454 20.5173 14.5452 21.2224 12.9428 21.5397C11.3405 21.8571 9.68483 21.7771 8.12055 21.3067C6.55627 20.8364 5.13103 19.99 3.96942 18.8416C2.80782 17.6932 1.94522 16.2777 1.45704 14.7189C0.968859 13.1601 0.869965 11.5054 1.169 9.89957C1.46804 8.29371 2.1559 6.78556 3.17245 5.50696C4.189 4.22836 5.50329 3.21825 7.0004 2.56493M20.2392 7.9081C20.6395 8.87456 20.8851 9.8963 20.9684 10.9358C20.989 11.1926 20.9993 11.321 20.9483 11.4366C20.9057 11.5333 20.8213 11.6247 20.7284 11.6749C20.6172 11.7349 20.4783 11.7349 20.2004 11.7349H11.8004C11.5204 11.7349 11.3804 11.7349 11.2734 11.6804C11.1793 11.6325 11.1028 11.556 11.0549 11.4619C11.0004 11.355 11.0004 11.215 11.0004 10.9349V2.53493C11.0004 2.25707 11.0004 2.11813 11.0605 2.00692C11.1107 1.91401 11.2021 1.82962 11.2987 1.78703C11.4144 1.73603 11.5428 1.74633 11.7996 1.76692C12.839 1.85025 13.8608 2.09582 14.8272 2.49614C16.0405 2.99868 17.1429 3.73528 18.0715 4.66387C19.0001 5.59245 19.7367 6.69484 20.2392 7.9081Z"
              stroke="#CCCCCC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="rounded-[20px] hover:bg-[#2C3A58] w-[60px] h-[60px] flex items-center justify-center cursor-pointer">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 8.23026H10M6 11.7303H13M10 19.7303C14.9706 19.7303 19 15.7008 19 10.7303C19 5.75969 14.9706 1.73026 10 1.73026C5.02944 1.73026 1 5.75969 1 10.7303C1 11.9274 1.23374 13.07 1.65806 14.1148C1.73927 14.3147 1.77988 14.4147 1.798 14.4955C1.81572 14.5746 1.8222 14.6331 1.82221 14.7141C1.82222 14.797 1.80718 14.8872 1.77711 15.0676L1.18413 18.6255C1.12203 18.9981 1.09098 19.1844 1.14876 19.3191C1.19933 19.437 1.29328 19.5309 1.41118 19.5815C1.54589 19.6393 1.73218 19.6082 2.10476 19.5461L5.66265 18.9531C5.84309 18.9231 5.9333 18.908 6.01613 18.908C6.09715 18.9081 6.15566 18.9145 6.23472 18.9323C6.31554 18.9504 6.41552 18.991 6.61549 19.0722C7.6603 19.4965 8.80286 19.7303 10 19.7303Z"
              stroke="#CCCCCC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="rounded-[20px] hover:bg-[#2C3A58] w-[60px] h-[60px] flex items-center justify-center cursor-pointer">
          <svg
            width="20"
            height="23"
            viewBox="0 0 20 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.35012 19.1013L7.93457 20.4158C8.1083 20.8071 8.39184 21.1395 8.75079 21.3728C9.10974 21.6061 9.52867 21.7303 9.95679 21.7302C10.3849 21.7303 10.8038 21.6061 11.1628 21.3728C11.5217 21.1395 11.8053 20.8071 11.979 20.4158L12.5635 19.1013C12.7715 18.6349 13.1215 18.2461 13.5635 17.9902C14.0082 17.7337 14.5228 17.6244 15.0335 17.678L16.4635 17.8302C16.8891 17.8753 17.3187 17.7958 17.7001 17.6016C18.0816 17.4073 18.3984 17.1065 18.6123 16.7358C18.8265 16.3652 18.9286 15.9405 18.9061 15.5131C18.8836 15.0857 18.7376 14.674 18.4857 14.328L17.639 13.1647C17.3375 12.7474 17.1764 12.245 17.179 11.7302C17.1789 11.2168 17.3415 10.7166 17.6435 10.3013L18.4901 9.138C18.742 8.79198 18.888 8.38029 18.9105 7.9529C18.933 7.5255 18.831 7.10077 18.6168 6.73022C18.4029 6.35946 18.086 6.05871 17.7046 5.86445C17.3232 5.67019 16.8936 5.59076 16.4679 5.63578L15.0379 5.788C14.5272 5.84163 14.0127 5.73235 13.5679 5.47578C13.125 5.21848 12.775 4.82758 12.5679 4.35911L11.979 3.04467C11.8053 2.6534 11.5217 2.32094 11.1628 2.08762C10.8038 1.85431 10.3849 1.73015 9.95679 1.73022C9.52867 1.73015 9.10974 1.85431 8.75079 2.08762C8.39184 2.32094 8.1083 2.6534 7.93457 3.04467L7.35012 4.35911C7.14305 4.82758 6.79299 5.21848 6.35012 5.47578C5.90534 5.73235 5.39079 5.84163 4.88012 5.788L3.44568 5.63578C3.02001 5.59076 2.59042 5.67019 2.20899 5.86445C1.82757 6.05871 1.51069 6.35946 1.29679 6.73022C1.08261 7.10077 0.98057 7.5255 1.00305 7.9529C1.02554 8.38029 1.17158 8.79198 1.42345 9.138L2.27012 10.3013C2.57206 10.7166 2.73466 11.2168 2.73456 11.7302C2.73466 12.2436 2.57206 12.7439 2.27012 13.1591L1.42345 14.3224C1.17158 14.6685 1.02554 15.0802 1.00305 15.5076C0.98057 15.9349 1.08261 16.3597 1.29679 16.7302C1.5109 17.1008 1.82782 17.4014 2.20918 17.5956C2.59055 17.7899 3.02004 17.8694 3.44568 17.8247L4.87568 17.6724C5.38634 17.6188 5.90089 17.7281 6.34568 17.9847C6.7902 18.2412 7.14188 18.6322 7.35012 19.1013Z"
              stroke="#CCCCCC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.955 14.7302C11.6119 14.7302 12.955 13.3871 12.955 11.7302C12.955 10.0734 11.6119 8.73022 9.955 8.73022C8.29815 8.73022 6.955 10.0734 6.955 11.7302C6.955 13.3871 8.29815 14.7302 9.955 14.7302Z"
              stroke="#CCCCCC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      {/** user image and logout */}
      <div className="absolute bottom-0 space-y-[15px] flex flex-col items-center">
        {user ? (
          <div className="flex flex-col items-center justify-center gap-5">
            <UserButton />
            <SignOutButton>
            <div 
              className="rounded-[20px] hover:bg-[#2C3A58] w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
              onClick={signOut}
            >
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 6L21 10M21 10L17 14M21 10H8M14 2.20404C12.7252 1.43827 11.2452 1 9.66667 1C4.8802 1 1 5.02944 1 10C1 14.9706 4.8802 19 9.66667 19C11.2452 19 12.7252 18.5617 14 17.796"
                  stroke="#CCCCCC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            </SignOutButton>
          </div>
        ) : (
          <div>
            {/** sign-in/up */}
            <Link
              className="w-[70px] h-[60px] flex items-center justify-center rounded-[20px] hover:bg-[#2C3A58] cursor-pointer"
              href="/sign-in"
            >
              <h2 className="font-manrope font-semibold text-[18px] text-[#FFFFFF]">
                Log in
              </h2>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

{
  /**
<div className="w-[44px] h-[44px] rounded-full bg-sky-200 overflow-hidden">
          <Image
            src='/userImage.png'
            alt="user-image"
            width={30}
            height={37}
            className="mt-[10px] ml-[7px]"
          />
        </div> */
}
