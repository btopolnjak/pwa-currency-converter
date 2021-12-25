export default

async () => {
  let body;
  let resultsFromServer = await fetch('https://cors-anywhere.herokuapp.com/https://api.hnb.hr/tecajn/v1', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  console.log(resultsFromServer);
  let serverResponse = await resultsFromServer.json()
  return await serverResponse;
}