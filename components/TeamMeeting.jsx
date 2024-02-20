import Image from 'next/image'
import React from 'react'

const TeamMeeting = () => {
  return (
    <div className='w-full h-full rounded-[40px] bg-[#1B2C4F] p-6'>
      {/** text and bell icon */}
      <div className='flex justify-between'>
        {/** text */}
        <div className='space-y-[10px]'>
          <h2 className='w-[137px] h-[27px] font-manrope font-bold text-[20px] leading-[27.32px] text-white'>Team Meeting</h2>
          <div className='flex space-x-[10px]'>
            <span>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.4 1L1 3.4M17 3.4L14.6 1M4.2 13.8L2.6 15.4M13.8 13.8L15.4 15.4M9 5.8V9L10.6 10.6M9 15.4C10.6974 15.4 12.3253 14.7257 13.5255 13.5255C14.7257 12.3253 15.4 10.6974 15.4 9C15.4 7.30261 14.7257 5.67475 13.5255 4.47452C12.3253 3.27428 10.6974 2.6 9 2.6C7.30261 2.6 5.67475 3.27428 4.47452 4.47452C3.27428 5.67475 2.6 7.30261 2.6 9C2.6 10.6974 3.27428 12.3253 4.47452 13.5255C5.67475 14.7257 7.30261 15.4 9 15.4Z" stroke="#CCCCCC" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <h2 className='w-[73px] h-[16px] font-manrope font-medium text-[12px] leading-[16.39px] text-[#DCDCDC]'>05:00-06:00</h2>
          </div>
        </div>

        {/** bell icon */}
        <div className='w-[60px] h-[60px] rounded-[20px] bg-[#2C3A58] flex items-center justify-center'>
          <span>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.739 7C15.739 5.4087 15.1069 3.88258 13.9817 2.75736C12.8565 1.63214 11.3303 1 9.73903 1C8.14773 1 6.62161 1.63214 5.49639 2.75736C4.37117 3.88258 3.73903 5.4087 3.73903 7C3.73903 10.0902 2.9595 12.206 2.0887 13.6054C1.35416 14.7859 0.986891 15.3761 1.00036 15.5408C1.01527 15.7231 1.05389 15.7926 1.20081 15.9016C1.33349 16 1.93162 16 3.12789 16H16.3502C17.5464 16 18.1446 16 18.2773 15.9016C18.4242 15.7926 18.4628 15.7231 18.4777 15.5408C18.4912 15.3761 18.1239 14.7859 17.3894 13.6054C16.5186 12.206 15.739 10.0902 15.739 7Z" fill="#409BEE"/>
              <path d="M7.09321 20C7.79834 20.6224 8.72459 21 9.73903 21C10.7535 21 11.6797 20.6224 12.3849 20M15.739 7C15.739 5.4087 15.1069 3.88258 13.9817 2.75736C12.8565 1.63214 11.3303 1 9.73903 1C8.14773 1 6.62161 1.63214 5.49639 2.75736C4.37117 3.88258 3.73903 5.4087 3.73903 7C3.73903 10.0902 2.9595 12.206 2.0887 13.6054C1.35416 14.7859 0.986891 15.3761 1.00036 15.5408C1.01527 15.7231 1.05389 15.7926 1.20081 15.9016C1.33349 16 1.93162 16 3.12789 16H16.3502C17.5464 16 18.1446 16 18.2773 15.9016C18.4242 15.7926 18.4628 15.7231 18.4777 15.5408C18.4912 15.3761 18.1239 14.7859 17.3894 13.6054C16.5186 12.206 15.739 10.0902 15.739 7Z" stroke="#409BEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

      {/** svg images and next button */}
      <div className='flex items-center justify-between mt-[30px]'>
        {/** images */}
        <div className='h-[37px] flex relative'>
                {/** image1 */}
                <div className='w-[36px] h-[37px] overflow-hidden border-[1px] border-solid border-black rounded-full bg-[#E8BBF8]'>
                    <Image
                        src='/card-image1.png'
                        alt=''
                        width={23}
                        height={30}
                        className='mt-[6px] ml-[6px]'
                    />
                </div>

                {/** image2 */}
                <div className='absolute ml-[28px] w-[36px] h-[37px] overflow-hidden border-[1px] border-solid border-black rounded-full bg-[#BBF8F1]'>
                    <Image
                        src='/card-image2.png'
                        alt=''
                        width={25}
                        height={35.9}
                        className='mt-[5px] ml-[4px]'
                    />
                </div>

                {/** image3 */}
                <div className='absolute ml-[55px] w-[36px] h-[37px] overflow-hidden border-[1px] border-solid border-black rounded-full bg-[#CBF8BB]'>
                    <Image
                        src='/card-image3.png'
                        alt=''
                        width={23}
                        height={28}
                        className='mt-[6px] ml-[6px]'
                    />
                </div>

                {/** more container */}
                <div className='absolute ml-[80px] w-[36px] h-[37px] overflow-hidden border-[1px] border-solid border-black rounded-full bg-[#F5F5F5] flex items-center justify-center'>
                    <h2 className='w-[17px] h-[19px] font-manrope font-bold text-[14px] leading-[19.12px] text-black'>4+</h2>
                </div>
        </div>

        {/** button */}
        <div className='w-[54px] h-[40px] rounded-[15px] bg-[#409BEE] flex items-center justify-center'>
          <span>
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeamMeeting