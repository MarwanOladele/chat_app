const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Marwan Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name"/>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <label htmlFor="file">
            <img src="./images/addAvatar.png" alt="logo" />
          </label>
          <input type="file" id="file" style={{display: 'none'}}/>
          <button>Sign Up</button>
        </form>
        <p>You don't have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
