import { useEffect, useState } from 'react';
import { getAllPetani, postPetani } from '../../Services/petani.service';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input/Index';

const DataPetaniSection = ({ type }) => {
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

  const handleFormPetani = async (e) => {
    e.preventDefault();
    const value = {
      nik_petani: Number(e.target.nik.value),
      alamat_petani: e.target.alamat_petani.value,
      nama_petani: e.target.nama_petani.value,
      nama_bunga: e.target.nama_bunga.value,
    };

    try {
      await postPetani(value);
      alert('Data berhasil dikirim');
      setShowModal(false);
      const response = await getAllPetani();
      setPetani(response.data);
    } catch (error) {
      console.error('Gagal mengirim data:', error);
      alert('Terjadi kesalahan saat mengirim data.');
    }
  };

  return (
    <div id='dataPetaniSection' className='w-full p-10 px-5'>
      <h1 className='text-center font-bold uppercase text-3xl border-b-1 pb-2 border-gray-300'>
        Data Petani
      </h1>
      <div className='max-h-[70vh] overflow-y-auto'>
        <table className='w-full mt-7 border-collapse'>
          <thead>
            <tr className='border-b-1 border-gray-300 uppercase text-base bg-black text-white'>
              <th className='py-2'>No</th>
              <th className='py-2'>NIK</th>
              <th className='py-2'>Nama</th>
              <th className='py-2'>Alamat</th>
              <th className='py-2'>Nama Bunga</th>
              <th className='py-2'>Status</th>
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
      {type !== 'admin' && (
        <div className='w-full flex justify-center bg-black text-white py-1 space-x-2 mt-2'>
          <h1>Apakah anda tertarik untuk menjadi petani?</h1>
          <Button type={'button'} onClick={() => setShowModal(true)}>
            Daftar Sekarang
          </Button>
        </div>
      )}
      {showModal && (
        <Modal onClose={() => setShowModal(null)}>
          <div>
            <h2 className='text-2xl font-bold text-center'>Daftar Petani</h2>
            <p className='text-center text-sm'>
              Silahkan isi data diri anda sesuai dengan KTP
            </p>
          </div>
          <form className='space-y-2 py-2' onSubmit={handleFormPetani}>
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
            <label htmlFor='nama_bunga' className='font-bold'>
              Nama Bunga Yang Ditanam
            </label>
            <select
              name='nama_bunga'
              id='nama_bunga'
              className='w-full border rounded px-3 py-2 capitalize'
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
