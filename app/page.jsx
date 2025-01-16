import { PrismaClient } from "@prisma/client";
import "../styles/recipe-div.css";
import Script from "next/script";
import Header from "@/components/header";
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
        <Header showRecipe={showRecipe} />
        {showRecipe && (
          <div>
            <RecipeInfoBoard></RecipeInfoBoard>
          </div>
        )}
        {/* <div
          className='test-div'
          style={{
            borderTop: "solid white",
            backgroundColor: "#480025",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Delete after testing is done!</h1>
          <h1>USERS</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {" "}
                {user.id} - {user.name} - {user.email} - {user.password}
              </li>
            ))}
          </ul>
        </div> */}

        {/* <FormModal /> */}

        {/* <LoginForm /> */}
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
