'use client';

import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react'

const Header = () => {

  const [dynamicText, setDynamicText] = useState('Dr. Colter!');
  const [inputText, setInputText] = useState('');

  const { user } = useUser();

  // Function to update the dynamic text with user input
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to update the dynamic text with user input
  const updateText = () => {
    setDynamicText(inputText);
  };

  return (
    <div className='h-full w-full flex'>
        {/** text */}
        <div className='flex relative'>
        <div className='w-[142px]'>
            <h2 className='font-manrope font-normal text-[28px] leeading-[38.25px] text-[#FFFFFF]'>
                Hello,
            </h2>
            {user ? (
                <div className='flex'>
                {/* Input field for user to enter text */}
                <input 
                    placeholder={dynamicText} 
                    type="text"
                    value={inputText} 
                    onClick={updateText}
                    onChange={handleInputChange}
                    className='placeholder-white cursor-pointer'
                    style={{ 
                        fontWeight: '800', 
                        border: 'none', 
                        background: 'none', 
                        outline: 'none',
                        fontSize: '28px',
                        fontFamily: 'manrope',
                        color: 'white',
                        width: '200px'
                    }} 
                />
                {/** absolute bottom-0 left-[160px] ml-auto */}
                <div className='absolute bottom-0 left-[185px]'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 22C17.6667 22 19.0833 21.4167 20.25 20.25C21.4167 19.0833 22 17.6667 22 16H20.5C20.5 17.25 20.0627 18.3127 19.188 19.188C18.3127 20.0627 17.25 20.5 16 20.5V22ZM0 6H1.5C1.5 4.75 1.93733 3.68733 2.812 2.812C3.68733 1.93733 4.75 1.5 6 1.5V0C4.33333 0 2.91667 0.583333 1.75 1.75C0.583333 2.91667 0 4.33333 0 6ZM2.4 19.6C3.2 20.4 4.10833 21 5.125 21.4C6.14167 21.8 7.17933 22 8.238 22C9.296 22 10.3333 21.8 11.35 21.4C12.3667 21 13.275 20.4 14.075 19.6L21.15 12.525C21.4167 12.2583 21.5417 11.9543 21.525 11.613C21.5083 11.271 21.3833 10.9833 21.15 10.75C20.9167 10.5167 20.6293 10.3917 20.288 10.375C19.946 10.3583 19.6417 10.4833 19.375 10.75L14.95 15.175L14.25 14.45L20.8 7.925C21.0333 7.69167 21.15 7.39567 21.15 7.037C21.15 6.679 21.0333 6.38333 20.8 6.15C20.55 5.9 20.2543 5.775 19.913 5.775C19.571 5.775 19.275 5.9 19.025 6.15L13.2 11.975L12.475 11.275L19.375 4.375C19.6083 4.14167 19.725 3.84567 19.725 3.487C19.725 3.129 19.6083 2.83333 19.375 2.6C19.1417 2.36667 18.846 2.25 18.488 2.25C18.1293 2.25 17.8333 2.36667 17.6 2.6L10.7 9.5L10.025 8.8L15.5 3.325C15.7667 3.05833 15.8917 2.754 15.875 2.412C15.8583 2.07067 15.7333 1.78333 15.5 1.55C15.25 1.3 14.9543 1.175 14.613 1.175C14.271 1.175 13.975 1.3 13.725 1.55L6.1 9.175C6.75 9.95833 7.02933 10.875 6.938 11.925C6.846 12.975 6.45833 13.8167 5.775 14.45L5.075 13.75C5.80833 13 6.1 12.179 5.95 11.287C5.8 10.3957 5.39167 9.68333 4.725 9.15L8.8 5.075C9.03333 4.84167 9.15 4.54567 9.15 4.187C9.15 3.829 9.03333 3.53333 8.8 3.3C8.55 3.05 8.24567 2.93333 7.887 2.95C7.529 2.96667 7.23333 3.09167 7 3.325L2.4 7.925C1.6 8.725 1 9.63333 0.6 10.65C0.2 11.6667 0 12.704 0 13.762C0 14.8207 0.2 15.8583 0.6 16.875C1 17.8917 1.6 18.8 2.4 19.6Z" fill="#E6D78C"/>
                    </svg>
                </div>
            </div>
            ) : (
                <div className='flex'>
                    <h2 className='w-[142px] h-[76px] font-manrope font-extrabold text-[28px] leading-[38.25px] text-[#FFFFFF]'>Dr. Colter!</h2>
                    <div className='absolute bottom-0 left-[185px]'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 22C17.6667 22 19.0833 21.4167 20.25 20.25C21.4167 19.0833 22 17.6667 22 16H20.5C20.5 17.25 20.0627 18.3127 19.188 19.188C18.3127 20.0627 17.25 20.5 16 20.5V22ZM0 6H1.5C1.5 4.75 1.93733 3.68733 2.812 2.812C3.68733 1.93733 4.75 1.5 6 1.5V0C4.33333 0 2.91667 0.583333 1.75 1.75C0.583333 2.91667 0 4.33333 0 6ZM2.4 19.6C3.2 20.4 4.10833 21 5.125 21.4C6.14167 21.8 7.17933 22 8.238 22C9.296 22 10.3333 21.8 11.35 21.4C12.3667 21 13.275 20.4 14.075 19.6L21.15 12.525C21.4167 12.2583 21.5417 11.9543 21.525 11.613C21.5083 11.271 21.3833 10.9833 21.15 10.75C20.9167 10.5167 20.6293 10.3917 20.288 10.375C19.946 10.3583 19.6417 10.4833 19.375 10.75L14.95 15.175L14.25 14.45L20.8 7.925C21.0333 7.69167 21.15 7.39567 21.15 7.037C21.15 6.679 21.0333 6.38333 20.8 6.15C20.55 5.9 20.2543 5.775 19.913 5.775C19.571 5.775 19.275 5.9 19.025 6.15L13.2 11.975L12.475 11.275L19.375 4.375C19.6083 4.14167 19.725 3.84567 19.725 3.487C19.725 3.129 19.6083 2.83333 19.375 2.6C19.1417 2.36667 18.846 2.25 18.488 2.25C18.1293 2.25 17.8333 2.36667 17.6 2.6L10.7 9.5L10.025 8.8L15.5 3.325C15.7667 3.05833 15.8917 2.754 15.875 2.412C15.8583 2.07067 15.7333 1.78333 15.5 1.55C15.25 1.3 14.9543 1.175 14.613 1.175C14.271 1.175 13.975 1.3 13.725 1.55L6.1 9.175C6.75 9.95833 7.02933 10.875 6.938 11.925C6.846 12.975 6.45833 13.8167 5.775 14.45L5.075 13.75C5.80833 13 6.1 12.179 5.95 11.287C5.8 10.3957 5.39167 9.68333 4.725 9.15L8.8 5.075C9.03333 4.84167 9.15 4.54567 9.15 4.187C9.15 3.829 9.03333 3.53333 8.8 3.3C8.55 3.05 8.24567 2.93333 7.887 2.95C7.529 2.96667 7.23333 3.09167 7 3.325L2.4 7.925C1.6 8.725 1 9.63333 0.6 10.65C0.2 11.6667 0 12.704 0 13.762C0 14.8207 0.2 15.8583 0.6 16.875C1 17.8917 1.6 18.8 2.4 19.6Z" fill="#E6D78C"/>
                        </svg>
                    </div>
                </div>
            )}
        </div>
        
        </div>

        {/** search box */}
        <div className='w-[412px] h-[60px] ml-[80px] relative rounded-[20px] bg-[#2C3A58]'>
            <div className='absolute top-4 left-6'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#CCCCCC" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.4438 16.4438L21 21" stroke="#CCCCCC" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <input
                placeholder='Search' 
                className='border-none outline-none text-[#FFFFFF] font-normal bg-transparent w-[80%] h-[80%] ml-[60px] mt-1'
            />
        </div>

        {/** noti icon */}
        <div className='w-[60px] h-[60px] ml-[20px] cursor-pointer rounded-[20px] bg-[#409BEE] relative flex items-center justify-center'>
            <div>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.09321 20C7.79834 20.6224 8.72459 21 9.73903 21C10.7535 21 11.6797 20.6224 12.3849 20M15.739 7C15.739 5.4087 15.1069 3.88258 13.9817 2.75736C12.8565 1.63214 11.3303 1 9.73903 1C8.14773 1 6.62161 1.63214 5.49639 2.75736C4.37117 3.88258 3.73903 5.4087 3.73903 7C3.73903 10.0902 2.9595 12.206 2.0887 13.6054C1.35416 14.7859 0.986891 15.3761 1.00036 15.5408C1.01527 15.7231 1.05389 15.7926 1.20081 15.9016C1.33349 16 1.93162 16 3.12789 16H16.3502C17.5464 16 18.1446 16 18.2773 15.9016C18.4242 15.7926 18.4628 15.7231 18.4777 15.5408C18.4912 15.3761 18.1239 14.7859 17.3894 13.6054C16.5186 12.206 15.739 10.0902 15.739 7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </div>

            <div className='absolute top-[18px] left-[30px]'>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#E30000"/>
                </svg>

            </div>
        </div>
    </div>
  )
}

export default Header