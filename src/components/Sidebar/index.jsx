const Sidebar = ({ activeSection, className = '' }) => {
  const isActive = (id) =>
    `px-4 py-2 border-b border-gray-500 transition duration-300 hover:text-white hover:bg-yellow-400 font-bold ${
      activeSection === id ? 'bg-yellow-400 text-black' : ''
    }`;
  return (
    <aside className='bg-black text-white px-5 py-18 h-screen fixed top-0 left-0 w-2/8'>
      <h1 className='text-xl font-bold mb-6'>Menu Utama</h1>
      <div className='flex flex-col space-y-2 text-base'>
        <a className={isActive('statistikDiagram')} href='#statistikDiagram'>
          Statistik Diagram
        </a>
        <a className={isActive('quickResponse')} href='#quickResponse'>
          Quick Response
        </a>
        <a className={isActive('dataPetani')} href='#dataPetani'>
          Data Petani
        </a>
        <a
          className={isActive('pengaduanMasyarakat')}
          href='#pengaduanMasyarakat'
        >
          Pengaduan Masyarakat
        </a>
        <a className={isActive('pengaduanPetani')} href='#pengaduanPetani'>
          Pengaduan Petani
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
