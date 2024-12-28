export default function handleLoginFormSubmit(e) {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  console.log("Email:", email);

  fetch('/api/users/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(response => response.json())
  .then(data => {
    console.log("Response:", data);
    alert(JSON.stringify(data, null, 2));
    // Display the response data in a user-friendly way
    console.log("Response Data:", JSON.stringify(data, null, 2));
    // You can integrate a notification library here to show the message to the user
    // Example: notificationLibrary.show(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('Error:', error);
  });
}