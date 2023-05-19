import authOperations from "../../redux/auth/authOperations";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.logIn({ name, password }));

    reset();
  };

  const reset = () => {
    setName("");
    setPassword("");
  };

  return (
    <div>
      <h2>Log In to continue </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
