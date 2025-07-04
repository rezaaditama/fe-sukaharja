import axios from 'axios';

export const getAllPetani = async () => {
  try {
    const response = await axios.get(
      'https://be-reza-sukaharja.yoggaac.com/api/petani'
    );
    return response.data;
  } catch (error) {
    console.log('Error sata fetching data : ', error);
    throw error;
  }
};

export const postPetani = async (data) => {
  try {
    const response = await axios.post(
      'https://be-reza-sukaharja.yoggaac.com/api/petani/post-petani',
      data
    );
    return response.data;
  } catch (error) {
    console.log('error : ' + error);
    throw error;
  }
};

export const deletePetaniByNik = async (nik) => {
  try {
    const response = await axios.delete(
      `https://be-reza-sukaharja.yoggaac.com/api/petani/delete-petani/${nik}`
    );
    return response.data;
  } catch (error) {
    console.log('error : ' + error);
    throw error;
  }
};

export const updatePetani = async (nik) => {
  try {
    const response = await axios.put(
      `https://be-reza-sukaharja.yoggaac.com/api/petani/update-petani/${nik}`
    );
    return response.data;
  } catch (error) {
    console.log('error : ' + error);
    throw error;
  }
};

export const updateDataPetani = async (nik, data) => {
  try {
    const response = await axios.put(
      `https://be-reza-sukaharja.yoggaac.com/api/petani/update-data-petani/${nik}`,
      data
    );
    return response.data;
  } catch (error) {
    console.log('error : ' + error);
    throw error;
  }
};
