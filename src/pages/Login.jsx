import addAvatar from "../images/addAvatar.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Marwan Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <p>
          You don't have an account?
          <Link to="/">
            <span>Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
