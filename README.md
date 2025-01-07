This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/index.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Create "recipe_roulette" Database

Start postgres server with `startpostgres` in your terminal.

Enter `psql` or `psql -U <username>` to login into psql.

Enter your password for the username (for LHL the username is `labber` and password is `labber` by default).

Create a database in the psql console by typing: `create DATABASE recipe_roulette;`.

Check to see if your new database now exists in the list with: `\l`.

Ensure that prisma dependency is installed with: `npm install`.

Create a `.env` file and copy the contents from `env.example` template file:

```
DATABASE_URL="postgresql://<psqlusername>:<password>@localhost:5432/<database_name>"
```

Change it to:

```
DATABASE_URL="postgresql://labber:labber@localhost:5432/recipe_roulette"
```

to locate your psql db.

Run `npx prisma migrate dev --name init` to create the initial migration.

Run `node db/seed.js` to seed the database.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
