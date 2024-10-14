import React from 'react'
import quizLogo from '/quizLogo.png'
import volumeUp from '/volumeUp.png'

const HeaderCard = ({ currentQuestionIndex, totalQuestions, level }) => {
  return (
    <div className='relative h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px] bg-green-200 p-2 rounded-md flex justify-between items-start'>
      <div className='h-[40px] sm:h-[60px] md:h-[70px] lg:h-[90px]'><img className='h-full' src={quizLogo} alt="" /></div>
      <div>
        {/* <img className='ml-auto mb-6 w-[18px] sm:w-[24px] md:w-[30px]' src={volumeUp} alt="" /> */}
        <div className='w-[40px] sm:w-[50px] md:w-[60px] lg:w-[100px] h-[24px] sm:h-[30px] md:h-[40px] lg:h-[60px] rounded-lg bg-[#FEC33D] flex justify-center items-center font-semibold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px]'>
          {currentQuestionIndex + 1}/{totalQuestions}
        </div>
        <div className='absolute right-2 bottom-2 w-[80px] h-[40px] rounded-lg bg-[#FEC33D] flex justify-center items-center font-semibold text-[12px]'>{level}</div>
      </div>
    </div>
  );
}


export default HeaderCard