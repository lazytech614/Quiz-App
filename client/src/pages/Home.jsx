import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizLogo from '/quizLogo.png';
import rightArrow from '/rightArrow.svg';
import Dropdown from '../components/Dropdown';
import { categories } from '../constants/categories';
import { numQuestionsOptions } from '../constants/numQuestionsOptions';

const Home = () => {
  const navigate = useNavigate();
  const [numQuestions, setNumQuestions] = useState('');
  const [category, setCategory] = useState('');

  const handleStartClick = () => {
    if (numQuestions && category) {
      navigate(`/question?numQuestions=${numQuestions}&category=${category}`);
    } else {
      alert('Please select both the number of questions and a category.');
    }
  };

  return (
    <div className='diagonal-gradient h-[100vh] flex flex-col justify-center items-center gap-10'>
      <div className='w-[160px] sm:w-[220px] md:w-[300px]'>
        <img className='w-full' src={quizLogo} alt='Quiz Logo' />
      </div>

      <div className='flex flex-col sm:flex-row gap-4'>
        <Dropdown
          label='Number'
          options={numQuestionsOptions}
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
        />

        <Dropdown
          label='Category:'
          options={categories}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className='h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] w-[100px] sm:w-[120px] md:w-[160px] lg:w-[200px] relative bg-[#01AB08] rounded-lg mt-4'>
        <div
          onClick={handleStartClick}
          className='flex justify-center items-center absolute -top-1 md:-top-2 -left-1 md:-left-2 h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] w-[100px] sm:w-[120px] md:w-[160px] lg:w-[200px] capitalize bg-[#35BD3A] rounded-lg cursor-pointer'
        >
          <div className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[30px] pt-[2px]'>
            <img className='w-full' src={rightArrow} alt='' />
          </div>
          <div className='text-white font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px]'>Start Now</div>
        </div>
      </div>

      <p className='fixed bottom-2 text-xs text-[#858585]'>Made with 💖 by Rupanjan</p>
    </div>
  );
};

export default Home;
