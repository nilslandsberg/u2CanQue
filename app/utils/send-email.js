export function sendEmail(data) {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      return response.message;
    })
    .catch((err) => {
      alert(err);
    });
}
