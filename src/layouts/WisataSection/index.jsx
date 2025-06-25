import Button from '../../components/Button';
import Overlay from '../../components/Overlay';

const WisataSection = () => {
  return (
    <div className='relative w-full h-screen'>
      <iframe
        className='w-full h-full pointer-events-none'
       src='https://www.youtube.com/embed/-U_3EqyyP3o?autoplay=1&mute=1&loop=1&playlist=-U_3EqyyP3o&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1'

        title='YouTube video'
        allow='autoplay; fullscreen'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
     <Overlay>
        <h1 className='text-3xl font-bold text-white'>
          PANORAMA HILLS <br /> Pondok Bitung, Sukaharja, Cijeruk, Bogor.
        </h1>
        <Button type={'button'} className={'bg-white text-black py-2 px-3'}>
          Tentang Kami
        </Button>
         {/* <Button type={'button'} className={'bg-white text-black '}>
          &gt;
        </Button> */}
      </Overlay>
    </div>
  );
};

export default WisataSection;
