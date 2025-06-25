import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Overlay from '../../components/Overlay';

const Header = () => {
  return (
    <Banner
      path_img={'/public/assets/img/kelurahan.png'}
      className={'min-h-screen'}
    >
      <Overlay>
        <h1 className='text-3xl font-bold text-white'>
          Selamat Datang Di Website <br /> Kelurahan Sukaharja kecamatan Cijeruk
          Kabupaten Bogor
        </h1>
        <Button type={'button'} className={'bg-white text-black py-2 px-3'}>
          Tentang Kami
        </Button>
      </Overlay>
    </Banner>
  );
};

export default Header;
