export default function handleLoginFormSubmit(e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Extract the email and password values from the form
  const email = e.target.email.value;
  const password = e.target.password.value;

  // Log the extracted form data for debugging purposes
  console.log("Email:", email);
  console.log("Password:", password);

  // Send the data to the /signin route using the Fetch API
  fetch('/api/users/auth/signin', {
    method: 'POST', // Use the POST method
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header to application/json
    },
    body: JSON.stringify({ email, password }), // Convert the email and password to a JSON string
  })
  .then(response => {
    // Check if the response is OK (status code is in the range 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Read the response text and parse it as JSON if it is not empty
    return response.text().then(text => text ? JSON.parse(text) : {});
  })
  .then(data => {
    // Log the response data for debugging purposes
    console.log("Response:", data);
    // Display the response data in an alert box
    alert(JSON.stringify(data, null, 2));
    // Display the response data in a user-friendly way
    console.log("Response Data:", JSON.stringify(data, null, 2));
  })
  .catch(error => {
    // Log any errors that occur during the fetch request
    console.error('Error:', error);
  });
}