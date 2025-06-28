const Input = ({ label, id, className, type, placeholder, required }) => {
  return (
    <div className=''>
      <label htmlFor={id} className='font-bold'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={`${className} w-full py-2 px-3 border rounded-md focus:outline-gray-500`}
        required={required}
      />
    </div>
  );
};

export default Input;
