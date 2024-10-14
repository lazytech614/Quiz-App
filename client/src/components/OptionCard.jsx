import React from 'react';

const OptionCard = ({ option, isSelected, isCorrect, onClick, isDisabled }) => {
  return (
    <div 
      onClick={onClick} 
      className={`min-h-[40px] sm:min-h-[52px] md:min-h-[60px] lg:min-h-[75px] w-[100%] rounded-md border-2 border-[#D9D9D9] cursor-pointer flex items-center px-2 font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] 
        ${isSelected ? (isCorrect ? 'bg-green-500' : 'bg-[#FF7A7A]') : ''}`}
      style={{ pointerEvents: isDisabled ? 'none' : 'auto' }} // Disable selection after user chooses an option
    >
      {option}
    </div>
  );
};

export default OptionCard;
