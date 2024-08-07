import axios from 'axios';

export const instance = axios.create({
  // baseURL: 'https://delivery-rest-api.onrender.com',
  baseURL: 'http://localhost:3030',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const { data: result } = await instance.post('/api/auth/signup', data);
  setToken(result.token);
  return result;
};

export const signin = async data => {
  const { data: result } = await instance.post('/api/auth/login', data);
  setToken(result.token);
  return result;
};

export const logout = async () => {
  const data = await instance.post('/api/auth/logout');
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/api/auth/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
