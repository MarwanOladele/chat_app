import addAvatar from "../images/addAvatar.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Marwan Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <label htmlFor="file">
            <img src={addAvatar} alt="logo" />
            <span>Add an avatar</span>
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
          <button>Sign Up</button>
        </form>
        <p>
          You have an account?
          <Link to='./login'>
            <span>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
