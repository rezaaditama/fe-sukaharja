import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='bg-black text-white px-5 py-18 h-screen fixed top-0 left-0 w-2/8'>
      <h1 className='text-xl font-bold mb-6'>Menu Utama</h1>
      <div className='flex flex-col space-y-2 text-base'>
        <Link
          to='/admin/dashboard'
          className='px-4 py-2 bg-yellow-500 border-b border-gray-400 hover:text-yellow-500 hover:bg-white transition'
        >
          Statistik Diagram
        </Link>
        <Link className='px-4 py-2 hover:bg-yellow-500 border-b border-gray-400 transition'>
          Quick Response
        </Link>
        <Link className='px-4 py-2 hover:bg-yellow-500 border-b border-gray-400 transition'>
          Data Petani
        </Link>
        <Link className='px-4 py-2 hover:bg-yellow-500 border-b border-gray-400 transition'>
          Pengaduan
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
