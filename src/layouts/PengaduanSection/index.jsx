import { useState } from 'react';
import MasyarakatIcon from '../../../public/assets/icons/masyarakatIcon';
import PetaniIcon from '../../../public/assets/icons/PetaniIcon';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const PengaduanSection = () => {
  const [modalType, setModalType] = useState(null);
  return (
    <div
      className='min-h-screen p-10 flex flex-col justify-center gap-10'
      id='pengaduanSection'
    >
      <h1 className='text-center text-3xl font-bold uppercase border-b-1 pb-2 border-gray-300'>
        Laporan Pengaduan
      </h1>
      <div className='grid grid-cols-2 gap-5'>
        <div className='bg-black h-[75vh] p-6 rounded-xl text-white flex flex-col justify-between'>
          <div className='space-y-4'>
            <h2 className='text-center text-xl font-bold uppercase'>
              Lapor Petani
            </h2>
            <div className='flex flex-col items-center h-full justify-evenly'>
              <PetaniIcon
                width={120}
                height={120}
                fill='#ffff'
                className='hover:scale-125 transition duration-300'
              />
              <p className='text-justify text-sm leading-relaxed font-semibold'>
                Jika Anda menemukan petani yang mengalami kendala seperti gagal
                panen, kesulitan mendapatkan pupuk, atau gangguan lainnya di
                lapangan, silakan sampaikan laporan melalui tombol di bawah.
                Data ini akan membantu dalam penanganan cepat dan tepat.
              </p>
            </div>
          </div>
          <Button
            className='bg-white text-black px-4 py-2 hover:bg-yellow-400 hover:text-white transition duration-300 self-center w-1/2'
            type={'button'}
            onClick={() => setModalType('petani')}
          >
            Lapor Tani
          </Button>
        </div>
        <div className='bg-white border h-[75vh] p-6 rounded-xl text-black flex flex-col justify-between'>
          <div className='space-y-4'>
            <h2 className='text-center text-xl font-bold uppercase'>
              Aduan Masyarakat
            </h2>
            <div className='flex flex-col items-center h-full justify-evenly'>
              <MasyarakatIcon
                width={120}
                height={120}
                fill='#0000'
                className='hover:scale-125 transition duration-300'
              />
              <p className='text-justify text-sm leading-relaxed font-semibold'>
                Masyarakat dapat menyampaikan keluhan terkait kegiatan pertanian
                yang berdampak pada lingkungan sekitar, seperti pencemaran,
                kebisingan, atau konflik lahan. Laporkan dengan jelas agar pihak
                terkait dapat segera menindaklanjuti.
              </p>
            </div>
          </div>
          <Button
            className='bg-black text-white px-4 py-2 hover:bg-yellow-500 transition duration-300 self-center w-1/2'
            type={'button'}
            onClick={() => setModalType('masyarakat')}
          >
            Adukan Sekarang
          </Button>
        </div>
      </div>
      {modalType && (
        <Modal onClose={() => setModalType(null)}>
          <h2 className='text-xl font-bold text-center mb-4 uppercase'>
            Form Pengaduan {modalType === 'petani' ? 'Petani' : 'Masyarakat'}
          </h2>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-semibold mb-1'>
                Kategori
              </label>
              <select className='w-full border rounded px-3 py-2'>
                {modalType === 'petani' ? (
                  <>
                    <option value='gagal_panen'>Gagal Panen</option>
                    <option value='pupuk'>Sulit Mendapatkan Pupuk</option>
                    <option value='alat'>Kekurangan Alat</option>
                    <option value='lain_lain'>Lain-lain</option>
                  </>
                ) : (
                  <>
                    <option value='umum'>Umum</option>
                    <option value='infrastruktur'>Infrastruktur</option>
                    <option value='lingkungan'>Lingkungan</option>
                    <option value='kesehatan'>Kesehatan</option>
                  </>
                )}
              </select>
            </div>
            <div>
              <label className='block text-sm font-semibold mb-1'>
                Deskripsi Aduan
              </label>
              <textarea
                rows={4}
                className='w-full border rounded px-3 py-2'
                placeholder={`Tuliskan detail pengaduan ${
                  modalType === 'petani' ? 'petani' : 'masyarakat'
                }...`}
              ></textarea>
            </div>
            <div className='gap-2 mt-3 flex'>
              <Button
                type='button'
                onClick={() => setModalType(false)}
                className='w-full py-1.5 border'
              >
                Batal
              </Button>
              <Button
                type='submit'
                className='w-full py-1.5 bg-black text-white'
              >
                Kirim
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default PengaduanSection;
