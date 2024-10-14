import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import quizLogo from '/quizLogo.png';
import leftArrow from '/leftArrow.svg';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 25 }; // Fallback to 0 if score is not passed

  const widthPercentage = Math.floor((score / totalQuestions) * 100); // Calculate the percentage of the score

  return (
    <div className="min-h-[100vh] bg-green-100 flex flex-col justify-center items-center">
      <div className='w-[300px]'>
        <img className='w-full' src={quizLogo} alt="quiz time" />
        <div className='text-4xl font-bold my-4'>Quiz Completed!</div>
      </div>
      <div className={`${widthPercentage===0 ? 'hidden' : ''} relative h-[60px] lg:h-[80px] w-[80%] lg:w-[50%] bg-[#FF7A7A] rounded-md`}>
        <div
          className='absolute top-0 left-0 h-full bg-green-500 rounded-md'
          style={{ width: `${widthPercentage}%` }} // Set the width using inline styles
        ></div>
      </div>
      <div className='mt-4 text-2xl font-semibold'>Your Score: {score}/{totalQuestions}</div>
      <div className='mt-2'>Score Percentage: {widthPercentage}%</div>
      <div className='h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] w-[100px] sm:w-[120px] md:w-[160px] lg:w-[200px] relative bg-[#01AB08] rounded-lg mt-4'>
        <div
          onClick={() => navigate("/")}
          className='flex justify-center items-center absolute -top-1 md:-top-2 -left-1 md:-left-2 h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] w-[100px] sm:w-[120px] md:w-[160px] lg:w-[200px] capitalize bg-[#35BD3A] rounded-lg cursor-pointer'
        >
          <div className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[30px] pt-[2px]'>
            <img className='w-full' src={leftArrow} alt='' />
          </div>
          <div className='text-white font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px]'>Quiz Again</div>
        </div>
      </div>
      <p className='fixed bottom-2 left-1/2 -translate-x-1/2 text-xs text-[#858585]'>Made with 💖 by Rupanjan</p>
    </div>
  );
};

export default Result;
