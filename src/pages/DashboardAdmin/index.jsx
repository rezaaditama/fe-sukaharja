import Sidebar from '../../components/Sidebar';
import QuickResponse from '../../layouts/QuickResponse';
import DiagramSection from '../../layouts/DiagramSection';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { getAllPetani } from '../../Services/petani.service';
import { getAllPengaduan } from '../../Services/pengaduan.service';
import PetaniAdmin from '../../layouts/PetaniAdmin';

const DashboardAdmin = () => {
  const [petani, setPetani] = useState([]);
  const [pengaduan, setPengaduan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petaniResponse = await getAllPetani();
        setPetani(petaniResponse.data);

        const pengaduanResponse = await getAllPengaduan();
        setPengaduan(pengaduanResponse.data);
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar type='admin' className='bg-black' />
      <div className='grid grid-cols-8 mt-16'>
        <div className='col-span-2'>
          <Sidebar />
        </div>
        <main className='col-span-6 px-10 space-y-2'>
          <DiagramSection petani={petani} pengaduan={pengaduan} />
          <QuickResponse petani={petani} pengaduan={pengaduan} />
          <PetaniAdmin petani={petani} />
        </main>
      </div>
    </div>
  );
};

export default DashboardAdmin;
