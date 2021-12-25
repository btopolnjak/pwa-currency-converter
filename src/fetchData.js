export default

async () => {
  let resultsFromServer = await fetch('https://api.hnb.hr/tecajn/v1', {
    mode: 'cors',
    headers: {'Access-Control-Allow-Origin':'*'}
  })
  let serverResponse = await resultsFromServer.json()
  return await serverResponse;
}