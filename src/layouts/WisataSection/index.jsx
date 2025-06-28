import Button from '../../components/Button';
import Overlay from '../../components/Overlay';

const WisataSection = () => {
  return (
    <div className='relative w-full h-screen' id='wisataSection'>
      <iframe
        className='w-full h-full object-cover pointer-events-none'
        src='https://www.youtube.com/embed/-U_3EqyyP3o?autoplay=1&mute=1&loop=1&playlist=-U_3EqyyP3o&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1'
        title='YouTube video'
        allow='autoplay; fullscreen'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
      <Overlay>
        <div className='text-center text-white space-y-4 animate-fadeIn'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-wide'>
            PANORAMA HILLS
          </h1>
          <p className='text-lg md:text-xl font-medium'>
            Lokasi: Pondok Bitung, Sukaharja, Cijeruk, Bogor
          </p>
          <Button
            type='button'
            className='bg-white text-black py-1.5 px-3 font-bold hover:bg-yellow-400 transition-all duration-300'
          >
            Lihat Detail
          </Button>
        </div>
      </Overlay>
    </div>
  );
};

export default WisataSection;
