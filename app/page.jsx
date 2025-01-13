import { PrismaClient } from "@prisma/client";
import "../styles/lottie.css";
import "../styles/recipe-div.css";
import Script from "next/script";
import Header from "@/components/header";
import LoginForm from "@/components/LoginForm";
import RecipeInfoBoard from "@/components/RecipeInfoBoard";

export default async function Page({ showRecipe }) {
  const users = await getUsers();

<<<<<<< HEAD



export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const [users, setUsers] = useState([])
  const [recipes, setRecipes] = useState([])
  const lottieRef = useRef(null);
  

  useEffect(()=> {
    const fetchUsers = async() => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(Array.isArray(data) ? data : []);
    };

   

    const fetchRecipes = async() => {
      const response  = await fetch('/api/recipes');
      const data = await response.json();
      setRecipes(data);
    }

    fetchUsers();
  }, []);
  
  const onClickLoading = async () => {
    console.log('Should now show the recipe');
    setLoading(true); // Indicate loading has started
    const apiKey = process.env.SPOONACULAR_API_KEY;
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=apples,+flour,+sugar&number=2`
    );
    const data = await response.json();
    console.log("RECIPES", data);
    setRecipes(data || []);
    setLoading(false); // Indicate loading has finished
    setShowRecipe(true);
  };
=======
>>>>>>> main
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

          <LoginForm></LoginForm>
        </div>
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
