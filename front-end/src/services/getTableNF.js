import axios from 'axios';

const getTableNF = async () => {
  try {
    const data  = await axios.get('http://localhost:3010/orders')
    return data
  } catch (error) {
    console.log(error);
    return []
  }
}

export default getTableNF;