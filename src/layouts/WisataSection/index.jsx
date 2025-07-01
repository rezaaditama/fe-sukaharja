import { useState } from 'react';
import Button from '../../components/Button';
import Overlay from '../../components/Overlay';
import wisataData from '../../data/wisataData.js';

const WisataSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWisata = wisataData[currentIndex];

  const nextVideo = () => {
    if (currentIndex + 1 < wisataData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevVideo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div id='wisataSection' className='relative w-full h-screen'>
      <iframe
        className='w-full h-full object-cover pointer-events-none'
        src={currentWisata.src}
        title={`Video ${currentWisata.nama_wisata}`}
        allow='autoplay; fullscreen'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
      <Overlay>
        <div className='text-center text-white space-y-4 animate-fadeIn'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-wide'>
            {currentWisata.nama_wisata}
          </h1>
          <p className='text-lg md:text-xl font-medium'>
            Lokasi: {currentWisata.lokasi}
          </p>
          <Button
            type='button'
            className='bg-white text-black py-1.5 px-3 font-bold hover:bg-yellow-400 transition-all duration-300'
            onClick={() => window.open(currentWisata.window, '_blank')}
          >
            Lihat Lokasi
          </Button>
        </div>
        <Button
          onClick={prevVideo}
          type='button'
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black text-2xl rounded-full p-2 shadow-md hover:bg-yellow-400 transition-all duration-300 ${
            currentIndex === 0 ? 'invisible' : ''
          }`}
        >
          &lt;
        </Button>
        <Button
          onClick={nextVideo}
          type='button'
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black text-2xl rounded-full p-2 shadow-md hover:bg-yellow-400 transition-all duration-300 ${
            currentIndex + 1 >= wisataData.length ? 'invisible' : ''
          }`}
        >
          &gt;
        </Button>
      </Overlay>
    </div>
  );
};

export default WisataSection;
