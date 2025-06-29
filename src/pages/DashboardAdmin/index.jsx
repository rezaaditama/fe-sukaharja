import Sidebar from '../../components/Sidebar';
import QuickResponse from '../../layouts/QuickResponse';
import DiagramSection from '../../layouts/DiagramSection';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { getAllPetani } from '../../Services/petani.service';
import { getAllPengaduan } from '../../Services/pengaduan.service';
import PetaniAdmin from '../../layouts/PetaniAdmin';
import PengaduanAdminMasyarakat from '../../layouts/PengaduanMasyarakatAdmin';
import PengaduanPetaniAdmin from '../../layouts/PengaduanPetaniAdmin';
import { useAuth } from '../../hooks/useAuth';

const DashboardAdmin = () => {
  const [petani, setPetani] = useState([]);
  const [pengaduan, setPengaduan] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  const loginActivity = useAuth();

  return (
    <div>
      <Navbar type='admin' className='bg-black' />
      <div className='grid grid-cols-8 mt-16'>
        <div className='col-span-2'>
          <Sidebar />
        </div>
        <main className='col-span-6 px-10 space-y-10 mb-16'>
          <DiagramSection petani={petani} pengaduan={pengaduan} />
          <QuickResponse petani={petani} pengaduan={pengaduan} />
          <PetaniAdmin petani={petani} refreshPetani={fetchData} />
          <PengaduanAdminMasyarakat
            pengaduan={pengaduan}
            refreshPengaduan={fetchData}
          />
          <PengaduanPetaniAdmin
            pengaduan={pengaduan}
            refreshPengaduan={fetchData}
          />
        </main>
      </div>
    </div>
  );
};

export default DashboardAdmin;
