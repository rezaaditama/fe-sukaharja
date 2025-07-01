import { Link, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import LogoutIcon from '../../../public/assets/icons/LogoutIcon';
import Button from '../Button';

const Navbar = ({ activeSection, type, className = '' }) => {
  const navigate = useNavigate();
  const isActive = (id) =>
    `hover:text-yellow-500 transition duration-300 ${
      activeSection === id ? 'text-yellow-500 font-extrabold' : ''
    }`;

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <nav
      className={twMerge(
        'fixed top-0 w-full z-50 flex justify-between items-center h-16 px-8 text-white font-semibold bg-black/65',
        className
      )}
    >
      <div className='flex space-x-4 items-center'>
        <img src='/public/assets/img/logo.png' alt='Logo' className='w-10' />
        <h1 className='uppercase text-2xl'>Sukaharja</h1>
      </div>
      {type === 'user' && (
        <div className='space-x-4 text-base'>
          <a className={isActive('header')} href='#header'>
            Tentang Kami
          </a>
          <a
            className={isActive('potensiBungaSection')}
            href='#potensiBungaSection'
            d
          >
            Potensi Bunga
          </a>
          <a className={isActive('potensiWisataSection')} href='#wisataSection'>
            Wisata
          </a>
          <a
            href='#dataPetaniSection'
            className={isActive('potensiPetaniSection')}
          >
            Petani Lokal
          </a>
          <a href='#pengaduanSection' className={isActive('pengaduanSection')}>
            Laporan Pengaduan
          </a>
        </div>
      )}
      {type === 'admin' && (
        <div className='flex gap-5'>
          <h1 className='uppercase font-bold'>Dashboard Admin</h1>
          {localStorage.getItem('username') && (
            <Button onClick={handleLogout}>
              <LogoutIcon
                width={25}
                height={25}
                stroke='#ef4444'
                className='hover:scale-125 transition duration-300'
              />
            </Button>
          )}
        </div>
      )}{' '}
      {type === 'about' && (
        <div className='space-x-4 text-base'>
          <Link to={'/'} className={isActive('header')}>
            Tentang Kami
          </Link>
          <Link to={'/'} className={isActive('potensiBungaSection')}>
            Potensi Bunga
          </Link>
          <Link to={'/'} className={isActive('potensiWisataSection')}>
            Wisata
          </Link>
          <Link to={'/'} className={isActive('potensiPetaniSection')}>
            Petani Lokal
          </Link>
          <Link to={'/'} className={isActive('pengaduanSection')}>
            Laporan Pengaduan
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
