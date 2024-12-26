import { checkValidInfo } from "../../../../helpers/helpers";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function POST(req, res) {
  let email, password;

  if (req.headers.get("content-type") === "application/json") {
    const body = await req.json();
    email = body.email;
    password = body.password;
  } else if (req.headers.get("content-type") === "application/x-www-form-urlencoded") {
    const formData = await req.formData();
    email = formData.get("email");
    password = formData.get("password");
  } else {
    return new Response(JSON.stringify({ message: "Unsupported content type" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

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
      console.error("Error during login:", error);
      return new Response(JSON.stringify({ message: "Internal server error" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}