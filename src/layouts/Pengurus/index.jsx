import React from 'react';
import Profile from '../../components/Profile';

const Pengurus = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-blue-800 mb-4'>
            Struktur Organisasi
          </h2>
          <p className='max-w-2xl mx-auto'>
            Kepengurusan kelurahan periode 2022-2027
          </p>
        </div>

        <div className='flex justify-center mb-10'>
          <Profile
            nama={'M. Fahreza'}
            jabatan={'Lurah'}
            motto={'Pelayanan prima demi kesejahteraan masyarakat'}
            src={'/public/assets/img/lurah.jpg'}
          />
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Profile
            nama={'Tasya Cantika'}
            jabatan={'Sekertaris Kelurahan'}
            motto={'Inovasi pelayanan untuk kepuasan masyarakat'}
            src={'/public/assets/img/sekertaris-kelurahan.jpg'}
          />{' '}
          <Profile
            nama={'Arum Ulan Pangestu'}
            jabatan={'Bendahara Kelurahan'}
            motto={'Koordinasi dan administrasi yang akurat'}
            src={'/public/assets/img/bendahara-kelurahan.jpg'}
          />
          <Profile
            nama={'Reza Aditama'}
            jabatan={'Ketua Dewan Pengawas'}
            motto={'Pengawasan Yang Ketat Pencegahan Korupsi'}
            src={'/public/assets/img/ketua-dewan-pengawas.jpg'}
          />
        </div>
      </div>
    </section>
  );
};

export default Pengurus;
