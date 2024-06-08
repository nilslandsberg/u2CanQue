export function sendOrder(order) {
  const apiEndpoint = '/api/order';
  const requestBody = JSON.stringify(order)

  return fetch(apiEndpoint, {
    method: 'POST',
    body: requestBody,
  })
    .then((res) => res.json())
    .then((response) => {
      return response.href;
    })
    .catch((err) => {
      alert(err);
    });
}
