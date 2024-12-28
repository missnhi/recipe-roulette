import { checkValidInfo } from "../../../../helpers/checkValidInfo";

import { cookies } from "next/headers";

export async function POST(req, res) {
  const data = await req.json();
  const {email, password} = data;
  console.log(`The pass and email entered is: EMAIL: ${email} \n PASSWORD: ${password}`);
  //add the check value here to intercept the email an password then return a response for the rsult of the checkvalidvalue
  return checkValidInfo(email, password)
  .then(isValid => {
    if (isValid) {
      return new Response(JSON.stringify({message: `The Information is valid - Welcome ${email}`}), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    } else {
      return new Response(JSON.stringify({message: "Invalid Information"}), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  })
  .catch(error => {
    return new Response(JSON.stringify({message: "An error occurred", error: error.message}), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  });
}
