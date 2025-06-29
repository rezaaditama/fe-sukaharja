import { useEffect, useState } from 'react';
import ChecklistIcon from '../../../public/assets/icons/ChecklistIcon';
import { updatePengaduan } from '../../Services/pengaduan.service';
import EditIcon from '../../../public/assets/icons/editIcon';
import Button from '../../components/Button';

const PengaduanAdminMasyarakat = ({ pengaduan, refreshPengaduan }) => {
  const [pengaduanList, setPengaduanList] = useState([]);

  useEffect(() => {
    setPengaduanList(pengaduan);
  }, [pengaduan]);

  const handleStatus = async (nik) => {
    const data = Number(nik);
    try {
      await updatePengaduan(data);
      await refreshPengaduan();
      alert('Data berhasil diverifikasi');
    } catch (error) {
      console.error('Gagal mengirim data:', error);
      alert('Terjadi kesalahan saat mengirim data.');
    }
  };
  return (
    <div id='pengaduanMasyarakat' className='w-full px-5'>
      <h1 className='text-center font-bold uppercase text-3xl border-b-1 pb-2 border-gray-300'>
        Data Pengaduan Masyarakat
      </h1>
      <div className=''>
        <table className='w-full mt-5 border-collapse'>
          <thead>
            <tr className='border-b-1 border-gray-300 uppercase text-base bg-black text-white'>
              <th className='py-2 pl-2'>No</th>
              <th className='py-2'>Detail</th>
              <th className='py-2'>Waktu</th>
              <th className='py-2'>Kategori</th>
              <th className='py-2'>Status</th>
              <th className='py-2 pr-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {pengaduanList
              .filter((data) => data.jenis_pengaduan === 'masyarakat')
              .map((data, index) => {
                return (
                  <tr
                    key={data.pengaduan_id}
                    className='text-center border-b-1 border-gray-300 text-sm align-middle'
                  >
                    <td className='py-3 align-middle'>{index + 1}</td>
                    <td className='py-3 px-2 text-left align-middle'>
                      {data.detail_pengaduan}
                    </td>
                    <td className='py-3 px-2 text-left align-middle'>
                      {data.waktu_pengaduan}
                    </td>
                    <td className='py-3 px-2 text-center align-middle'>
                      {data.kategori_pengaduan}
                    </td>
                    <td className='py-3 px-2 align-middle'>
                      {data.status_pengaduan === 0
                        ? 'Waiting'
                        : 'Sudah Teratasi'}
                    </td>
                    <td className='py-3 pl-4 align-middle'>
                      <div className='flex items-center gap-2'>
                        {data.status_pengaduan === 0 && (
                          <Button
                            onClick={() => handleStatus(data.pengaduan_id)}
                          >
                            <ChecklistIcon
                              width={25}
                              height={25}
                              fill='#22c55e'
                            />
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PengaduanAdminMasyarakat;
