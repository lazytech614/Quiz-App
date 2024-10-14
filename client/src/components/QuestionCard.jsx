import React from 'react';

const QuestionCard = ({ question, level }) => {
  return (
    <div className='relative h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] bg-[#F5F5F5] rounded-md px-4 flex items-center text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-semibold overflow-y-auto'>
      <span>{question}</span>
      {/* <div className='absolute right-2 top-2 w-[80px] h-[40px] rounded-lg bg-[#FEC33D] flex justify-center items-center font-semibold text-[12px]'>{level}</div> */}
    </div>
  );
};

export default QuestionCard;
