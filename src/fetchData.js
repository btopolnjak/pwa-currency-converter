export default

async () => {
  let resultsFromServer = await fetch('https://api.hnb.hr/tecajn/v1', {
    mode: "no-cors"
  })
  let serverResponse = await resultsFromServer.json()
  return await serverResponse;
}