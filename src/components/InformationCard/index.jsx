import Button from '../Button';

const InformationCard = ({ children, label, jumlah, onClick, variant }) => {
  return (
    <div
      className={`w-full rounded-xl text-center h-[30vh] flex justify-evenly flex-row items-center ${
        variant === 'black' ? 'bg-black text-white' : 'border'
      }`}
    >
      <div className=''>
        <h1 className='font-bold text-2xl uppercase'>Data {label}</h1>
        <p className='text-base'>
          Jumlah {label} Saat ini : {jumlah}
        </p>
        <Button
          className={`bg-white text-black w-full py-1 mt-1 ${
            variant === 'black' ? 'bg-white' : 'bg-black text-white'
          }`}
          type={'button'}
          onClick={onClick}
        >
          Lihat Laporan
        </Button>
      </div>
      <div className=''>{children}</div>
    </div>
  );
};

export default InformationCard;
