import React from 'react';

const Consultation = () => {
    return (
        <div className='w-full h-full rounded-[40px] bg-[#1B2C4F] p-6 flex'>
            {/** left */}
            <div className=''>
                {/** text */}
                <h2 className='w-[87px] h-[19px] font-manrope font-medium text-[14px] leading-[19.12px] text-[#CCCCCC]'>Consultation</h2>

                {/** number */}
                <h2 className='w-[82px] h-[33px] font-manrope font-bold text-[24px] leading-[32.78px] text-[#FFFFFF] mt-[8px]'>82/100</h2>

                {/** bottom text */}
                <div className='w-[101px] h-[34px] rounded-[10px] bg-[#2c3A58] flex items-center justify-center space-x-[10px] mt-[30px]'>
                    <h2 className='w-[34px] h-[22px] font-manrope font-bold text-[16px] leading-[21.86px] text-white'>82%</h2>
                    <span>
                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 1L13.1314 8.86863C12.7354 9.26465 12.5373 9.46265 12.309 9.53684C12.1082 9.6021 11.8918 9.6021 11.691 9.53684C11.4627 9.46265 11.2646 9.26465 10.8686 8.86863L8.13137 6.13137C7.73535 5.73535 7.53735 5.53735 7.30902 5.46316C7.10817 5.3979 6.89183 5.3979 6.69098 5.46316C6.46265 5.53735 6.26465 5.73535 5.86863 6.13137L1 11M21 1H14M21 1V8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>

            {/** right */}
            <div className=''>
                {/** dots */}
                <div className='flex space-x-[5px] mt-[5px] ml-[100px]'>
                    <div className='w-[6px] h-[6px] rounded-full bg-black'></div>
                    <div className='w-[6px] h-[6px] rounded-full bg-black'></div>
                    <div className='w-[6px] h-[6px] rounded-full bg-black'></div>
                </div>

                {/** ring */}
                <div className='mt-[35px] ml-[40px]'>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM14.552 40C14.552 54.0545 25.9455 65.448 40 65.448C54.0545 65.448 65.448 54.0545 65.448 40C65.448 25.9455 54.0545 14.552 40 14.552C25.9455 14.552 14.552 25.9455 14.552 40Z" fill="#F1F1F1"/>
                        <path d="M80 40C80 47.9113 77.654 55.6448 73.2588 62.2228C68.8635 68.8008 62.6164 73.9277 55.3073 76.9552C47.9983 79.9827 39.9556 80.7748 32.1964 79.2314C24.4371 77.688 17.3098 73.8784 11.7157 68.2843C6.12163 62.6902 2.312 55.5629 0.768589 47.8036C-0.77482 40.0444 0.0173134 32.0017 3.04482 24.6927C6.07232 17.3836 11.1992 11.1365 17.7772 6.74122C24.3552 2.34596 32.0887 -9.43407e-08 40 0V14.554C34.9673 14.554 30.0475 16.0464 25.8629 18.8424C21.6784 21.6384 18.4169 25.6126 16.4909 30.2622C14.565 34.9119 14.0611 40.0282 15.0429 44.9643C16.0248 49.9003 18.4483 54.4344 22.0069 57.9931C25.5656 61.5517 30.0997 63.9752 35.0357 64.9571C39.9718 65.9389 45.0881 65.435 49.7378 63.5091C54.3874 61.5831 58.3615 58.3216 61.1576 54.1371C63.9536 49.9525 65.446 45.0327 65.446 40H80Z" fill="#409BEE"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Consultation