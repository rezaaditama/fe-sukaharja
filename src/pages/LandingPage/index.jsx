import Navbar from '../../components/Navbar';
import Header from '../../layouts/Header';
import BungaSection from '../../layouts/BungaSection';
import WisataSection from '../../layouts/WisataSection';
import DataPetaniSection from '../../layouts/DataPetaniSection';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BungaSection />
      <WisataSection />
      <DataPetaniSection />
    </>
  );
};

export default LandingPage;
