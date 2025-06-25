import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-50 flex justify-between items-center h-16 px-8 text-white font-bold bg-black/65'>
      <div className='flex space-x-4 items-center'>
        <img src='/public/assets/img/logo.png' alt='Logo' className='w-10' />
        <h1 className='uppercase text-2xl'>Sukaharja</h1>
      </div>
      <div className='space-x-4 text-base'>
        <Link className='hover:underline'>Tentang Kami</Link>
        <Link className='hover:underline'>Potensi Bunga</Link>
        <Link className='hover:underline'>Wisata</Link>
        <Link className='hover:underline'>Petani Lokal</Link>
        <Link className='hover:underline'>Laporan Pengaduan</Link>
      </div>
    </nav>
  );
};

export default Navbar;
