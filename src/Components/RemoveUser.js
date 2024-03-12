import "./Adduser.css";
const RemoveUser = () => {
  return (
    <div class="add container">
      <h1>Remove User</h1>
      <form action="/remove-user" method="POST">
        <label for="email">Email:</label>
        <input type="email" id="email" name="Email" required />

        <button type="submit">Remove User</button>
      </form>
    </div>
  );
};
export default RemoveUser;
