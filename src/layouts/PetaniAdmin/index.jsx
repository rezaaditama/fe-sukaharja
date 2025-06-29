import EditIcon from '/public/assets/icons/EditIcon';
import Button from '../../components/Button';
import ChecklistIcon from '../../../public/assets/icons/ChecklistIcon';
import { useEffect, useState } from 'react';
import { deletePetaniByNik, updatePetani } from '../../Services/petani.service';
import DeleteIcon from '../../../public/assets/icons/DeleteIcon';

const PetaniAdmin = ({ petani, refreshPetani }) => {
  const [showModal, setShowModal] = useState(false);
  const [petaniList, setPetaniList] = useState([]);

  useEffect(() => {
    setPetaniList(petani);
  }, [petani]);

  const handleDelete = async (nik) => {
    const data = Number(nik);
    try {
      await deletePetaniByNik(data);
      await refreshPetani();
      alert('Data berhasil dihapus');
    } catch (error) {
      console.error('Gagal mengirim data:', error);
      alert('Terjadi kesalahan saat mengirim data.');
    }
  };

  const handleStatus = async (nik) => {
    const data = Number(nik);
    try {
      await updatePetani(data);
      await refreshPetani();
      alert('Data berhasil diverifikasi');
    } catch (error) {
      console.error('Gagal mengirim data:', error);
      alert('Terjadi kesalahan saat mengirim data.');
    }
  };

  return (
    <div id='dataPetaniSection' className='w-full px-5'>
      <h1 className='text-center font-bold uppercase text-3xl border-b-1 pb-2 border-gray-300'>
        Data Petani
      </h1>
      <div className=''>
        <table className='w-full mt-7 border-collapse'>
          <thead>
            <tr className='border-b-1 border-gray-300 uppercase text-base bg-black text-white'>
              <th className='py-2'>No</th>
              <th className='py-2'>NIK</th>
              <th className='py-2'>Nama</th>
              <th className='py-2'>Alamat</th>
              <th className='py-2'>Nama Bunga</th>
              <th className='py-2'>Status</th>
              <th className='py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {petaniList.map((data, index) => {
              return (
                <tr
                  key={data.nik_petani}
                  className='text-center border-b-1 border-gray-300 text-sm align-middle'
                >
                  <td className='py-3 align-middle'>{index + 1}</td>
                  <td className='py-3 align-middle'>{data.nik_petani}</td>
                  <td className='py-3 px-2 text-left align-middle'>
                    {data.nama_petani}
                  </td>
                  <td className='py-3 px-2 text-left align-middle'>
                    {data.alamat_petani}
                  </td>
                  <td className='py-3 px-2 text-left align-middle'>
                    {data.nama_bunga}
                  </td>
                  <td className='py-3 px-2 align-middle'>
                    {data.status === 0 ? 'Waiting' : 'Terverifikasi'}
                  </td>
                  <td className='py-3 pl-4 align-middle'>
                    <div className='flex items-center gap-2'>
                      <Button>
                        <EditIcon width={25} height={25} fill='#eab308' />
                      </Button>
                      <Button onClick={() => handleDelete(data.nik_petani)}>
                        <DeleteIcon width={25} height={25} fill='#ef4444' />
                      </Button>
                      {data.status === 0 && (
                        <Button onClick={() => handleStatus(data.nik_petani)}>
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

export default PetaniAdmin;
