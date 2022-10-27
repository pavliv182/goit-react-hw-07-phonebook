// https://635a38f0ff3d7bddb9b1f718.mockapi.io/api/v1/:endpoint
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://635a436938725a1746c18731.mockapi.io/api/v1/contacts',
});

export const fetch = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addNewContact = async contact => {
  const { data } = await instance.post('/', contact);
  return data;
};

export const removeNewContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
