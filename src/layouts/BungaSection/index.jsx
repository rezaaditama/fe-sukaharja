import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import { getAllBunga } from '../../Services/bunga.service';

const BungaSection = () => {
  const [bunga, setBunga] = useState([]);
  useEffect(() => {
    const fetchDataBunga = async () => {
      try {
        const response = await getAllBunga();
        setBunga(response.data);
      } catch (error) {
        console.error('Gagal Membuat Data Petani: ', error);
      }
    };
    fetchDataBunga();
  }, []);

  return (
    <div className='w-full px-5 py-10'>
      <h1 className='text-center font-bold text-2xl uppercase border-b-1 pb-2 border-gray-300'>
        Potensi Bunga
      </h1>
      <div className='gap-5 w-full grid grid-cols-3 pt-5'>
        {bunga.map((flower, index) => {
          return (
            <Card
              key={index}
              src={flower.path}
              name={flower.nama_bunga}
              label={'Lihat Detail'}
              className={'w-full'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BungaSection;
