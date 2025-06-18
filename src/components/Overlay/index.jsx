import { twMerge } from 'tailwind-merge';

const Overlay = ({ children, className = '' }) => {
  return (
    <div>
      <div className={twMerge('absolute inset-0 bg-black/75', className)}></div>
      <div className='space-y-5 absolute inset-0 flex items-center justify-center z-10 text-white text-center flex-col'>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
