import axios from 'axios';

export const getAllBunga = async () => {
  try {
    const response = await axios.get(
      'http://be-reza-sukaharja.yoggaac.com/api/bunga'
    );
    return response.data;
  } catch (error) {
    console.log('Error sata fetching data : ', error);
    throw error;
  }
};
