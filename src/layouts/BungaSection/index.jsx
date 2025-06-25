import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import { getAllBunga } from '../../Services/bunga.service';

const BungaSection = () => {
  const [bunga, setBunga] = useState([]);
  useEffect(() => {
    const fetchDataBunga = async () => {
      try {
        const response = await getAllBunga();
        setBunga(response.data);
      } catch (error) {
        console.error('Gagal Membuat Data Petani: ', error);
      }
    };
    fetchDataBunga();
  }, []);

  return (
    <div className='w-full px-5 py-10'>
      <h1 className='text-center font-bold text-2xl uppercase border-b-1 pb-2 border-gray-300'>
        Potensi Bunga
      </h1>
      <div className='gap-5 w-full grid grid-cols-3 pt-5'>
        {bunga.map((flower, index) => {
          return (
            <Card
              key={index}
              src={flower.path}
              name={flower.nama_bunga}
              label={'Lihat Detail'}
              className={'w-full'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BungaSection;

// import Card from '../../components/Card';
// import { useEffect, useState } from 'react';
// import { getAllBunga } from '../../Services/bunga.service';

// const BungaSection = () => {
//   const [bunga, setBunga] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 3;

//   useEffect(() => {
//     const fetchDataBunga = async () => {
//       try {
//         const response = await getAllBunga();
//         setBunga(response.data);
//       } catch (error) {
//         console.error('Gagal Mengambil Data Bunga: ', error);
//       }
//     };
//     fetchDataBunga();
//   }, []);

//   const nextSlide = () => {
//     if (currentIndex + itemsPerPage < bunga.length) {
//       setCurrentIndex(currentIndex + 1); // geser 1 per klik
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1); // geser 1 ke kiri
//     }
//   };

//   const currentItems = bunga.slice(currentIndex, currentIndex + itemsPerPage);

//   return (
//     <div className='w-full px-5 py-10'>
//       <h1 className='text-center font-bold text-2xl uppercase border-b pb-2 border-gray-300'>
//         Potensi Bunga
//       </h1>

//       <div className='flex justify-between items-center mt-6'>
//         <button
//           onClick={prevSlide}
//           className='px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40'
//           disabled={currentIndex === 0}
//         >
//           &larr; Sebelumnya
//         </button>

//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 flex-1 px-4'>
//           {currentItems.map((flower, index) => (
//             <Card
//               key={index}
//               src={flower.path}
//               name={flower.nama_bunga}
//               label='Lihat Detail'
//               className='w-full'
//             />
//           ))}
//         </div>

//         <button
//           onClick={nextSlide}
//           className='px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40'
//           disabled={currentIndex + itemsPerPage >= bunga.length}
//         >
//           Selanjutnya &rarr;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BungaSection;
