const Modal = ({ children }) => {
  return (
    <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-6 w-1/3'>{children}</div>
    </div>
  );
};

export default Modal;
