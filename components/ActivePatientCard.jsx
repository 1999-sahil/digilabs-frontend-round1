import Image from 'next/image'
import React from 'react'

const ActivePatientCard = ({ 
    time, 
    bgColor, 
    svg, 
    name, 
    timeRange, 
    marginLeft, 
    imageWidth, 
    imageHeight, 
    imageBgColor, 
    imageMT,
    imageML, 
}) => {
  return (
    <div className='w-full h-full flex'>
        {/** left (time) */}
        <div className='w-[55px] h-[16px] font-manrope font-semibold text-[12px] leading-[16.38px] text-[#CCCCCC]'>
            {time}
        </div>

        {/** right section */}
        <div className='relative'>
            {/** dotted line */}
            <div className='absolute top-2 left-3'>
                <svg width="250" height="1" viewBox="0 0 250 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="250" y2="0.5" stroke="#686868" stroke-dasharray="5 5"/>
                </svg>
            </div>
            <div 
                className={`w-[190px] h-[50px] absolute -top-4 rounded-[20px] space-x-[15px] p-2.5 flex items-center`}
                style={{ 
                    backgroundColor: bgColor,
                    marginLeft: marginLeft,  
                }}
            >
                {/** image */}
                <div 
                    className={`w-[36px] h-[36px] overflow-hidden rounded-full border-[1px] border-solid border-[#1B2C4F]`}
                    style={{ background: imageBgColor }}
                >
                    <Image
                        src={svg}
                        alt='card-image'
                        width={imageWidth}
                        height={imageHeight}
                        style={{
                            marginTop: imageMT,
                            marginLeft: imageML,
                        }}
                    />
                </div>

                {/** text */}
                <div className=''>
                    <h2 className='w-[87px] h-[22px] mb-[3px] font-manrope font-bold text-[16px] leading-[22px] text-black'>
                        {name}
                    </h2>
                    <div className='flex space-x-[5px]'>
                        <span>
                            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.40517 0.56897L1 1.97414M10.3678 1.97414L8.96264 0.56897M2.87356 8.06322L1.93678 9M8.49425 8.06322L9.43103 9M5.68391 3.37931V5.25288L6.62069 6.18966M5.68391 9C6.67771 9 7.6308 8.60522 8.33352 7.90249C9.03625 7.19977 9.43103 6.24667 9.43103 5.25288C9.43103 4.25908 9.03625 3.30598 8.33352 2.60326C7.6308 1.90054 6.67771 1.50575 5.68391 1.50575C4.69011 1.50575 3.73701 1.90054 3.03429 2.60326C2.33157 3.30598 1.93678 4.25908 1.93678 5.25288C1.93678 6.24667 2.33157 7.19977 3.03429 7.90249C3.73701 8.60522 4.69011 9 5.68391 9Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <h2 className='w-[73px] h-[13px] font-manrope font-medium text-[9.41px] leading-[12.86px] text-black'>
                            {timeRange}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActivePatientCard