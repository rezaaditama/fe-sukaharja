import PointerIcon from '../../../public/assets/icons/PointerIcon';

const VisiMisi = () => {
  return (
    <section class='mt-6 px-10 mx-auto grid grid-cols-2 gap-x-12'>
      <div className='shadow-xl rounded-xl p-10'>
        <h2 className='text-3xl font-bold text-black mb-6'>Visi Kelurahan</h2>
        <p className='text-lg text-gray-700'>
          "Mewujudkan kelurahan yang mandiri, sejahter, dan berbudaya melalui
          pelayanan prima berbasis teknologi"
        </p>
      </div>
      <div className='shadow-xl rounded-xl p-10'>
        <h2 className='text-3xl font-bold text-black mb-6'>Misi Kelurahan</h2>
        <ul className='space-y-4'>
          <li className='flex items-start'>
            <span className='bg-gray-100 text-black rounded-full p-2 mr-4'>
              <PointerIcon />
            </span>
            <span className='flex-1'>
              Meningkatkan kualitas pelayanan publik berbasis teknologi
            </span>
          </li>
          <li className='flex items-start'>
            <span className='bg-gray-100 text-black rounded-full p-2 mr-4'>
              <PointerIcon />
            </span>
            <span className='flex-1'>
              Memperkuat partisipasi masyarakat dalam pembangunan
            </span>
          </li>
          <li className='flex items-start'>
            <span className='bg-gray-100 text-black rounded-full p-2 mr-4'>
              <PointerIcon />
            </span>
            <span className='flex-1'>
              Mengembangkan ekonomi kreatif berbasis potensi lokal
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VisiMisi;
