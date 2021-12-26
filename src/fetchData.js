export default

async () => {
  let resultsFromServer = await fetch('http://boris.letis.hr:3010/');
  let serverResponse = await resultsFromServer.json();
  return await serverResponse;
}