import axios from 'axios';
const baseUrl = 'http://localhost:8000';

export const getSequence = (url) => {
  return axios.get(`${baseUrl}/sequence${url}`)
    .then(res =>  {   
      return res.data 
    })
    .catch(err => console.log(err));
}