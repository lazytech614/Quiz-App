import React from 'react';

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className='flex flex-col items-center'>
      <select
        value={value}
        onChange={onChange}
        className='h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px]  rounded-lg border bg-[#35BD3A] text-white border-[#229326] text-center text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] outline-none'
      >
        <option value='' disabled>{label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.name} className='text-[16px]'>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
