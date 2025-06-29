const InformationCard = ({ children, label, jumlah, variant }) => {
  return (
    <div
      className={`w-full rounded-xl text-center h-[30vh] flex justify-evenly flex-row items-center ${
        variant === 'black' ? 'bg-black text-white' : 'border'
      }`}
    >
      <div className=''>
        <h1 className='font-bold text-2xl uppercase'>Data {label}</h1>
        <p className='text-base capitalize mb-2'>
          Jumlah {label} Saat ini : {jumlah}
        </p>

        <a
          href={label === 'petani' ? '#dataPetani' : '#pengaduanMasyarakat'}
          className={` text-black w-full py-1  px-5 rounded-xl mt-1 font-bold ${
            variant === 'black' ? 'bg-white' : 'bg-black text-white'
          }`}
        >
          Lihat Laporan
        </a>
      </div>
      <div className=''>{children}</div>
    </div>
  );
};

export default InformationCard;
