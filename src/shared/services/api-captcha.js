import axios from 'axios';

export const instance = axios.create({
  // baseURL: 'https://delivery-rest-api.onrender.com',
  baseURL: 'http://localhost:3030',
});

export const reCaptcha = async data => {
  const result = await instance.post('/api/recaptcha/captcha', data);

  return result;
};
