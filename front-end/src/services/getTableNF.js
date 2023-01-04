import axios from 'axios';

const getTableNF = async () => {
  const HOST = process.env.API_HOST || 'localhost'
  const PROTOCOL = process.env.PROTOCOL || 'http';
  try {
    const data  = await axios.get(`${PROTOCOL}://${HOST}/orders/`)
    return data
  } catch (error) {
    console.log(error);
    return []
  }
}

export default getTableNF;