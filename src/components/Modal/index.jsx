import { useEffect, useState } from 'react';

const Modal = ({ children, onClose, className }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger show class after mount
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div
        className={`${className} relative bg-white rounded-lg p-6 w-1/3 transform transition duration-300 ${
          show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <button
          className='absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl font-bold'
          onClick={onClose}
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
