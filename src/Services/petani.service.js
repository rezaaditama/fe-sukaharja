import axios from 'axios';

export const getAllPetani = async () => {
  try {
    const response = await axios.get(
      'http://be-reza-sukaharja.yoggaac.com/api/petani'
    );
    return response.data;
  } catch (error) {
    console.log('Error sata fetching data : ', error);
    throw error;
  }
};
