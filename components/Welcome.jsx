import React from 'react';

export const Welcome = () => {
  return (
    <div className='h-full w-full lg:w-[60%] xl:w-[70%] px-8 lg:px-[4.5rem] transition-all'>
      <h2 className='text-lightGray text-5xl lg:text-7xl font-extralight tracking-wider'>
        Welcome.
      </h2>
      <div className='flex gap-4 mt-8 lg:mt-16 h-fit'>
        <div className='hidden lg:block h-auto w-4 bg-gradient-to-b from-[#6EE7B7] to-[#3B82F6] rounded-lg'></div>
        <div className='flex flex-col gap-4 text-lightGray'>
          <p className='w-full'>
            My name is Landon Spell, I&apos;m a full-stack developer based in
            Austin, Texas, US. I am a graduate of General Assembly&apos;s
            Software Engineering Immersive course where I developed many types
            of applications (front-end and back-end) with a propensity for
            front-end design.
          </p>
          <p>
            I&apos;m passionate about cutting-edge, pixel-perfect, beautiful
            interfaces and intuitively implemented UX.
          </p>
        </div>
      </div>
    </div>
  );
};
