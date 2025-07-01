import Navbar from '../../components/Navbar';
import VisiMisi from '../../layouts/VisiMisi';
import Footer from '../../components/Footer';
import Pengurus from '../../layouts/Pengurus';

const AboutUs = () => {
  return (
    <div>
      <Navbar className='bg-white text-black' type={'about'} />
      <div className='text-center mt-16 w-full  bg-black text-white h-[60vh] flex flex-col justify-center space-y-5 p-16'>
        <h1 className='font-bold text-4xl uppercasex'>
          Tentang Kelurahan Sukaharja
        </h1>
        <p className='text-xl'>
          Selamat datang di portal resmi Kelurahan Kami. Menjadi bagian dari
          pemerintah daerah dalam melayani masyarakat dengan tanggap, transparan
          dan akuntabel.
        </p>
      </div>
      <div className='space-y-10'>
        <VisiMisi />
        <Pengurus />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
