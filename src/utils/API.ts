import axios from 'axios';

const endPoint = 'http://54.173.110.138:8000';
const globalPoint = 'http://3.236.171.13:8000';

const requestOptions: any = {
  method: 'GET',
  mode: 'no-cors',
  headers: {"Content-Type":  "application/json"},
  redirect: 'follow'
};

export const fetchData = async(QUERY: string, GLOBAL: boolean) => {
  // Compose the URL for your project's endpoint and add the query
  const API_URL = `${GLOBAL ? globalPoint : endPoint}/${QUERY}`;
  console.log('get', API_URL);

  return await fetch(API_URL, requestOptions)
  .then((res) => res.json())
  .catch((error) => error);
};

export const fetchRequest = async(METHOD: string, QUERY: string, PARAM: any, GLOBAL: boolean) => {
  // Compose the URL for your project's endpoint and add the query
  const API_URL = `${GLOBAL ? globalPoint : endPoint}/${QUERY}`;
  console.log('Post', API_URL);

  return await fetch(API_URL, {
    method: METHOD,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(PARAM),
  })
  .then((res) => res.json())
  .catch((error) => error);
};

export const axioData = async (QUERY: string) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${globalPoint}/${QUERY}`,
    headers: { 
      'Content-Type': 'application/json'
    },
  };
  
  return axios.request(config)
  .then((response) => response.data)
  .catch((error) => {
    console.log(error);
  });
}