export const fetchData = async(QUERY: string) => {
  // Compose the URL for your project's endpoint and add the query
  const API_URL = `http://34.229.186.26:8000/${QUERY}`;
  console.log(API_URL);

  return await  fetch(API_URL)
  .then((res) => res.json())
  .then(({ result }) => result)
  .catch((error) => error);
};