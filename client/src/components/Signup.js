import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (username.trim() && password.trim()&& email.trim()) {
      e.preventDefault();

      console.log({username, password,email});
      setUsername('');
      setPassword('');
      setEmail('');
    }
  };

  return (
    <main className="signup">
      <form action="" className="signup__form" onSubmit={handleSubmit}>
        <h2 className="signup__title">Log into your account</h2>

        <label htmlFor="">Email</label>
        <input
          type="email"
          className="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="">Username</label>
        <input
          type="text"
          className="username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <label htmlFor="">Password</label>
        <input
          type="text"
          className="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button className="signupButton">Signup</button>
        <p style={{
          textAlign: "center",
          marginTop: "30px"
        }}>
          You have an account?
          <Link className="link" to="/login">Login</Link>
        </p>
      </form>
    </main>
  );
}

export default Signup;