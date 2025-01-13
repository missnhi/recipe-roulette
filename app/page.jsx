// "use client";
// import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import "../styles/lottie.css";
import "../styles/recipe-div.css";
import Script from "next/script";
import Header from "@/components/header";

export default async function Page({ showRecipe }) {
  const users = await getUsers();

  return (
    <div className='recipe-container'>
      <Script
        src='https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs'
        type='module'
        strategy='lazyOnload'
        // Callback to log or trigger actions when the Lottie player script is fully loaded
        // onLoad={() => console.log("Lottie Player Script Loaded")}
      />
      <main className='recipe-div'>
        {users.map((user) => (
          <div key={user.id}>
            <h1>
              Email: {user.email} Name: {user.name}{" "}
            </h1>
          </div>
        ))}
        <Header />
      </main>
    </div>
  );
}

const getUsers = async () => {
  // Connect
  const prisma = new PrismaClient();
  // Get data
  const users = await prisma.user.findMany();
  // Disconnect
  await prisma.$disconnect();
  return users;
};
