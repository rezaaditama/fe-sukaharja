import axios from 'axios';

export const getAllBunga = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/bunga');
    return response.data;
  } catch (error) {
    console.log('Error sata fetching data : ', error);
    throw error;
  }
};
