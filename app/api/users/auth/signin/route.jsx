import { checkValidInfo } from "../../../../helpers/checkValidInfo";

import { cookies } from "next/headers";

export async function POST(req, res) {
  const data = await req.json();
  const {email, password} = data;
  console.log(`The pass and email is in here: EMAIL: ${email} \n PASSWORD: ${password}`);
  return new Response(JSON.stringify({message:"Must be the wind"}), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  })
}