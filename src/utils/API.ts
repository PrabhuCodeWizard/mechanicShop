export const fetchData = async(QUERY: string) => {
  // Compose the URL for your project's endpoint and add the query
  const API_URL = `http://18.206.233.99:8000/${QUERY}`;
  console.log('get', API_URL);

  return await fetch(API_URL)
  .then((res) => res.json())
  .catch((error) => error);
};

export const fetchRequest = async(METHOD: string, QUERY: string, PARAM: any) => {
  // Compose the URL for your project's endpoint and add the query
  const API_URL = `http://18.206.233.99:8000/${QUERY}`;
  console.log('Post', API_URL);

  return await fetch(API_URL, {
    method: METHOD,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(PARAM),
  })
  .then((res) => res.json())
  .catch((error) => error);
};