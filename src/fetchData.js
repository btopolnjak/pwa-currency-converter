export default

async () => {
  let resultsFromServer = await fetch('https://d43b0db87c8e.sn.mynetname.net:8443/https://api.hnb.hr/tecajn/v1');
  let serverResponse = await resultsFromServer.json();
  return await serverResponse;
}