export function sendEmail(data) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("Response: ", response); // Log the entire response object
      return response.message;
    })
    .catch((err) => {
      alert(err);
    });
}
