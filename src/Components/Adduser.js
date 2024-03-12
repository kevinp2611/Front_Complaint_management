import "./Adduser.css";
const Adduser = () => {
  return (
    <>
      <div class="add container">
        <h1>Create a New User</h1>
        <form>
          <label for="name">Firstname:</label>
          <input type="text" id="Firstname" name="Firstname" required />
          <label for="name">Lastname:</label>
          <input type="text" id="Lastname" name="Lastname" required />
          <label for="email">Email:</label>
          <input type="email" id="email" name="Email" required />
          <label for="monbileno">Mobileno:</label>
          <input type="number" id="Phone" name="Phone" required />
          <button type="submit">Create User</button>
        </form>
      </div>
    </>
  );
};
export default Adduser;
