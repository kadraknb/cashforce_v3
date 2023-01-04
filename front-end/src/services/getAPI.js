import axios from 'axios';

const fetch = axios.create({
  baseURL: `https://cashforce-api-production.up.railway.app`,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const getAPI = async (method, endpoint, body) => fetch
  .request({ method, url: endpoint, data: body })
    .then(({ status, data }) => ({ status, data }));

export default getAPI;