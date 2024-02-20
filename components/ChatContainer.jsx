import Image from 'next/image'
import React from 'react'

const ChatContainer = () => {
  return (
    <div className='w-[400px] h-[910px] rounded-[40px] bg-[#111729] p-6'>
        {/** image section */}
        <div className='mt-[40px]'>
            {/** image */}
            <div className='flex items-center justify-center relative'>
                {/** ring */}
                <div>
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75ZM6.49889 75C6.49889 112.832 37.1679 143.501 75 143.501C112.832 143.501 143.501 112.832 143.501 75C143.501 37.1679 112.832 6.49889 75 6.49889C37.1679 6.49889 6.49889 37.1679 6.49889 75Z" fill="#151C39"/>
                        <path d="M150 75C150 89.8336 145.601 104.334 137.36 116.668C129.119 129.001 117.406 138.614 103.701 144.291C89.9968 149.968 74.9168 151.453 60.3682 148.559C45.8196 145.665 32.4559 138.522 21.967 128.033C11.4781 117.544 4.335 104.18 1.4411 89.6318C-1.45279 75.0832 0.0324627 60.0032 5.70904 46.2987C11.3856 32.5943 20.9985 20.8809 33.3322 12.6398C45.6659 4.39867 60.1664 -1.76889e-07 75 0V6.49889C61.4518 6.49889 48.2078 10.5164 36.9428 18.0434C25.6779 25.5704 16.8979 36.2688 11.7132 48.7858C6.52854 61.3027 5.17199 75.076 7.81512 88.3639C10.4583 101.652 16.9824 113.858 26.5624 123.438C36.1425 133.018 48.3482 139.542 61.6361 142.185C74.924 144.828 88.6973 143.471 101.214 138.287C113.731 133.102 124.43 124.322 131.957 113.057C139.484 101.792 143.501 88.5482 143.501 75H150Z" fill="#409BEE"/>
                    </svg>
                </div>
                {/** image */}
                <div className='w-[110px] h-[110px] absolute rounded-full overflow-hidden bg-sky-200'>
                    <Image
                        src='/userImage.png'
                        alt='user-image'
                        width={80}
                        height={100}
                        className='mt-[16px] ml-[15px]'
                    />
                </div>
            </div>

            {/** name */}
            <div className='my-[20px] flex flex-col items-center justify-center'>
                <h2 className='w-[143px] h-[33px] font-manrope font-bold text-[24px] leading-[32.78px] text-white'>Aliam Colter</h2>

                <h2 className='w-[72px] h-[22px] mt-[10px] font-manrope font-medium text-[16px] leading-[21.86px] text-[#CCCCCC]'>Physician</h2>
            </div>
        </div>

        {/** users section */}
        <div className='w-[350px] h-[80px] mb-[20px] rounded-[30px] bg-[#1c2A4E] flex items-center px-[30px]'>
            {/** left */}
            <div className='w-[131px] h-[25px]'>
                <h2 className='font-manrope font-semibold text-[18px] leading-[24.59px] text-white'>Active Patients</h2>
            </div>

            {/** right */}
            <div className='h-[37px] flex relative ml-[50px]'>
                {/** image1 */}
                <div className='w-[36px] h-[37px] overflow-hidden border-[1px] border-solid border-black rounded-full bg-[#EFABAB]'>
                    <Image
                        src='/eventImage.png'
                        alt=''
                        width={30}
                        height={37}
                        className='mt-[7px] ml-[2px]'
                    />
                </div>

                {/** image2 */}
                <div className='absolute ml-[28px] w-[36px] h-[37px] overflow-hidden border-[1px] border-solid border-black rounded-full bg-[#E8F8BB]'>
                    <Image
                        src='/card-image4.png'
                        alt=''
                        width={30}
                        height={37}
                        className='mt-[7px]'
                    />
                </div>

                {/** image3 */}
                <div className='absolute ml-[55px] w-[36px] h-[37px] overflow-hidden border-[1px] border-solid border-black rounded-full bg-[#BBF4F8]'>
                    <Image
                        src='/card-image5.png'
                        alt=''
                        width={30}
                        height={37}
                        className='mt-[4px] ml-[2px]'
                    />
                </div>

                {/** more container */}
                <div className='absolute ml-[80px] w-[36px] h-[37px] overflow-hidden border-[1px] border-solid border-black rounded-full bg-[#F5F5F5] flex items-center justify-center'>
                    <h2 className='w-[17px] h-[19px] font-manrope font-bold text-[14px] leading-[19.12px] text-black'>8+</h2>
                </div>
            </div>
        </div>

        {/** chat section */}
        <div className='w-[350px] h-[464px] rounded-[40px] bg-[#1c2A4E] p-6'>
            {/** top */}
            <div className='flex items-center justify-between'>
                {/** chat user and name */}
                <div className='flex items-center justify-center space-x-[10px]'>
                    {/** chat user name and time */}
                    <div className='w-[46px] h-[46px] border-[1px] border-solid border-black bg-[#E8F8BB] rounded-full overflow-hidden'>
                        <Image
                        src='/card-image4.png'
                        alt='chatuser'
                        width={41.62}
                        height={41.62}
                        className='mt-[6px] pr-0.5'
                        />
                    </div>

                    {/** name */}
                    <div className='space-y-[5px]'>
                        <h2 className='w-[78px] h-[22px] font-manrope font-bold text-[16px] leading-[21.86px] text-white'>Alexa Max</h2>
                        <h2 className='w-[93px] h-[16px] font-manrope font-medium text-[12px] leading-[16.39px] text-[#CCCCCC]'>Active 5 Min Ago</h2>
                    </div>
                </div>

                {/** call icon */}
                <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#2C3A58]'>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.1833 14C11.5111 14 9.88115 13.6272 8.29344 12.8816C6.70522 12.1364 5.29874 11.1513 4.074 9.926C2.84874 8.70126 1.86356 7.29478 1.11844 5.70656C0.372815 4.11885 0 2.48889 0 0.816667C0 0.583333 0.0777777 0.388889 0.233333 0.233333C0.388889 0.0777777 0.583333 0 0.816667 0H3.96667C4.14815 0 4.31019 0.0583333 4.45278 0.175C4.59537 0.291667 4.67963 0.440741 4.70556 0.622222L5.21111 3.34444C5.23704 3.52593 5.23393 3.69107 5.20178 3.83989C5.16911 3.98922 5.09444 4.12222 4.97778 4.23889L3.11111 6.14444C3.65556 7.07778 4.33611 7.95278 5.15278 8.76944C5.96944 9.58611 6.87037 10.2926 7.85556 10.8889L9.68333 9.06111C9.8 8.94444 9.95245 8.85682 10.1407 8.79822C10.3284 8.74015 10.513 8.72407 10.6944 8.75L13.3778 9.29444C13.5593 9.33333 13.7083 9.4207 13.825 9.55656C13.9417 9.69293 14 9.85185 14 10.0333V13.1833C14 13.4167 13.9222 13.6111 13.7667 13.7667C13.6111 13.9222 13.4167 14 13.1833 14Z" fill="#409BEE"/>
                        </svg>
                    </span>
                </div>
            </div>

            {/** border line */}
            <div className='w-[300px] border-[1px] border-solid rounded-full border-white/20 my-[15px]'></div>

            {/**  middle */}
            <div>
                {/** hi doc */}
                <div className='w-[120px] h-[34px] flex items-center pl-[10px] ml-[55px] rounded-[14px] bg-[#F1F1F1]'>
                    <h2 className='w-[60px] h-[16px] font-manrope font-semibold text-[12px] leading-[16.39px] text-black'>Hi, Doctor.</h2>
                </div>

                {/** i got knee jerk and chat user image */}
                <div className='flex mt-[15px] space-x-[10px]'>
                    {/** chat user */}
                    <div className='w-[46px] h-[46px] mt-[6px] border-[1px] border-solid border-black bg-[#E8F8BB] rounded-full overflow-hidden'>
                        <Image
                        src='/card-image4.png'
                        alt='chatuser'
                        width={41.62}
                        height={41.62}
                        className='mt-[6px] pr-0.5'
                        />
                    </div>

                    {/** msg and time */}
                    <div>
                        {/** text */}
                        <div className='flex items-center w-[166px] h-[60px] rounded-[14px] bg-[#F1F1F1]'>
                            <h2 className='w-[131px] pl-[15px] h-[36px] font-manrope font-normal text-[12px] leading-[17.59px] text-black'>
                                I got knee jerk. What now?
                            </h2>
                        </div>
                        {/** time */}
                        <h2 className='w-[75px] h-[16px] mt-[6px] font-manrope font-semibold text-[12px] leading-[16.39px] text-[#CCCCCC]'>Tue 02:32pm</h2>
                    </div>
                </div>

                {/** hi alexa and user image */}
                <div className='flex items-center space-x-[10px] ml-[125px]'>
                    {/** msg */}
                    <div className='w-[104px] h-[34px] mt-[8px] rounded-[14px] bg-[#BDD8F0] flex items-center'>
                        <h2 className='w-[53px] h-[16px] font-manrope font-semibold text-[12px] leading-[16.39px] text-black ml-[14px]'>Hi, Alexa.</h2>
                    </div>

                    {/** user image */}
                    <div className='w-[46px] h-[46px] mt-[8px] border-[1px] border-solid border-black bg-sky-200 rounded-full overflow-hidden'>
                        <Image
                        src='/userImage.png'
                        alt='chatuser'
                        width={41.62}
                        height={41.62}
                        className='mt-[4px] ml-0.5 p-1'
                        />
                    </div>
                </div>

                {/** msg and time */}
                <div>
                    {/** this help maintain */}
                    <div className='flex items-center ml-[40px] mt-[8px] w-[191px] h-[60px] rounded-[14px] bg-[#BDD8F0]'>
                        <h2 className='w-[156px] h-[36px] ml-[15px] font-manrope font-medium text-[12px] leading-[17.59px] text-black'>This help maintain balance and posture. Don&apos;t worry.</h2>
                    </div>
                    {/** time */}
                    <h2 className='w-[75px] h-[16px] ml-[155px] my-[6px] font-manrope font-semibold text-[12px] leading-[16.39px] text-[#CCCCCC]'>Tue 02:32pm</h2>
                </div>
            </div>

            {/** bottom */}
            <div className='w-[305px] h-[70px] flex space-x-[25px] relative rounded-[29px] bg-[#2C3A58]'>
                {/** mic icon */}
                <div className='ml-[20px] my-[25px]'>
                    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 9V11C15 14.866 11.866 18 8 18M1 9V11C1 14.866 4.13401 18 8 18M8 18V21M4 21H12M8 14C6.34315 14 5 12.6569 5 11V4C5 2.34315 6.34315 1 8 1C9.65685 1 11 2.34315 11 4V11C11 12.6569 9.65685 14 8 14Z" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                {/** input text area */}
                <div className='my-[25px] text-white'>
                    <input
                        placeholder='Type your text.....'
                        className='border-none bg-transparent placeholder:text-white outline-none w-[80%] font-manrope font-semibold text-[12px] text-white leading-[16.39px]' 
                    />
                </div>

                {/** send icon */}
                <div className='w-[60px] h-[60px] absolute right-2 top-[5px] rounded-[20px] bg-[#409BEE] flex items-center justify-center'>
                    <span>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.12257 12.1095L19.6226 1.60955M9.25015 12.4376L11.8783 19.1956C12.1098 19.791 12.2255 20.0886 12.3923 20.1755C12.5369 20.2509 12.7092 20.251 12.8539 20.1758C13.0208 20.0891 13.1369 19.7916 13.3691 19.1965L19.9595 2.30875C20.1691 1.77157 20.2739 1.50298 20.2166 1.33135C20.1668 1.1823 20.0498 1.06533 19.9008 1.01554C19.7291 0.958202 19.4606 1.06302 18.9234 1.27265L2.03562 7.86299C1.44055 8.09521 1.14301 8.21133 1.0563 8.37823C0.981136 8.52292 0.981238 8.69517 1.05658 8.83977C1.14348 9.00657 1.44115 9.12233 2.0365 9.35385L8.7945 11.982C8.91535 12.029 8.97578 12.0525 9.02666 12.0888C9.07175 12.1209 9.11119 12.1604 9.14336 12.2055C9.17965 12.2563 9.20315 12.3168 9.25015 12.4376Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ChatContainer