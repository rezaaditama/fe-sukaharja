import { twMerge } from 'tailwind-merge';

const Button = ({ type, children, className = '', onClick }) => {
  return (
    <button
      className={twMerge('rounded-xl font-bold text-base', className)}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
