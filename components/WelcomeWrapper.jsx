import React from 'react';

export const WelcomeWrapper = ({ children }) => {
  return (
    <div className='w-full h-full max-w-screen lg:max-w-[1800px] max-h-full lg:max-h-[48rem] flex rounded-2xl relative transition-all p-4'>
      <div className='absolute top-0 left-0 rounded-tl-xl w-1/2 h-1/2 aspect-square bg-gradient-to-br p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#3B82F6]'></div>

      <div className='w-1/2 h-1/2 aspect-square bg-darkGray absolute top-4 left-4 rounded-lg'></div>

      <div className='z-10 w-full h-full overflow-auto'>{children}</div>

      <div className='absolute bottom-0 right-0 rounded-br-xl w-1/2 h-1/2 aspect-square bg-gradient-to-tl p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#3B82F6]'></div>

      <div className='w-1/2 h-1/2 aspect-square bg-darkGray absolute bottom-4 right-4 rounded-lg'></div>
    </div>
  );
};
