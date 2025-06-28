const Navbar = ({ activeSection, type }) => {
  const isActive = (id) =>
    `hover:text-yellow-500 transition duration-300 ${
      activeSection === id ? 'text-yellow-500 font-extrabold' : ''
    }`;
  return (
    <nav className='fixed top-0 w-full z-50 flex justify-between items-center h-16 px-8 text-white font-semibold bg-black/65'>
      <div className='flex space-x-4 items-center'>
        <img src='/public/assets/img/logo.png' alt='Logo' className='w-10' />
        <h1 className='uppercase text-2xl'>Sukaharja</h1>
      </div>
      {type !== 'admin' && (
        <div className='space-x-4 text-base'>
          <a className={isActive('header')} href='#header'>
            Tentang Kami
          </a>
          <a
            className={isActive('potensiBungaSection')}
            href='#potensiBungaSection'
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
    </nav>
  );
};

export default Navbar;
