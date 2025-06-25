const Checkbox = ({ id, label, name }) => {
  return (
    <>
      <input type='checkbox' id={id} name={name} />
      <label htmlFor={id} className='text-xs ml-1 text-green-950 font-bold'>
        {label}
      </label>
    </>
  );
};

export default Checkbox;
