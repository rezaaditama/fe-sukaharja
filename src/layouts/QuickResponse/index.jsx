import React from 'react';
import MasyarakatIcon from '../../../public/assets/icons/masyarakatIcon';
import PetaniIcon from '../../../public/assets/icons/PetaniIcon';
import InformationCard from '../../components/InformationCard';

const QuickResponse = ({ petani, pengaduan }) => {
  const jumlahPetani = petani.length;
  const jumlahPengaduan = pengaduan.length;
  return (
    <div className='border border-gray-300 p-5 rounded-xl space-y-3'>
      <h1 className='text-center font-bold text-2xl'>Quick Respon</h1>
      <div className='grid grid-cols-2 gap-5'>
        <InformationCard label='Petani' variant='black' jumlah={jumlahPetani}>
          <PetaniIcon
            width={70}
            height={70}
            fill='#ffffff'
            className='hover:scale-125 transition duration-300'
          />
        </InformationCard>
        <InformationCard label='Pengaduan' jumlah={jumlahPengaduan}>
          <MasyarakatIcon
            width={90}
            height={90}
            fill='black'
            className='hover:scale-125 transition duration-300'
          />
        </InformationCard>
      </div>
    </div>
  );
};

export default QuickResponse;
