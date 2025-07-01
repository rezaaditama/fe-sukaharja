import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Overlay from '../../components/Overlay';

const Header = () => {
  const navigate = useNavigate();

  const handleAboutUs = () => {
    navigate('/about');
  };
  return (
    <div id='header'>
      <Banner
        path_img={'/public/assets/img/kelurahan.png'}
        className={'min-h-screen'}
      >
        <Overlay>
          <h1 className='text-3xl font-bold text-white'>
            Selamat Datang Di Website <br /> Kelurahan Sukaharja kecamatan
            Cijeruk Kabupaten Bogor
          </h1>
          <Button
            onClick={handleAboutUs}
            type={'button'}
            className={'bg-white text-black py-2 px-3'}
          >
            Tentang Kami
          </Button>
        </Overlay>
      </Banner>
    </div>
  );
};

export default Header;
