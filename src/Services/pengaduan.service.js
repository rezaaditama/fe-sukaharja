import axios from 'axios';

export const createPengaduan = async (data) => {
  try {
    const response = await axios.post(
      'http://localhost:4001/api/pengaduan/post-pengaduan',
      data
    );
    return response.data;
  } catch (error) {
    console.log('error : ' + error);
    throw error;
  }
};

export const getAllPengaduan = async () => {
  try {
    const response = await axios.get('http://localhost:4001/api/pengaduan');
    return response.data;
  } catch (error) {
    console.log('Error sata fetching data : ', error);
    throw error;
  }
};
