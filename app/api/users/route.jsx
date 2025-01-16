import prisma from "@/prisma/prisma";

export async function GET(req, res) {
  return prisma.user.findMany()
    .then(users => {
      return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    })
    .catch(error => {
      console.error("Error fetching users:", error);
      return new Response(JSON.stringify({ error: "Error fetching users" }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}

export async function POST(req, res) {
  return req.json()
    .then(({ name, email, password }) => {
      return prisma.user.create({
        data: { name, email, password },
      });
    })
    .then(user => {
      return new Response(JSON.stringify(user), {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    })
    .catch(error => {
      console.error("Error creating user:", error);
      return new Response(JSON.stringify({ error: "Error creating user" }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}

export async function PUT(req, res) {
  return new Response('This is a plain text response', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  }).finally(() => {
    prisma.$disconnect();
  });
}