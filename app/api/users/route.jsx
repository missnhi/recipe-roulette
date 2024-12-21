import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(req, res) {
  const { name, email } = await req.json();
  const user = await prisma.user.create({
    data: { name, email },
  });
  return new Response(JSON.stringify(user), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function PUT(req, res) {
  return new Response('This is a plain text response', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

export async function DELETE(req, res) {
  return new Response('<h1>This is an HTML response</h1>', {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}