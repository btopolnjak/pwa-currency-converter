export default

async () => {
  let resultsFromServer = await fetch('http://127.0.0.1:3010/');
  let serverResponse = await resultsFromServer.json();
  return await serverResponse;
}