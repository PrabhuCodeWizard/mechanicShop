const endPoint = 'http://34.207.253.168:8000';
const globalPoint = 'http://11.11.11.11:8000';

export const fetchData = async(QUERY: string, GLOBAL: boolean) => {
  // Compose the URL for your project's endpoint and add the query
  const API_URL = `${GLOBAL ? globalPoint : endPoint}/${QUERY}`;
  console.log('get', API_URL);

  return await fetch(API_URL)
  .then((res) => res.json())
  .catch((error) => error);
};

export const fetchRequest = async(METHOD: string, QUERY: string, PARAM: any, GLOBAL: boolean) => {
  // Compose the URL for your project's endpoint and add the query
  const API_URL = `${GLOBAL ? globalPoint : endPoint}/${QUERY}`;
  console.log('Post', API_URL);

  return await fetch(API_URL, {
    method: METHOD,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(PARAM),
  })
  .then((res) => res.json())
  .catch((error) => error);
};