import React from 'react'
import ActivePatientCard from './ActivePatientCard'

const ActivePatients = () => {
    return (
        <div className='w-full h-full flex flex-col rounded-[40px] bg-[#1B2C4F] px-[25px] py-[40px] space-y-[53px]'>
            <div>
            <ActivePatientCard
                time='08:00 am'
                bgColor='#F5E5E5'
                svg='/card-image1.png'
                name='Mark Jaxon'
                timeRange='08:00-09:00 AM'
                marginLeft={30}
                imageWidth={23}
                imageHeight={30}
                imageBgColor='#E8BBF8'
                imageMT={5}
                imageML={6}
            />
            </div>
            <div>
            <ActivePatientCard
                time='09:00 am'
                bgColor='#E5F5E6'
                svg='/card-image2.png'
                name='Maira Khan'
                timeRange='09:00-10:00 AM'
                marginLeft={80}
                imageWidth={25}
                imageHeight={35.96} 
                imageBgColor='#BBF8F1'
                imageMT={5}
                imageML={4}
            />
            </div>
            <div>
            <ActivePatientCard
                time='10:00 am'
                bgColor='#C9F3EC'
                svg='/card-image3.png'
                name='Brick Zon'
                timeRange='10:00-11:00 AM'
                marginLeft={20}
                imageWidth={23}
                imageHeight={28}
                imageBgColor='#CBF8BB'
                imageMT={6}
                imageML={6}
            />
            </div>
            <div className='flex'>
                {/** left (time) */}
                <div className='w-[55px] h-[16px] font-manrope font-semibold text-[12px] leading-[16.38px] text-[#CCCCCC]'>
                    11:00 am
                </div>
                {/** right section */}
                <div className='relative'>
                    {/** dotted line */}
                    <div className='absolute top-2 left-3'>
                        <svg width="250" height="1" viewBox="0 0 250 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="250" y2="0.5" stroke="#686868" stroke-dasharray="5 5"/>
                        </svg>
                    </div>
                    <div className='absolute -top-1.5 left-[80px] w-[105px] h-[29px] rounded-[30px] bg-[#111729] flex items-center justify-center'>
                        <h2 className='w-[63px] h-[16px] font-manrope font-semibold text-[12px] leading-[16.39px] text-[#CCCCCC]'>
                            Break Time
                        </h2>
                    </div>
                </div>
            </div>
            <div className=''>
            <ActivePatientCard
                time='12:00 am'
                bgColor='#C1E2F4'
                svg='/card-image4.png'
                name='Alexa Max'
                timeRange='12:00-13:00 AM'
                marginLeft={50}
                imageWidth={33}
                imageHeight={33}
                imageBgColor='#E8F8BB'
                imageMT={3}
                imageML={-2}
            />
            </div>
        </div>
    )
}

export default ActivePatients