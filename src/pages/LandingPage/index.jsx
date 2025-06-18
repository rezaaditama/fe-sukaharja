import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Flowers from '../../data/Flowers';
import { useEffect, useState } from 'react';
import Petani from '../../data/Petani';
import Overlay from '../../components/Overlay';

const LandingPage = () => {
  const [flowers, setFlowers] = useState([]);
  const [petani, setPetani] = useState([]);
  const [Wisata1, setWisata1] = useState([]);
  useEffect(() => {
    setFlowers(Flowers);
    setPetani(Petani);
    setWisata1(Wisata1);
  }, []);

  return (
    <div>
      <Navbar />
      <Banner
        path_img={'/public/assets/img/kelurahan.png'}
        className={'min-h-screen'}
      >
        <Overlay>
          <h1 className='text-3xl font-bold'>
            Selamat Datang Di Website <br /> Kelurahan Sukaharja kecamatan
            Cijeruk Kabupaten Bogor
          </h1>
          <Button type={'button'} className={'bg-white text-black py-2 px-3'}>
            Tentang Kami
          </Button>
        </Overlay>
      </Banner>
      <div className='w-full px-5 py-10'>
        <h1 className='text-center font-bold text-2xl uppercase border-b-1 pb-2 border-gray-300'>
          Potensi Bunga
        </h1>
        <div className='gap-5 w-full grid grid-cols-3 pt-5'>
          {flowers.map((flower, index) => {
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
      <div className='relative w-full h-screen'>
        <iframe
          className='w-full h-full pointer-events-none'
          src='https://www.youtube.com/embed/uTXP3G2Hv2M?autoplay=1&mute=1&loop=1&playlist=uTXP3G2Hv2M&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1'
          title='YouTube video'
          allow='autoplay; fullscreen'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
        <Overlay />
      </div>

      <div className='w-full p-10'>
        <h1 className='text-center font-bold uppercase text-3xl border-b-1 pb-2 border-gray-300'>
          Data Petani
        </h1>
        <div className='max-h-[70vh] overflow-y-auto'>
          <table className='w-full mt-7 border-collapse'>
            <thead>
              <tr className='border-b-1 border-gray-300'>
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
                    key={index}
                    className='text-center border-b-1 border-gray-300'
                  >
                    <td className='pt-3 pb-2'>{index + 1}</td>
                    <td className='pt-3 pb-2'>{data.nik}</td>
                    <td className='pt-3 pb-2 px-2 text-justify'>{data.nama}</td>
                    <td className='pt-3 pb-2 px-2 text-justify'>
                      {data.alamat}
                    </td>
                    <td className='pt-3 pb-2 px-2 text-justify'>
                      {data.bunga}
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
      </div>
    </div>
  );
};

export default LandingPage;
