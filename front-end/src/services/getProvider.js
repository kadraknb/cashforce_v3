import axios from 'axios';

const getProvider = async (id) => {
  try {
    const data  = await axios.get(`http://localhost:3010/Providers/${id}`)
    return data
  } catch (error) {
    console.log(error);
    return {}
  }
}

export default getProvider;