import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const DiagramSection = ({ petani, pengaduan }) => {
  const verifikasiData = [
    {
      name: 'Terverifikasi',
      value: petani.filter((p) => p.status === 1).length,
    },
    {
      name: 'Belum Terverifikasi',
      value: petani.filter((p) => p.status === 0).length,
    },
  ];

  const pengaduanJenisData = pengaduan.reduce((acc, item) => {
    const existing = acc.find((i) => i.name === item.jenis_pengaduan);
    if (existing) existing.value += 1;
    else acc.push({ name: item.jenis_pengaduan, value: 1 });
    return acc;
  }, []);
  const COLORS = ['#1e3a8a', '#0f172a'];
  return (
    <div
      id='statistikDiagram'
      className='mt-10 border border-gray-300 space-y-2 p-5 shadow rounded-xl'
    >
      <h1 className='text-center font-bold text-2xl'>Statistik Diagram</h1>
      <div className='grid grid-cols-3 gap-5'>
        <div className='rounded-xl shadow border border-gray-300 p-5 space-y-2 col-span-2'>
          <h2 className='text-lg font-bold text-center'>
            Distribusi Jenis Pengaduan
          </h2>
          <ResponsiveContainer
            width='100%'
            height={250}
            className={'hover:scale-110 transition duration-300'}
          >
            <BarChart data={pengaduanJenisData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='value' fill='#1e3a8a' />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='rounded-xl border border-gray-300 shadow p-5'>
          <h2 className='text-lg font-bold text-center'>
            Status Verifikasi Petani
          </h2>
          <ResponsiveContainer
            width='100%'
            height={250}
            className={'hover:scale-110 transition duration-300'}
          >
            <PieChart>
              <Pie
                data={verifikasiData}
                cx='50%'
                cy='50%'
                outerRadius={80}
                label
              >
                {verifikasiData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DiagramSection;
