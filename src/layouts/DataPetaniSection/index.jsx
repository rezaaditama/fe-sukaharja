import { useEffect, useState } from 'react';
import { getAllPetani } from '../../Services/petani.service';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input/Index';

const DataPetaniSection = ({ id }) => {
  const [petani, setPetani] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchDataPetani = async () => {
      try {
        const response = await getAllPetani();
        setPetani(response.data);
      } catch (error) {
        console.error('Gagal Membuat Data Petani: ', error);
      }
    };
    fetchDataPetani();
  }, []);

  return (
    <div id='dataPetaniSection' className='w-full py-10 px-5'>
      <h1 className='text-center font-bold uppercase text-3xl border-b-1 pb-2 border-gray-300'>
        Data Petani
      </h1>
      <div className='max-h-[70vh] overflow-y-auto'>
        <table className='w-full mt-7 border-collapse'>
          <thead>
            <tr className='border-b-1 border-gray-300 uppercase text-base bg-black text-white'>
              <th>No</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Nama Bunga</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {petani.map((data, index) => {
              return (
                <tr
                  key={data.nik_petani}
                  className='text-center border-b-1 border-gray-300 text-sm'
                >
                  <td className='pt-3 pb-2'>{index + 1}</td>
                  <td className='pt-3 pb-2'>{data.nik_petani}</td>
                  <td className='pt-3 pb-2 px-2 text-justify'>
                    {data.nama_petani}
                  </td>
                  <td className='pt-3 pb-2 px-2 text-justify'>
                    {data.alamat_petani}
                  </td>
                  <td className='pt-3 pb-2 px-2 text-justify'>
                    {data.nama_bunga}
                  </td>
                  <td className='pt-3 pb-2 px-2'>
                    {data.status === 0 ? 'Waiting' : 'Terverifikasi'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='w-full flex justify-center bg-black text-white py-1 space-x-2 mt-2'>
        <h1>Apakah anda tertarik untuk menjadi petani?</h1>
        <Button type={'button'} onClick={() => setShowModal(true)}>
          Daftar Sekarang
        </Button>
      </div>

      {/* Show Modal */}
      {showModal && (
        <Modal>
          <div className=''>
            <h2 className='text-2xl font-bold text-center'>Daftar Petani</h2>
            <p className='text-center text-sm'>
              Silahkan isi data diri anda sesuai dengan KTP
            </p>
          </div>
          <form className='space-y-2 py-2'>
            <Input
              label={'NIK'}
              id={'nik'}
              type='text'
              placeholder='Masukkan NIK'
              required
            />
            <Input
              label={'Nama Petani'}
              id={'nama_petani'}
              type='text'
              placeholder='Nama Petani'
              required
            />
            <Input
              label={'Alamat'}
              id={'alamat_petani'}
              type='text'
              placeholder='Alamat'
              required
            />
            <Input
              label={'Nama Bunga Yang Akan Ditanam'}
              id={'nama_bunga'}
              type='text'
              placeholder='Nama Bunga'
              required
            />
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
                Daftar
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default DataPetaniSection;
