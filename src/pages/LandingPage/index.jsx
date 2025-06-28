import Navbar from '../../components/Navbar';
import Header from '../../layouts/Header';
import BungaSection from '../../layouts/BungaSection';
import WisataSection from '../../layouts/WisataSection';
import DataPetaniSection from '../../layouts/DataPetaniSection';
import Footer from '../../components/Footer';
import { useEffect, useRef, useState } from 'react';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef(null);
  const bungaRef = useRef(null);
  const wisataRef = useRef(null);
  const petaniRef = useRef(null);

  useEffect(() => {
    const section = [
      { id: 'header', ref: headerRef },
      { id: 'bunga', ref: bungaRef },
      { id: 'wisata', ref: wisataRef },
      { id: 'petani', ref: petaniRef },
    ];

    const scroll = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.5 }
    );

    section.forEach(({ ref }) => {
      if (ref.current) scroll.observe(ref.current);
    });

    return () => scroll.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <div id='header' ref={headerRef}>
        <Header />
      </div>
      <div id='potensiBungaSection' ref={bungaRef}>
        <BungaSection />
      </div>
      <div id='potensiWisataSection' ref={wisataRef}>
        <WisataSection />
      </div>
      <div id='potensiPetaniSection' ref={petaniRef}>
        <DataPetaniSection />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
