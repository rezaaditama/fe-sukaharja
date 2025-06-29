const ChecklistIcon = ({
  className = '',
  width = 24,
  height = 24,
  fill = '#000000',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill={fill}
    >
      <path d='M336.9 0L306.419 42.666H42.666V341.333H341.333V140.606L384 80.872V384H0V0H336.9ZM345.307 24.934L380.026 49.733L205.714 293.77L65.254 159.416L94.746 128.584L199.616 228.885L345.307 24.934ZM357.333 0V7.308L347.102 0H357.333Z' />
    </svg>
  );
};

export default ChecklistIcon;
