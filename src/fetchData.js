export default

async () => {
  let resultsFromServer = await fetch('https://thingproxy.freeboard.io/fetch/https://api.hnb.hr/tecajn/v1');
  let serverResponse = await resultsFromServer.json();
  return await serverResponse;
}