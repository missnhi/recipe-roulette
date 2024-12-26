import { PrismaClient } from "@prisma/client";
import { checkValidInfo } from "../../../../../helpers/helpers";

const prisma = new PrismaClient();
export async function GET(req, res) {
  const signInForm = ` <h1>Sign In</h1>
  <form action="/api/users/auth/signin" method="POST">
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <button type="submit">Sign In</button>
  </form>`;
  return new Response(signInForm, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
}

export async function POST(req, res) {
  const body = await req.json();
  const email = body.email;
  const password = body.password;
  console.log(`Email: ${email} \n Password:  ${password}`);

  return checkValidInfo(email, password, prisma)
    .then((isValid) => {
      if (isValid) {
        return new Response(JSON.stringify({ message: "Login Successful" }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        return new Response(
          JSON.stringify({ message: "Invalid email or password" }),
          {
            status: 401,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
    })
    .catch((error) => {
      console.log("Error during login:", error);
      return new Response(
        JSON.stringify({ message: "Internal server error" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });
}
