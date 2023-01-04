import axios from 'axios';

const getProvider = async (id) => {
  const HOST = process.env.API_HOST || 'localhost'
  const PROTOCOL = process.env.PROTOCOL || 'http';
  try {
    const data = await axios.get(`${PROTOCOL}://${HOST}/Providers/${id}`)
    return data
  } catch (error) {
    console.log(error);
    return {}
  }
}

export default getProvider;