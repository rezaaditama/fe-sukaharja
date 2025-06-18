import { twMerge } from 'tailwind-merge';
import Button from '../Button';

const Card = ({ src, name, label, className = '' }) => {
  return (
    <div
      className={twMerge(
        'shadow-2xl shadow-gray-600 rounded-xl p-4 flex items-center flex-col space-y-2',
        className
      )}
    >
      <img src={src} alt={name} className='w-full object-contain h-72' />
      <h1 className='font-bold text-lg capitalize'>{name}</h1>
      <Button type={'button'} className={'bg-black text-white w-3/4 py-2'}>
        {label}
      </Button>
    </div>
  );
};

export default Card;
