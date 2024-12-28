import handleLoginFormSubmit from "../helpers/handleLoginFormSubmit";

export default function LoginForm() {
return (
  <div>
    <form onSubmit={handleLoginFormSubmit}>
      <label>Email: </label>
      <input type="email" id="email"></input>
      <label>Password: </label>
      <input type="password" id="password"></input>
      <button type="submit">Submit</button>
    </form>
  </div>
);  
}