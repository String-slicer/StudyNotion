import React from 'react'

function CourseCard({ cardData }) {
  return (
    <div>
        <div className='h-[300px] w-[20vw] -translate-y-[20vh] p-2 -translate-x-[50%] bg-white text-black flex flex-col relative'>
            <div className='h-[244px]  border-b border-dashed'>

                <div className='font-semibold text-black'>
                    {cardData.heading}
                </div>
                <div className=''>{cardData.description}</div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='text-sm'>{cardData.level}</div>
                <div className='text-sm'>{cardData.lessionNumber} Lessons</div>
            </div>    

        </div>
    </div>
  )
}

export default CourseCard
