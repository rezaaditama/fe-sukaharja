import axios from 'axios';

export const getAllPetani = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/petani');
    return response.data;
  } catch (error) {
    console.log('Error saata fetching data : ', error);
    throw error;
  }
};
