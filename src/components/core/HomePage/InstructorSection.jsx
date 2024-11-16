import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
function InstructorSection() {
  return (
    <div className='mt-16'>
      <div className=' flex flex-row gap-20 items-center'>
            <div className='w-[50%]'>
                <img src={Instructor} alt="" />
            </div>
            <div className='w-[50%] flex flex-col gap-10'>
                <div className='text-4xl font-semibold w-[50%]'>
                    Become an 
                    <HighlightText text={"Instructor"}></HighlightText> 
                </div>
                <p className='font-medium text-[16x] w-[80%] text-richblack-300'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
            </div>
      </div>
    </div>
  )
}

export default InstructorSection
