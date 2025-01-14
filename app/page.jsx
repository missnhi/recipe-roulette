import { PrismaClient } from "@prisma/client";
import "../styles/lottie.css";
import "../styles/recipe-div.css";
import Script from "next/script";
import Header from "@/components/header";
import LoginForm from "@/components/LoginForm";
import RecipeInfoBoard from "@/components/RecipeInfoBoard";
import FormModal from "@/components/FormModal";
// import { cookies } from "next/headers";

export default async function Page({ showRecipe }) {
  const users = await getUsers();
  // const cookieStore = await cookies();
  // const hasCookies = await cookieStore.get("userId");
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
        {showRecipe && (
          <div>
            <RecipeInfoBoard></RecipeInfoBoard>
          </div>
        )}
        <div style={{ borderTop: "solid white", backgroundColor: "#480025" }}>
          <h1>Delete after testing is done!</h1>
          <h1> USERS</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {" "}
                {user.name} - {user.email} - {user.password}
              </li>
            ))}
          </ul>

          <FormModal />

          {/* <LoginForm /> */}
        </div>
      </main>
    </div>
  );
}

// All DB queries below in it's own function
const getUsers = async () => {
  // Connect
  const prisma = new PrismaClient();
  // Get data
  const users = await prisma.user.findMany();
  // Disconnect
  await prisma.$disconnect();
  return users;
};

const getRecipes = async () => {
  // Connect
  const prisma = new PrismaClient();
  // Get data
  const users = await prisma.user.findMany();
  // Disconnect
  await prisma.$disconnect();
  return users;
};
