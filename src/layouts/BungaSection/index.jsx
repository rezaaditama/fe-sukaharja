import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import { getAllBunga } from '../../Services/bunga.service';
import Button from '../../components/Button';

const BungaSection = () => {
  const [bunga, setBunga] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const pageItems = 3;

  useEffect(() => {
    const fetchDataBunga = async () => {
      try {
        const response = await getAllBunga();
        setBunga(response.data);
      } catch (error) {
        console.error('Gagal Mengambil Data Bunga: ', error);
      }
    };
    fetchDataBunga();
  }, []);

  const nextSlide = () => {
    if (currentIndex + pageItems < bunga.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentItems = bunga.slice(currentIndex, currentIndex + pageItems);

  return (
    <div className='w-full px-5 py-10'>
      <h1 className='text-center font-bold text-2xl uppercase border-b pb-2 border-gray-300'>
        Potensi Bunga
      </h1>
      <div className='flex justify-between items-center mt-6 space-x-2'>
        <Button
          onClick={prevSlide}
          type='button'
          className={`px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 cursor-pointer ${
            currentIndex === 0 ? 'invisible' : ''
          }`}
        >
          &lt;
        </Button>
        <div className='flex items-center justify-between w-full gap-3'>
          {currentItems.map((flower, index) => (
            <Card
              key={index}
              src={flower.path}
              name={flower.nama_bunga}
              label='Lihat Detail'
              className='w-full'
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          type={'button'}
          className={`px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 cursor-pointer ${
            currentIndex + pageItems >= bunga.length ? 'invisible' : ''
          }`}
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default BungaSection;
