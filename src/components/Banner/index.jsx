const Banner = ({ children, className, path_img }) => {
  return (
    <div
      className={`${className} bg-cover bg-center relative`}
      style={{ backgroundImage: `url(${path_img})` }}
    >
      {children}
    </div>
  );
};

export default Banner;
