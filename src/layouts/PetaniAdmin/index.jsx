import EditIcon from '/public/assets/icons/EditIcon';
import Button from '../../components/Button';
import ChecklistIcon from '../../../public/assets/icons/ChecklistIcon';
import { useEffect, useState } from 'react';
import {
  deletePetaniByNik,
  updateDataPetani,
  updatePetani,
} from '../../Services/petani.service';
import DeleteIcon from '../../../public/assets/icons/DeleteIcon';
import Modal from '../../components/Modal';
import Input from '../../components/Input/Index';

const PetaniAdmin = ({ petani, refreshPetani }) => {
  const [petaniList, setPetaniList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

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

  const handleEdit = (data) => {
    setEditData(data);
    setShowModal(true);
  };

  const handleFormEdit = async (e) => {
    e.preventDefault();
    try {
      await updateDataPetani(editData.nik_petani, editData);
      await refreshPetani();
      alert('Data berhasil dikirim');
      setShowModal(false);
    } catch (error) {
      console.error('Gagal mengirim data:', error);
      alert('Terjadi kesalahan saat mengirim data.');
    }
  };

  return (
    <div id='dataPetani' className='w-full px-5'>
      <h1 className='text-center font-bold uppercase text-3xl border-b-1 pb-2 border-gray-300'>
        Data Petani
      </h1>
      <div className=''>
        <table className='w-full mt-5 border-collapse'>
          <thead>
            <tr className='border-b-1 border-gray-300 uppercase text-base bg-black text-white'>
              <th className='py-2 pl-2'>No</th>
              <th className='py-2'>NIK</th>
              <th className='py-2'>Nama</th>
              <th className='py-2'>Alamat</th>
              <th className='py-2'>Nama Bunga</th>
              <th className='py-2'>Status</th>
              <th className='py-2 pr-2'>Action</th>
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
                      <Button onClick={() => handleEdit(data)}>
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
      {showModal && (
        <Modal onClose={() => setShowModal(null)}>
          <div>
            <h2 className='text-2xl font-bold text-center'>Daftar Petani</h2>
            <p className='text-center text-sm'>
              Silahkan isi data diri anda sesuai dengan KTP
            </p>
          </div>
          <form className='space-y-2 py-2' onSubmit={handleFormEdit}>
            <Input
              label={'NIK'}
              id={'nik'}
              type='text'
              placeholder='Masukkan NIK'
              required
              value={editData.nik_petani}
              disabled
            />
            <Input
              label={'Nama Petani'}
              id={'nama_petani'}
              type='text'
              placeholder='Nama Petani'
              required
              value={editData.nama_petani}
              onChange={(e) =>
                setEditData({ ...editData, nama_petani: e.target.value })
              }
            />
            <Input
              label={'Alamat'}
              id={'alamat_petani'}
              type='text'
              placeholder='Alamat'
              required
              value={editData.alamat_petani}
              onChange={(e) =>
                setEditData({ ...editData, alamat_petani: e.target.value })
              }
            />
            <label htmlFor='nama_bunga' className='font-bold'>
              Nama Bunga Yang Ditanam
            </label>
            <select
              name='nama_bunga'
              id='nama_bunga'
              className='w-full border rounded px-3 py-2 capitalize'
              required
              value={editData.nama_bunga}
              onChange={(e) =>
                setEditData({ ...editData, nama_bunga: e.target.value })
              }
            >
              <option value='philodendron billietiae'>
                philodendron billietiae
              </option>
              <option value='Monstera Marble'>Monstera Marble</option>
              <option value='anthurium king spades'>
                anthurium king spades
              </option>
              <option value='anthurium red crystallinum'>
                anthurium red crystallinum
              </option>
              <option value='anthurium king clarinervium'>
                anthurium king clarinervium
              </option>
              <option value='anthurium king of spades x crystallinum'>
                anthurium king of spades x crystallinum
              </option>
            </select>
            <div className='gap-2 mt-3 flex'>
              <Button
                type='button'
                onClick={() => setShowModal(false)}
                className='w-full py-1.5 border'
              >
                Batal
              </Button>
              <Button
                type='submit'
                className='w-full py-1.5 bg-black text-white'
              >
                Edit Data
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default PetaniAdmin;
