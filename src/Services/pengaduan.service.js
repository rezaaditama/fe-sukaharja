import axios from 'axios';

export const createPengaduan = async (data) => {
  try {
    const response = await axios.post(
      'https://be-reza-sukaharja.yoggaac.com/api/pengaduan/post-pengaduan',
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
    const response = await axios.get(
      'https://be-reza-sukaharja.yoggaac.com/api/pengaduan'
    );
    return response.data;
  } catch (error) {
    console.log('Error sata fetching data : ', error);
    throw error;
  }
};

export const updatePengaduan = async (nik) => {
  try {
    const response = await axios.put(
      `https://be-reza-sukaharja.yoggaac.com/api/pengaduan/update-pengaduan/${nik}`
    );
    return response.data;
  } catch (error) {
    console.log('error : ' + error);
    throw error;
  }
};
