export default

async () => {
  let resultsFromServer = await fetch('https://api.hnb.hr/tecajn/v1', {
    "Access-Control-Allow-Origin" : "*", 
    "Access-Control-Allow-Credentials" : true
  })
  let serverResponse = await resultsFromServer.json()
  return await serverResponse;
}