import React from 'react'
import Header from './Header'
import PatientCard from './PatientCard'
import EventCard from './EventCard'
import StatisticsCard from './StatisticsCard'
import ActivePatients from './ActivePatients'
import Consultation from './Consultation'
import TeamMeeting from './TeamMeeting'
import ChatContainer from './ChatContainer'

const DataContainer = () => {
  return (
    <div className='w-full h-full px-[40px] py-[30px] rounded-[40px] bg-[#151C39] flex'>
      {/** left container */}
      <div className=''>
        {/** header */}
        <div className='w-[700px] h-[76px]'>
          <Header />
        </div>

        {/** top data */}
        <div className='flex my-[35px] space-x-[25px]'>
          <div className='flex flex-col space-y-[25px]'>
            {/** patients visited */}
            <div className='w-[290px] h-[150px]'>
              <PatientCard />
            </div>

            {/** upcoming events */}
            <div className='w-[290px] h-[150px]'>
              <EventCard />
            </div>
          </div>
          {/** statistics */}
          <div className='w-[385px] h-[325px]'>
            <StatisticsCard />
          </div>
          <div></div>
        </div>

        {/** bottom data */}
        <div className='flex space-x-[30px]'>
          {/** active patients */}
          <div>
            <h2 className='w-[178px] h-[33px] mb-[30px] font-manrope font-bold text-[24px] leading-[32.78px] text-white'>Active Patients</h2>
            <div className='w-[385px] h-[382px]'>
              <ActivePatients />
            </div>
          </div>

          {/** upcoming events */}
          <div>
            <h2 className='w-[203px] h-[33px] mb-[30px] font-manrope font-bold text-[24px] leading-[32.78px] text-white'>Upcoming Events</h2>
            <div className='w-[290px] h-[179px]'>
              <TeamMeeting />
            </div>
            <div className='w-[290px] h-[179px] mt-[25px]'>
              <Consultation />
            </div>
          </div>
        </div>
      </div>

      {/** right container */}
      <div className='ml-[7px] mt-[8px]'>
          <ChatContainer />
      </div>
    </div>
  )
}

export default DataContainer