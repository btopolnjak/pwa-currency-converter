export default

async () => {
  let resultsFromServer = await fetch('https://api.hnb.hr/tecajn/v1', {
    mode:'cors',
    method: 'GET',
  })
  let serverResponse = resultsFromServer.json()
  return serverResponse;
}