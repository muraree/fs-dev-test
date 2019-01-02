import axios from 'axios';
const baseUrl = 'http://localhost:8000';

export const getSequence = (url, options) => {
  return axios.get(`${baseUrl}/sequence${url}?accumulator=${options.accumulator}&isEven=${options.isEven}`)
    .then(res =>  {  
      return res.data 
    })
    .catch(err => console.log(err));
}