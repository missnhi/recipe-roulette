// Import the checkValidInfo function from the helpers directory
import { checkValidInfo } from "../../../../helpers/checkValidInfo";

// Import the cookies utility from next/headers (not used in this example)
import { cookies } from "next/headers";

// Define an asynchronous POST function to handle POST requests
export async function POST(req, res) {
  // Parse the request body as JSON
  const data = await req.json();
  const cookieStore = await cookies();
  const { email, password } = data;

  // Log the extracted email and password for debugging purposes
  console.log(`The pass and email entered is: EMAIL: ${email} \n PASSWORD: ${password}`);

  // Use the checkValidInfo function to validate the email and password
  return checkValidInfo(email, password)
    .then(isValid => {
      // If the credentials are valid, return a 200 response with a success message
      if (isValid) {
        /**set the email cookie if the email and password are valid */
        cookieStore.set ({
          name: 'email',
          value: email,
        })
        return new Response(JSON.stringify({ message: `The Information is valid - Welcome ${email}` }), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        });
      } else {
        // If the credentials are invalid, return a 401 response with an error message
        return new Response(JSON.stringify({ message: "Invalid Information" }), {
          status: 401,
          headers: {
            "Content-Type": "application/json"
          }
        });
      }
    })
    .catch(error => {
      // If an error occurs, return a 500 response with an error message
      return new Response(JSON.stringify({ message: "An error occurred", error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      });
    });
}
