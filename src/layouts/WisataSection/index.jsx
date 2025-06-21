import Overlay from '../../components/Overlay';

const WisataSection = () => {
  return (
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
  );
};

export default WisataSection;
