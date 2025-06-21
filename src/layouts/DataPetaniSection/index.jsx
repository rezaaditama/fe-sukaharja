import { useEffect, useState } from 'react';
import { getAllPetani } from '../../Services/petani.service';

const DataPetaniSection = () => {
  const [petani, setPetani] = useState([]);

  useEffect(() => {
    const fetchDataPetani = async () => {
      try {
        const response = await getAllPetani();
        setPetani(response.data);
      } catch (error) {
        console.error('Gagal Membuat Data Petani: ', error);
      }
    };
    fetchDataPetani();
  }, []);

  return (
    <div className='w-full p-10'>
      <h1 className='text-center font-bold uppercase text-3xl border-b-1 pb-2 border-gray-300'>
        Data Petani
      </h1>
      <div className='max-h-[70vh] overflow-y-auto'>
        <table className='w-full mt-7 border-collapse'>
          <thead>
            <tr className='border-b-1 border-gray-300 uppercase text-base'>
              <th>No</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Nama Bunga</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {petani.map((data, index) => {
              return (
                <tr
                  key={data.nik_petani}
                  className='text-center border-b-1 border-gray-300 text-sm'
                >
                  <td className='pt-3 pb-2'>{index + 1}</td>
                  <td className='pt-3 pb-2'>{data.nik_petani}</td>
                  <td className='pt-3 pb-2 px-2 text-justify'>
                    {data.nama_petani}
                  </td>
                  <td className='pt-3 pb-2 px-2 text-justify'>
                    {data.alamat_petani}
                  </td>
                  <td className='pt-3 pb-2 px-2 text-justify'>
                    {data.nama_bunga}
                  </td>
                  <td className='pt-3 pb-2 px-2'>
                    {data.status === 0 ? 'Waiting' : 'Terverifikasi'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataPetaniSection;
